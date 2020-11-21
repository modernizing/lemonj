import {LessParserListener} from "./ast/LessParserListener";

export class MappingListener extends LessParserListener {
  enterStylesheet(ctx) {

  }
  setMapping(node) {
    this.mapping = node;
  }
  enterVariableDeclaration(ctx) {
    let propertyKey = this.getOriginText(ctx.children[0]);
    let propertyValue = this.getOriginText(ctx.children[2]);

    this.mapping[propertyValue] = propertyKey;
  }

  getOriginText(node) {
    let inputStream = node.start.getInputStream();
    if (!inputStream) {
      return node.getText();
    }

    return inputStream.getText(node.start.start, node.stop.stop);
  }
}

