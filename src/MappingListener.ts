import { Interval } from 'antlr4ts/misc/Interval';
import { LessParserListener } from './ast/LessParserListener';

export class MappingListener implements LessParserListener {
  mapping: any;

  enterStylesheet(ctx) {}

  setMapping(node) {
    this.mapping = node;
  }

  enterVariableDeclaration(ctx) {
    let propertyKey = this.getOriginText(ctx.children[0]);
    let propertyValue = this.getOriginText(ctx.children[2]);

    this.mapping[propertyValue] = propertyKey;
  }

  getOriginText(node) {
    let inputStream = node.start.inputStream;
    if (!inputStream) {
      return node.getText();
    }

    return inputStream.getText(new Interval(node.start.startIndex, node.stop.stopIndex));
  }
}
