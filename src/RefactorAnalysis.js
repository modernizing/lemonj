import antlr4 from 'antlr4/index';
import {LessLexer} from './ast/LessLexer.js';
import {LessParser} from './ast/LessParser.js';
import {RefactorAnalysisListener} from "./RefactorAnalysisListener";

export default function refactorAnalysis(input, filePath, colorIndex) {
  const filename = filePath.replace(/^.*[\\\/]/, '');

  let chars = new antlr4.InputStream(input);
  let lexer = new LessLexer(chars);
  let tokens = new antlr4.CommonTokenStream(lexer);
  let parser = new LessParser(tokens);
  parser.buildParseTrees = true;

  let tree = parser.stylesheet();
  let listener = new RefactorAnalysisListener();
  listener.COLOR_INDEX = colorIndex;

  listener.setMetaData({
    fileName: filename,
    filePath: filePath,
    fontFamily: [],
    importants: [],
    mediaQueries: [],
    oddWidth: [],
    absolute: [],
    issues: []
  });

  antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

  return {
    metadata: listener.metadata,
    colorMappings: listener.COLOR_MAPS,
    colorIndex: listener.COLOR_INDEX,
    colorFileMaps: listener.COLOR_FILE_MAPS,
    lastNode: listener.lastNode
  }
}
