import { CSS_COLOR_NAMES } from './CssColors';
import { LessParserListener } from './ast/LessParserListener';
import {
  CommandStatementContext,
  LessParser,
  MeasurementContext,
  PropertyContext,
  RulesetContext,
  SelectorContext,
  StatementContext,
} from './ast/LessParser';
import { Interval } from 'antlr4ts/misc/Interval';

let Checker = {
  hasColor: function (value) {
    return (
      value.startsWith('#') ||
      CSS_COLOR_NAMES.includes(value.toLowerCase()) ||
      value.startsWith('rgba') ||
      value.startsWith('rgb') ||
      value.startsWith('hsl') ||
      value.startsWith('hsla')
    );
  },
  hasImportant: function (value) {
    return value.includes('!important');
  },
  hasPx: function (value) {
    return value.includes('px');
  },
  hasAbsolute: function (value) {
    return value.includes('absolute');
  },
};

export interface MetaData {
  fileName: string;
  filePath: string;
  fontFamily: Array<any>;
  importants: Array<any>;
  mediaQueries: Array<object>;
  oddWidth: Array<any>;
  absolute: Array<any>;
  issues: Array<any>;
}

export class RefactorAnalysisListener implements LessParserListener {
  metadata: MetaData;
  COLOR_MAPS = {};
  COLOR_FILE_MAPS = {};
  COLOR_INDEX = 0;
  BLOCK_STACKS = [];
  lastNode = {
    name: 'root',
    selectors: [],
    children: [],
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
      end: ctx.stop.line,
    });
  }

  enterStatement(ctx: StatementContext) {
    if (ctx.children && ctx.children[0] instanceof RulesetContext) {
      let selectors = ctx.children[0].getChild(0);
      let selector_text = selectors.text;

      let selectors_array = [];
      let index = 0;
      for (; index < selectors.childCount; index++) {
        let selector = selectors.getChild(index);
        if (selector instanceof SelectorContext) {
          for (let ele of selector.element()) {
            selectors_array.push(ele);
          }
        }
      }

      let pos = this.buildPos(ctx);
      let node = {
        name: selector_text,
        parent: this.lastNode,
        selectors: selectors_array,
        pos,
        children: [],
      };

      this.lastNode.children.push(node);
      this.lastNode = node;

      this.BLOCK_STACKS.push(selector_text);
    }
  }

  exitStatement(ctx) {
    if (ctx.children && ctx.children[0] instanceof RulesetContext) {
      this.lastNode = this.lastNode.parent;

      this.BLOCK_STACKS.pop();
    }
  }

  enterProperty(ctx: PropertyContext) {
    let propertyKey = ctx.children[0].text;
    let valuesExpr = ctx.children[2];
    let propertyValue = valuesExpr.text;

    if (Checker.hasImportant(propertyValue)) {
      if (!this.metadata.importants) {
        this.metadata.importants = [];
      }

      this.metadata.importants.push({
        type: '!important',
        file: this.metadata.filePath,
        line: ctx._start.line,
      });
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
        if (!valuesExpr.childCount) {
          return;
        }

        let index = 0;
        for (; index < valuesExpr.childCount; index++) {
          let valueChild = valuesExpr.getChild(index);
          if (valueChild instanceof CommandStatementContext) {
            for (let child of valueChild.children) {
              if (Checker.hasColor(child.text)) {
                this.append_issue(child, 'color');
                this.updateColorMap(child);
              }
            }
          } else {
            if (Checker.hasColor(valueChild.text)) {
              this.append_issue(valueChild, 'color');
              this.updateColorMap(valueChild);
            }
          }
        }
        break;
      case 'font-family':
        if (!this.metadata.fontFamily) {
          this.metadata.fontFamily = [];
        }

        let pos = this.buildPos(valuesExpr);
        this.metadata.fontFamily.push({
          type: 'font-family',
          origin: this.getOriginText(valuesExpr, false),
          file: this.metadata.filePath,
          pos,
        });
        break;

      case 'position':
        if (!Checker.hasAbsolute(propertyValue)) {
          return;
        }
        this.metadata.absolute.push(this.buildItem(valuesExpr, 'absolute'));
        break;

      case 'width':
        if (!Checker.hasPx(propertyValue)) {
          return;
        }

        // commandStatement -> expression -> measurement;
        let measurement = valuesExpr.getChild(0).getChild(0).getChild(0);
        if (measurement instanceof MeasurementContext) {
          let number = measurement.getChild(0).text;
          if (this.isOdd(parseInt(number, 10))) {
            this.metadata.oddWidth.push(this.buildItem(valuesExpr, 'oddWidth'));
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
        column: expr.start.charPositionInLine + editor_offset,
      },
      end: {
        line: expr.stop.line,
        column: expr.stop.charPositionInLine,
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
      pos,
    });
  }

  getOriginText(node, isColor?) {
    let inputStream = node.start.inputStream;

    if (!inputStream) {
      return node.text;
    }

    let text = inputStream.getText(new Interval(node.start.startIndex, node.stop.stopIndex));

    if (isColor && Checker.hasImportant(text)) {
      // commandStatement -> expression -> Color
      let color = node.getChild(0).getChild(0).getChild(0);
      if (color.symbol) {
        // color: #ddddd !important
        return inputStream.getText(new Interval(color.symbol.start, color.symbol.stop));
      } else {
        // color: white !important
        return inputStream.getText(new Interval(color.start.start, color.start.stop));
      }
    }

    return text;
  }

  exitStylesheet(ctx) {}
}
