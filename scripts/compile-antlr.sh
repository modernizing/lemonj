cd lang

antlr -Dlanguage=JavaScript -listener LessLexer.g4
antlr -Dlanguage=JavaScript -listener LessParser.g4
