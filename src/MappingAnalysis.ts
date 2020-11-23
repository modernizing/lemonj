import antlr4 from 'antlr4/index';
import { LessLexer } from './ast/LessLexer.js';
import { LessParser } from './ast/LessParser.js';
import { MappingListener } from './MappingListener';

export default function mappingAnalysis(input: string) {
  let chars = new antlr4.InputStream(input);
  let lexer = new LessLexer(chars);
  let tokens = new antlr4.CommonTokenStream(lexer);
  let parser = new LessParser(tokens);
  parser.buildParseTrees = true;

  let tree = parser.stylesheet();
  let listener = new MappingListener();
  listener.setMapping({});
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
  return {
    mapping: listener.mapping,
  };
}
