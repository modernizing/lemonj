import {CSS_COLOR_NAMES} from "./CssColors";
import {LessParserListener} from "./ast/LessParserListener";
import {LessParser} from "./ast/LessParser";

let Checker = {
  hasColor: function (value) {
    return value.startsWith('#')
      || CSS_COLOR_NAMES.includes(value.toLowerCase())
      || value.startsWith('rgba')
      || value.startsWith('rgb')
      || value.startsWith('hsl')
      || value.startsWith('hsla');
  },
  hasImportant: function (value) {
    return value.includes('!important');
  },
  hasPx: function (value) {
    return value.includes('px');
  },
  hasAbsolute: function (value) {
    return value.includes('absolute');
  }
}

export class RefactorAnalysisListener extends LessParserListener {
  metadata = {};
  COLOR_MAPS = {};
  COLOR_FILE_MAPS = {};
  COLOR_INDEX = 0;
  BLOCK_STACKS = [];
  lastNode = {
    name: 'root',
    selectors: [],
    children: []
  };

  setMetaData(data) {
    this.metadata = data;
  }

  enterMedia(ctx) {
    if (!this.metadata.mediaQueries) {
      this.metadata.mediaQueries = [];
    }

    this.metadata.mediaQueries.push({
      type: '@media',
      file: this.metadata.filePath,
      start: ctx.start.line,
      end: ctx.stop.line
    })
  }

  enterStatement(ctx) {
    if (ctx.children && ctx.children[0] instanceof LessParser.RulesetContext) {
      let selectors = ctx.children[0].children[0];
      let selector_text = this.getOriginText(selectors);

      let selectors_array = [];
      for (let selector of selectors.children) {
        if (selector instanceof LessParser.SelectorContext) {
          for (let ele of selector.element()) {
            selectors_array.push(ele.getText());
          }
        }
      }

      let pos = this.buildPos(ctx);
      let node = {
        name: selector_text,
        parent: this.lastNode,
        selectors: selectors_array,
        pos,
        children: []
      }

      this.lastNode.children.push(node);
      this.lastNode = node;

      this.BLOCK_STACKS.push(selector_text);
    }
  }

  exitStatement(ctx) {
    if (ctx.children && ctx.children[0] instanceof LessParser.RulesetContext) {
      this.lastNode = this.lastNode.parent;

      this.BLOCK_STACKS.pop();
    }
  }

  enterProperty(ctx) {
    let propertyKey = ctx.children[0].getText();
    let valuesExpr = ctx.children[2];
    let propertyValue = valuesExpr.getText();

    if (Checker.hasImportant(propertyValue)) {
      if (!this.metadata.importants) {
        this.metadata.importants = [];
      }

      this.metadata.importants.push({
        type: '!important',
        file: this.metadata.filePath,
        line: valuesExpr.start.line
      })
    }

    switch (propertyKey) {
      case 'color':
      case 'background-color':
      case 'border-color':
      case 'background':
        if (Checker.hasColor(this.getOriginText(valuesExpr, true))) {
          this.append_issue(valuesExpr, 'color');
          this.updateColorMap(valuesExpr);
        }
        break;

      case 'border':
      case 'border-right':
      case 'border-left':
      case 'border-bottom':
      case 'border-top':
      case 'border-right-color':
      case 'border-left-color':
      case 'border-bottom-color':
      case 'border-top-color':
      case 'box-shadow':
      case '-webkit-box-shadow':
      case '-moz-box-shadow':
        if (!valuesExpr.children) {
          return;
        }

        for (let valueChild of valuesExpr.children) {
          if (valueChild instanceof LessParser.CommandStatementContext) {
            for (let child of valueChild.children) {
              if (Checker.hasColor(child.getText())) {
                this.append_issue(child, 'color');
                this.updateColorMap(child);
              }
            }
          } else {
            if (Checker.hasColor(valueChild.getText())) {
              this.append_issue(valueChild, 'color');
              this.updateColorMap(valueChild);
            }
          }
        }
        break;
      case "font-family":
        if (!this.metadata.fontFamily) {
          this.metadata.fontFamily = [];
        }

        let pos = this.buildPos(valuesExpr);
        this.metadata.fontFamily.push({
          type: 'font-family',
          origin: this.getOriginText(valuesExpr, false),
          file: this.metadata.filePath,
          pos
        })
        break;

      case 'position':
        if (!Checker.hasAbsolute(propertyValue)) {
          return;
        }
        this.metadata.absolute.push(this.buildItem(valuesExpr, 'absolute'))
        break;

      case 'width':
        if (!Checker.hasPx(propertyValue)) {
          return;
        }

        // commandStatement -> expression -> measurement;
        let measurement = valuesExpr.children[0].children[0].children[0];
        if (measurement instanceof LessParser.MeasurementContext) {
          let number = measurement.children[0].getText();
          if (this.isOdd(parseInt(number, 10))) {
            this.metadata.oddWidth.push(this.buildItem(valuesExpr, 'oddWidth'))
          }
        }
        break;
    }
  }

  buildItem(valuesExpr, type) {
    let pos = this.buildPos(valuesExpr);
    return {
      type: type,
      origin: this.getOriginText(valuesExpr, false),
      file: this.metadata.filePath,
      pos,
    };
  }

  buildPos(expr) {
    let editor_offset = 1;
    return {
      start: {
        line: expr.start.line,
        column: expr.start.column + editor_offset,
      },
      end: {
        line: expr.stop.line,
        column: expr.stop.column,
      },
    };
  }

  isOdd(num) {
    return num % 2;
  }

  updateColorMap(valuesExpr) {
    let text = this.getOriginText(valuesExpr, true);
    if (!this.COLOR_MAPS[text]) {
      this.COLOR_MAPS[text] = '@color' + this.COLOR_INDEX;
      this.COLOR_INDEX = this.COLOR_INDEX + 1;
    }

    let line = valuesExpr.start.line;
    if (!this.COLOR_FILE_MAPS[text]) {
      this.COLOR_FILE_MAPS[text] = [this.metadata.filePath + ':' + line];
    } else {
      this.COLOR_FILE_MAPS[text].push(this.metadata.filePath + ':' + line);
    }
  }

  append_issue(node, type) {
    // todo: make get from input
    let pos = this.buildPos(node);
    this.metadata.issues.push({
      type: type,
      origin: this.getOriginText(node, type === 'color'),
      pos
    })
  }
  //
  // isColor(strColor) {
  //   const s = new Option().style;
  //   s.color = strColor;
  //   const test1 = s.color === strColor;
  //   const test2 = /^#[0-9A-F]{6}$/i.test(strColor);
  //   return test1 === true || test2 === true;
  // }

  getOriginText(node, isColor) {
    let inputStream = node.start.getInputStream();
    if (!inputStream) {
      return node.getText();
    }

    let text = inputStream.getText(node.start.start, node.stop.stop);
    if (isColor && Checker.hasImportant(text)) {
      // commandStatement -> expression -> Color
      let color = node.children[0].children[0].children[0];
      if (color.symbol) {
        // color: #ddddd !important
        return inputStream.getText(color.symbol.start, color.symbol.stop)
      } else {
        // color: white !important
        return inputStream.getText(color.start.start, color.start.stop)
      }
    }

    return text;
  }

  exitStylesheet(ctx) {

  }
}
