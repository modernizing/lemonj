import { ParserRuleContext } from 'antlr4ts';
import { Interval } from 'antlr4ts/misc/Interval';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { LessParserListener } from './ast/LessParserListener';

export class MappingListener implements LessParserListener {
  mapping: object = {};

  setMapping(node) {
    this.mapping = node;
  }

  enterVariableDeclaration(ctx) {
    let propertyKey = this.getOriginText(ctx.children[0]);
    let propertyValue = this.getOriginText(ctx.children[2]);

    this.mapping[propertyValue] = propertyKey;
  }

  getOriginText(node: ParserRuleContext): string {
    let inputStream = node.start.inputStream;
    if (!inputStream) {
      return node.text;
    }

    return inputStream.getText(new Interval(node.start.startIndex, node.stop.stopIndex));
  }

  visitTerminal(node: TerminalNode) {}
  visitErrorNode(node: ErrorNode) {}
  enterEveryRule(ctx: ParserRuleContext) {}
  exitEveryRule(ctx: ParserRuleContext) {}
}
