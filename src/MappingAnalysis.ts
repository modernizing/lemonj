import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { LessLexer } from './ast/LessLexer.js';
import { LessParser } from './ast/LessParser.js';
import { MappingListener } from './MappingListener';

export default function mappingAnalysis(input: string) {
  let chars = new ANTLRInputStream(input);
  let lexer = new LessLexer(chars);
  let tokens = new CommonTokenStream(lexer);
  let parser = new LessParser(tokens);
  parser.buildParseTrees = true;

  let tree = parser.stylesheet();
  let listener = new MappingListener();
  listener.setMapping({});
  ParseTreeWalker.DEFAULT.walk(listener, tree);
  return {
    mapping: listener.mapping,
  };
}
