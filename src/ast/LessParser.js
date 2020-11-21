// Generated from LessParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var LessParserListener = require('./LessParserListener').LessParserListener;
var grammarFileName = "LessParser.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0091\u01b6\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004",
    "$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004",
    "+\t+\u0004,\t,\u0004-\t-\u0003\u0002\u0007\u0002\\\n\u0002\f\u0002\u000e",
    "\u0002_\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003h\n\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0007\u0005q\n\u0005\f\u0005\u000e\u0005t\u000b\u0005\u0005\u0005v",
    "\n\u0005\u0003\u0006\u0005\u0006y\n\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0007\u0006~\n\u0006\f\u0006\u000e\u0006\u0081\u000b\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0007\u0006\u0086\n\u0006\f\u0006\u000e",
    "\u0006\u0089\u000b\u0006\u0005\u0006\u008b\n\u0006\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u0093\n\b\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u009d\n\n",
    "\u0003\u000b\u0006\u000b\u00a0\n\u000b\r\u000b\u000e\u000b\u00a1\u0003",
    "\u000b\u0005\u000b\u00a5\n\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00b4\n\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00c1\n",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00c6\n\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0007\u0010",
    "\u00cd\n\u0010\f\u0010\u000e\u0010\u00d0\u000b\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0005\u0011\u00db\n\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00e2\n\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0007\u0014\u00ed\n\u0014\f\u0014\u000e",
    "\u0014\u00f0\u000b\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u00f4\n",
    "\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u00f8\n\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0005\u0016\u0102\n\u0016\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0007\u0017\u0107\n\u0017\f\u0017\u000e\u0017\u010a\u000b\u0017",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0007\u0019",
    "\u0111\n\u0019\f\u0019\u000e\u0019\u0114\u000b\u0019\u0003\u0019\u0005",
    "\u0019\u0117\n\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u0120\n\u001a\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0007\u001b\u0127",
    "\n\u001b\f\u001b\u000e\u001b\u012a\u000b\u001b\u0005\u001b\u012c\n\u001b",
    "\u0003\u001b\u0005\u001b\u012f\n\u001b\u0003\u001b\u0003\u001b\u0005",
    "\u001b\u0133\n\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001d\u0003\u001d\u0005\u001d\u013c\n\u001d\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0005\u001e\u0141\n\u001e\u0003\u001e",
    "\u0003\u001e\u0005\u001e\u0145\n\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0007\u001f\u014c\n\u001f\f\u001f\u000e",
    "\u001f\u014f\u000b\u001f\u0003 \u0006 \u0152\n \r \u000e \u0153\u0003",
    " \u0007 \u0157\n \f \u000e \u015a\u000b \u0003 \u0005 \u015d\n \u0003",
    "!\u0003!\u0003!\u0003!\u0003!\u0005!\u0164\n!\u0003!\u0003!\u0003\"",
    "\u0003\"\u0003\"\u0003\"\u0005\"\u016c\n\"\u0003\"\u0003\"\u0005\"\u0170",
    "\n\"\u0003\"\u0003\"\u0003#\u0003#\u0003#\u0003$\u0003$\u0003$\u0003",
    "$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0005$\u0181\n$\u0003%\u0003",
    "%\u0003&\u0003&\u0003\'\u0003\'\u0007\'\u0189\n\'\f\'\u000e\'\u018c",
    "\u000b\'\u0003\'\u0003\'\u0003\'\u0003\'\u0007\'\u0192\n\'\f\'\u000e",
    "\'\u0195\u000b\'\u0005\'\u0197\n\'\u0003(\u0003(\u0003(\u0003(\u0003",
    "(\u0005(\u019e\n(\u0003)\u0003)\u0003*\u0003*\u0003*\u0003*\u0003+\u0003",
    "+\u0003+\u0007+\u01a9\n+\f+\u000e+\u01ac\u000b+\u0003,\u0003,\u0003",
    ",\u0003,\u0003-\u0003-\u0005-\u01b4\n-\u0003-\u0002\u0002.\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
    "\"$&(*,.02468:<>@BDFHJLNPRTVX\u0002\f\u0004\u0002**66\u0003\u0002\u001a",
    "\u001e\u0004\u0002\u0013\u001377\u0006\u0002\u000e\u000e\u0010\u0010",
    " !##\u0003\u0002/4\u0003\u000289\u0004\u0002\u0011\u0011\u0019\u0019",
    "\u0004\u0002\u000e\u000f\u001a\u001a\u0003\u0002#%\u0004\u000288\u0091",
    "\u0091\u0002\u01c9\u0002]\u0003\u0002\u0002\u0002\u0004g\u0003\u0002",
    "\u0002\u0002\u0006i\u0003\u0002\u0002\u0002\bu\u0003\u0002\u0002\u0002",
    "\n\u008a\u0003\u0002\u0002\u0002\f\u008c\u0003\u0002\u0002\u0002\u000e",
    "\u008e\u0003\u0002\u0002\u0002\u0010\u0096\u0003\u0002\u0002\u0002\u0012",
    "\u009c\u0003\u0002\u0002\u0002\u0014\u009f\u0003\u0002\u0002\u0002\u0016",
    "\u00a6\u0003\u0002\u0002\u0002\u0018\u00a8\u0003\u0002\u0002\u0002\u001a",
    "\u00c0\u0003\u0002\u0002\u0002\u001c\u00c2\u0003\u0002\u0002\u0002\u001e",
    "\u00c9\u0003\u0002\u0002\u0002 \u00da\u0003\u0002\u0002\u0002\"\u00e1",
    "\u0003\u0002\u0002\u0002$\u00e3\u0003\u0002\u0002\u0002&\u00e7\u0003",
    "\u0002\u0002\u0002(\u00fb\u0003\u0002\u0002\u0002*\u0101\u0003\u0002",
    "\u0002\u0002,\u0103\u0003\u0002\u0002\u0002.\u010b\u0003\u0002\u0002",
    "\u00020\u010e\u0003\u0002\u0002\u00022\u011f\u0003\u0002\u0002\u0002",
    "4\u0121\u0003\u0002\u0002\u00026\u0136\u0003\u0002\u0002\u00028\u013b",
    "\u0003\u0002\u0002\u0002:\u013d\u0003\u0002\u0002\u0002<\u0148\u0003",
    "\u0002\u0002\u0002>\u0151\u0003\u0002\u0002\u0002@\u015e\u0003\u0002",
    "\u0002\u0002B\u0167\u0003\u0002\u0002\u0002D\u0173\u0003\u0002\u0002",
    "\u0002F\u0180\u0003\u0002\u0002\u0002H\u0182\u0003\u0002\u0002\u0002",
    "J\u0184\u0003\u0002\u0002\u0002L\u0196\u0003\u0002\u0002\u0002N\u019d",
    "\u0003\u0002\u0002\u0002P\u019f\u0003\u0002\u0002\u0002R\u01a1\u0003",
    "\u0002\u0002\u0002T\u01a5\u0003\u0002\u0002\u0002V\u01ad\u0003\u0002",
    "\u0002\u0002X\u01b1\u0003\u0002\u0002\u0002Z\\\u0005\u0004\u0003\u0002",
    "[Z\u0003\u0002\u0002\u0002\\_\u0003\u0002\u0002\u0002][\u0003\u0002",
    "\u0002\u0002]^\u0003\u0002\u0002\u0002^\u0003\u0003\u0002\u0002\u0002",
    "_]\u0003\u0002\u0002\u0002`h\u0005&\u0014\u0002ah\u0005.\u0018\u0002",
    "bc\u0005$\u0013\u0002cd\u0007\u0012\u0002\u0002dh\u0003\u0002\u0002",
    "\u0002eh\u00054\u001b\u0002fh\u0005\u0006\u0004\u0002g`\u0003\u0002",
    "\u0002\u0002ga\u0003\u0002\u0002\u0002gb\u0003\u0002\u0002\u0002ge\u0003",
    "\u0002\u0002\u0002gf\u0003\u0002\u0002\u0002h\u0005\u0003\u0002\u0002",
    "\u0002ij\u0007)\u0002\u0002jk\u0005\b\u0005\u0002kl\u00050\u0019\u0002",
    "l\u0007\u0003\u0002\u0002\u0002mr\u0005\n\u0006\u0002no\u0007\u0013",
    "\u0002\u0002oq\u0005\n\u0006\u0002pn\u0003\u0002\u0002\u0002qt\u0003",
    "\u0002\u0002\u0002rp\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002",
    "sv\u0003\u0002\u0002\u0002tr\u0003\u0002\u0002\u0002um\u0003\u0002\u0002",
    "\u0002uv\u0003\u0002\u0002\u0002v\t\u0003\u0002\u0002\u0002wy\t\u0002",
    "\u0002\u0002xw\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002yz\u0003",
    "\u0002\u0002\u0002z\u007f\u0005\f\u0007\u0002{|\u00077\u0002\u0002|",
    "~\u0005\u000e\b\u0002}{\u0003\u0002\u0002\u0002~\u0081\u0003\u0002\u0002",
    "\u0002\u007f}\u0003\u0002\u0002\u0002\u007f\u0080\u0003\u0002\u0002",
    "\u0002\u0080\u008b\u0003\u0002\u0002\u0002\u0081\u007f\u0003\u0002\u0002",
    "\u0002\u0082\u0087\u0005\u000e\b\u0002\u0083\u0084\u00077\u0002\u0002",
    "\u0084\u0086\u0005\u000e\b\u0002\u0085\u0083\u0003\u0002\u0002\u0002",
    "\u0086\u0089\u0003\u0002\u0002\u0002\u0087\u0085\u0003\u0002\u0002\u0002",
    "\u0087\u0088\u0003\u0002\u0002\u0002\u0088\u008b\u0003\u0002\u0002\u0002",
    "\u0089\u0087\u0003\u0002\u0002\u0002\u008ax\u0003\u0002\u0002\u0002",
    "\u008a\u0082\u0003\u0002\u0002\u0002\u008b\u000b\u0003\u0002\u0002\u0002",
    "\u008c\u008d\u0005L\'\u0002\u008d\r\u0003\u0002\u0002\u0002\u008e\u008f",
    "\u0007\b\u0002\u0002\u008f\u0092\u0005\u0010\t\u0002\u0090\u0091\u0007",
    "\u0011\u0002\u0002\u0091\u0093\u0005\u001a\u000e\u0002\u0092\u0090\u0003",
    "\u0002\u0002\u0002\u0092\u0093\u0003\u0002\u0002\u0002\u0093\u0094\u0003",
    "\u0002\u0002\u0002\u0094\u0095\u0007\t\u0002\u0002\u0095\u000f\u0003",
    "\u0002\u0002\u0002\u0096\u0097\u0005L\'\u0002\u0097\u0011\u0003\u0002",
    "\u0002\u0002\u0098\u0099\u0007\u0016\u0002\u0002\u0099\u009d\u0005\u0012",
    "\n\u0002\u009a\u009b\u0007\u0016\u0002\u0002\u009b\u009d\u00078\u0002",
    "\u0002\u009c\u0098\u0003\u0002\u0002\u0002\u009c\u009a\u0003\u0002\u0002",
    "\u0002\u009d\u0013\u0003\u0002\u0002\u0002\u009e\u00a0\u0005\u001a\u000e",
    "\u0002\u009f\u009e\u0003\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002",
    "\u0002\u00a1\u009f\u0003\u0002\u0002\u0002\u00a1\u00a2\u0003\u0002\u0002",
    "\u0002\u00a2\u00a4\u0003\u0002\u0002\u0002\u00a3\u00a5\u0005\u0018\r",
    "\u0002\u00a4\u00a3\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002",
    "\u0002\u00a5\u0015\u0003\u0002\u0002\u0002\u00a6\u00a7\t\u0003\u0002",
    "\u0002\u00a7\u0017\u0003\u0002\u0002\u0002\u00a8\u00a9\u0005\u0016\f",
    "\u0002\u00a9\u00aa\u0005\u0014\u000b\u0002\u00aa\u0019\u0003\u0002\u0002",
    "\u0002\u00ab\u00c1\u0005X-\u0002\u00ac\u00ad\u0005L\'\u0002\u00ad\u00ae",
    "\u0007,\u0002\u0002\u00ae\u00c1\u0003\u0002\u0002\u0002\u00af\u00c1",
    "\u0005L\'\u0002\u00b0\u00b1\u0005L\'\u0002\u00b1\u00b3\u0007\b\u0002",
    "\u0002\u00b2\u00b4\u0005T+\u0002\u00b3\u00b2\u0003\u0002\u0002\u0002",
    "\u00b3\u00b4\u0003\u0002\u0002\u0002\u00b4\u00b5\u0003\u0002\u0002\u0002",
    "\u00b5\u00b6\u0007\t\u0002\u0002\u00b6\u00c1\u0003\u0002\u0002\u0002",
    "\u00b7\u00b8\u0007;\u0002\u0002\u00b8\u00c1\u0007,\u0002\u0002\u00b9",
    "\u00c1\u0007;\u0002\u0002\u00ba\u00c1\u00079\u0002\u0002\u00bb\u00c1",
    "\u0005V,\u0002\u00bc\u00bd\u0005\u0012\n\u0002\u00bd\u00be\u0007,\u0002",
    "\u0002\u00be\u00c1\u0003\u0002\u0002\u0002\u00bf\u00c1\u0005\u0012\n",
    "\u0002\u00c0\u00ab\u0003\u0002\u0002\u0002\u00c0\u00ac\u0003\u0002\u0002",
    "\u0002\u00c0\u00af\u0003\u0002\u0002\u0002\u00c0\u00b0\u0003\u0002\u0002",
    "\u0002\u00c0\u00b7\u0003\u0002\u0002\u0002\u00c0\u00b9\u0003\u0002\u0002",
    "\u0002\u00c0\u00ba\u0003\u0002\u0002\u0002\u00c0\u00bb\u0003\u0002\u0002",
    "\u0002\u00c0\u00bc\u0003\u0002\u0002\u0002\u00c0\u00bf\u0003\u0002\u0002",
    "\u0002\u00c1\u001b\u0003\u0002\u0002\u0002\u00c2\u00c3\u0007?\u0002",
    "\u0002\u00c3\u00c5\u0007\b\u0002\u0002\u00c4\u00c6\u0005T+\u0002\u00c5",
    "\u00c4\u0003\u0002\u0002\u0002\u00c5\u00c6\u0003\u0002\u0002\u0002\u00c6",
    "\u00c7\u0003\u0002\u0002\u0002\u00c7\u00c8\u0007\t\u0002\u0002\u00c8",
    "\u001d\u0003\u0002\u0002\u0002\u00c9\u00ce\u0005 \u0011\u0002\u00ca",
    "\u00cb\t\u0004\u0002\u0002\u00cb\u00cd\u0005 \u0011\u0002\u00cc\u00ca",
    "\u0003\u0002\u0002\u0002\u00cd\u00d0\u0003\u0002\u0002\u0002\u00ce\u00cc",
    "\u0003\u0002\u0002\u0002\u00ce\u00cf\u0003\u0002\u0002\u0002\u00cf\u001f",
    "\u0003\u0002\u0002\u0002\u00d0\u00ce\u0003\u0002\u0002\u0002\u00d1\u00d2",
    "\u0007\b\u0002\u0002\u00d2\u00d3\u0005\"\u0012\u0002\u00d3\u00d4\u0007",
    "\t\u0002\u0002\u00d4\u00db\u0003\u0002\u0002\u0002\u00d5\u00d6\u0007",
    "6\u0002\u0002\u00d6\u00d7\u0007\b\u0002\u0002\u00d7\u00d8\u0005\"\u0012",
    "\u0002\u00d8\u00d9\u0007\t\u0002\u0002\u00d9\u00db\u0003\u0002\u0002",
    "\u0002\u00da\u00d1\u0003\u0002\u0002\u0002\u00da\u00d5\u0003\u0002\u0002",
    "\u0002\u00db!\u0003\u0002\u0002\u0002\u00dc\u00dd\u0005\u0014\u000b",
    "\u0002\u00dd\u00de\t\u0005\u0002\u0002\u00de\u00df\u0005\u0014\u000b",
    "\u0002\u00df\u00e2\u0003\u0002\u0002\u0002\u00e0\u00e2\u0005\u0014\u000b",
    "\u0002\u00e1\u00dc\u0003\u0002\u0002\u0002\u00e1\u00e0\u0003\u0002\u0002",
    "\u0002\u00e2#\u0003\u0002\u0002\u0002\u00e3\u00e4\u0005\u0012\n\u0002",
    "\u00e4\u00e5\u0007\u0011\u0002\u0002\u00e5\u00e6\u0005T+\u0002\u00e6",
    "%\u0003\u0002\u0002\u0002\u00e7\u00f3\u0007(\u0002\u0002\u00e8\u00e9",
    "\u0007\b\u0002\u0002\u00e9\u00ee\u0005(\u0015\u0002\u00ea\u00eb\u0007",
    "\u0013\u0002\u0002\u00eb\u00ed\u0005(\u0015\u0002\u00ec\u00ea\u0003",
    "\u0002\u0002\u0002\u00ed\u00f0\u0003\u0002\u0002\u0002\u00ee\u00ec\u0003",
    "\u0002\u0002\u0002\u00ee\u00ef\u0003\u0002\u0002\u0002\u00ef\u00f1\u0003",
    "\u0002\u0002\u0002\u00f0\u00ee\u0003\u0002\u0002\u0002\u00f1\u00f2\u0007",
    "\t\u0002\u0002\u00f2\u00f4\u0003\u0002\u0002\u0002\u00f3\u00e8\u0003",
    "\u0002\u0002\u0002\u00f3\u00f4\u0003\u0002\u0002\u0002\u00f4\u00f5\u0003",
    "\u0002\u0002\u0002\u00f5\u00f7\u0005*\u0016\u0002\u00f6\u00f8\u0005",
    ",\u0017\u0002\u00f7\u00f6\u0003\u0002\u0002\u0002\u00f7\u00f8\u0003",
    "\u0002\u0002\u0002\u00f8\u00f9\u0003\u0002\u0002\u0002\u00f9\u00fa\u0007",
    "\u0012\u0002\u0002\u00fa\'\u0003\u0002\u0002\u0002\u00fb\u00fc\t\u0006",
    "\u0002\u0002\u00fc)\u0003\u0002\u0002\u0002\u00fd\u0102\u00079\u0002",
    "\u0002\u00fe\u00ff\u0007\'\u0002\u0002\u00ff\u0100\u0007\u008e\u0002",
    "\u0002\u0100\u0102\u0007\u008d\u0002\u0002\u0101\u00fd\u0003\u0002\u0002",
    "\u0002\u0101\u00fe\u0003\u0002\u0002\u0002\u0102+\u0003\u0002\u0002",
    "\u0002\u0103\u0108\u00078\u0002\u0002\u0104\u0105\u0007\u0013\u0002",
    "\u0002\u0105\u0107\u00078\u0002\u0002\u0106\u0104\u0003\u0002\u0002",
    "\u0002\u0107\u010a\u0003\u0002\u0002\u0002\u0108\u0106\u0003\u0002\u0002",
    "\u0002\u0108\u0109\u0003\u0002\u0002\u0002\u0109-\u0003\u0002\u0002",
    "\u0002\u010a\u0108\u0003\u0002\u0002\u0002\u010b\u010c\u0005<\u001f",
    "\u0002\u010c\u010d\u00050\u0019\u0002\u010d/\u0003\u0002\u0002\u0002",
    "\u010e\u0112\u0007\n\u0002\u0002\u010f\u0111\u00052\u001a\u0002\u0110",
    "\u010f\u0003\u0002\u0002\u0002\u0111\u0114\u0003\u0002\u0002\u0002\u0112",
    "\u0110\u0003\u0002\u0002\u0002\u0112\u0113\u0003\u0002\u0002\u0002\u0113",
    "\u0116\u0003\u0002\u0002\u0002\u0114\u0112\u0003\u0002\u0002\u0002\u0115",
    "\u0117\u0005R*\u0002\u0116\u0115\u0003\u0002\u0002\u0002\u0116\u0117",
    "\u0003\u0002\u0002\u0002\u0117\u0118\u0003\u0002\u0002\u0002\u0118\u0119",
    "\u0007\u000b\u0002\u0002\u01191\u0003\u0002\u0002\u0002\u011a\u011b",
    "\u0005R*\u0002\u011b\u011c\u0007\u0012\u0002\u0002\u011c\u0120\u0003",
    "\u0002\u0002\u0002\u011d\u0120\u0005\u0004\u0003\u0002\u011e\u0120\u0005",
    ":\u001e\u0002\u011f\u011a\u0003\u0002\u0002\u0002\u011f\u011d\u0003",
    "\u0002\u0002\u0002\u011f\u011e\u0003\u0002\u0002\u0002\u01203\u0003",
    "\u0002\u0002\u0002\u0121\u0122\u0005<\u001f\u0002\u0122\u012b\u0007",
    "\b\u0002\u0002\u0123\u0128\u00058\u001d\u0002\u0124\u0125\u0007\u0012",
    "\u0002\u0002\u0125\u0127\u00058\u001d\u0002\u0126\u0124\u0003\u0002",
    "\u0002\u0002\u0127\u012a\u0003\u0002\u0002\u0002\u0128\u0126\u0003\u0002",
    "\u0002\u0002\u0128\u0129\u0003\u0002\u0002\u0002\u0129\u012c\u0003\u0002",
    "\u0002\u0002\u012a\u0128\u0003\u0002\u0002\u0002\u012b\u0123\u0003\u0002",
    "\u0002\u0002\u012b\u012c\u0003\u0002\u0002\u0002\u012c\u012e\u0003\u0002",
    "\u0002\u0002\u012d\u012f\u0007\u0006\u0002\u0002\u012e\u012d\u0003\u0002",
    "\u0002\u0002\u012e\u012f\u0003\u0002\u0002\u0002\u012f\u0130\u0003\u0002",
    "\u0002\u0002\u0130\u0132\u0007\t\u0002\u0002\u0131\u0133\u00056\u001c",
    "\u0002\u0132\u0131\u0003\u0002\u0002\u0002\u0132\u0133\u0003\u0002\u0002",
    "\u0002\u0133\u0134\u0003\u0002\u0002\u0002\u0134\u0135\u00050\u0019",
    "\u0002\u01355\u0003\u0002\u0002\u0002\u0136\u0137\u00075\u0002\u0002",
    "\u0137\u0138\u0005\u001e\u0010\u0002\u01387\u0003\u0002\u0002\u0002",
    "\u0139\u013c\u0005\u0012\n\u0002\u013a\u013c\u0005$\u0013\u0002\u013b",
    "\u0139\u0003\u0002\u0002\u0002\u013b\u013a\u0003\u0002\u0002\u0002\u013c",
    "9\u0003\u0002\u0002\u0002\u013d\u013e\u0005> \u0002\u013e\u0140\u0007",
    "\b\u0002\u0002\u013f\u0141\u0005T+\u0002\u0140\u013f\u0003\u0002\u0002",
    "\u0002\u0140\u0141\u0003\u0002\u0002\u0002\u0141\u0142\u0003\u0002\u0002",
    "\u0002\u0142\u0144\u0007\t\u0002\u0002\u0143\u0145\u0007,\u0002\u0002",
    "\u0144\u0143\u0003\u0002\u0002\u0002\u0144\u0145\u0003\u0002\u0002\u0002",
    "\u0145\u0146\u0003\u0002\u0002\u0002\u0146\u0147\u0007\u0012\u0002\u0002",
    "\u0147;\u0003\u0002\u0002\u0002\u0148\u014d\u0005> \u0002\u0149\u014a",
    "\u0007\u0013\u0002\u0002\u014a\u014c\u0005> \u0002\u014b\u0149\u0003",
    "\u0002\u0002\u0002\u014c\u014f\u0003\u0002\u0002\u0002\u014d\u014b\u0003",
    "\u0002\u0002\u0002\u014d\u014e\u0003\u0002\u0002\u0002\u014e=\u0003",
    "\u0002\u0002\u0002\u014f\u014d\u0003\u0002\u0002\u0002\u0150\u0152\u0005",
    "F$\u0002\u0151\u0150\u0003\u0002\u0002\u0002\u0152\u0153\u0003\u0002",
    "\u0002\u0002\u0153\u0151\u0003\u0002\u0002\u0002\u0153\u0154\u0003\u0002",
    "\u0002\u0002\u0154\u0158\u0003\u0002\u0002\u0002\u0155\u0157\u0005@",
    "!\u0002\u0156\u0155\u0003\u0002\u0002\u0002\u0157\u015a\u0003\u0002",
    "\u0002\u0002\u0158\u0156\u0003\u0002\u0002\u0002\u0158\u0159\u0003\u0002",
    "\u0002\u0002\u0159\u015c\u0003\u0002\u0002\u0002\u015a\u0158\u0003\u0002",
    "\u0002\u0002\u015b\u015d\u0005D#\u0002\u015c\u015b\u0003\u0002\u0002",
    "\u0002\u015c\u015d\u0003\u0002\u0002\u0002\u015d?\u0003\u0002\u0002",
    "\u0002\u015e\u015f\u0007\f\u0002\u0002\u015f\u0163\u00078\u0002\u0002",
    "\u0160\u0161\u0005J&\u0002\u0161\u0162\t\u0007\u0002\u0002\u0162\u0164",
    "\u0003\u0002\u0002\u0002\u0163\u0160\u0003\u0002\u0002\u0002\u0163\u0164",
    "\u0003\u0002\u0002\u0002\u0164\u0165\u0003\u0002\u0002\u0002\u0165\u0166",
    "\u0007\r\u0002\u0002\u0166A\u0003\u0002\u0002\u0002\u0167\u0168\u0007",
    "\u0011\u0002\u0002\u0168\u0169\u00076\u0002\u0002\u0169\u016b\u0007",
    "\b\u0002\u0002\u016a\u016c\u0007\f\u0002\u0002\u016b\u016a\u0003\u0002",
    "\u0002\u0002\u016b\u016c\u0003\u0002\u0002\u0002\u016c\u016d\u0003\u0002",
    "\u0002\u0002\u016d\u016f\u0005<\u001f\u0002\u016e\u0170\u0007\r\u0002",
    "\u0002\u016f\u016e\u0003\u0002\u0002\u0002\u016f\u0170\u0003\u0002\u0002",
    "\u0002\u0170\u0171\u0003\u0002\u0002\u0002\u0171\u0172\u0007\t\u0002",
    "\u0002\u0172C\u0003\u0002\u0002\u0002\u0173\u0174\t\b\u0002\u0002\u0174",
    "\u0175\u00078\u0002\u0002\u0175E\u0003\u0002\u0002\u0002\u0176\u0177",
    "\u0005H%\u0002\u0177\u0178\u0005L\'\u0002\u0178\u0181\u0003\u0002\u0002",
    "\u0002\u0179\u0181\u0005L\'\u0002\u017a\u017b\u0007\u0018\u0002\u0002",
    "\u017b\u0181\u0005L\'\u0002\u017c\u0181\u0005D#\u0002\u017d\u0181\u0005",
    "B\"\u0002\u017e\u0181\u0007\u0017\u0002\u0002\u017f\u0181\u0007\u001b",
    "\u0002\u0002\u0180\u0176\u0003\u0002\u0002\u0002\u0180\u0179\u0003\u0002",
    "\u0002\u0002\u0180\u017a\u0003\u0002\u0002\u0002\u0180\u017c\u0003\u0002",
    "\u0002\u0002\u0180\u017d\u0003\u0002\u0002\u0002\u0180\u017e\u0003\u0002",
    "\u0002\u0002\u0180\u017f\u0003\u0002\u0002\u0002\u0181G\u0003\u0002",
    "\u0002\u0002\u0182\u0183\t\t\u0002\u0002\u0183I\u0003\u0002\u0002\u0002",
    "\u0184\u0185\t\n\u0002\u0002\u0185K\u0003\u0002\u0002\u0002\u0186\u018a",
    "\u00078\u0002\u0002\u0187\u0189\u0005N(\u0002\u0188\u0187\u0003\u0002",
    "\u0002\u0002\u0189\u018c\u0003\u0002\u0002\u0002\u018a\u0188\u0003\u0002",
    "\u0002\u0002\u018a\u018b\u0003\u0002\u0002\u0002\u018b\u0197\u0003\u0002",
    "\u0002\u0002\u018c\u018a\u0003\u0002\u0002\u0002\u018d\u018e\u0007\u0007",
    "\u0002\u0002\u018e\u018f\u0005P)\u0002\u018f\u0193\u0007\u000b\u0002",
    "\u0002\u0190\u0192\u0005N(\u0002\u0191\u0190\u0003\u0002\u0002\u0002",
    "\u0192\u0195\u0003\u0002\u0002\u0002\u0193\u0191\u0003\u0002\u0002\u0002",
    "\u0193\u0194\u0003\u0002\u0002\u0002\u0194\u0197\u0003\u0002\u0002\u0002",
    "\u0195\u0193\u0003\u0002\u0002\u0002\u0196\u0186\u0003\u0002\u0002\u0002",
    "\u0196\u018d\u0003\u0002\u0002\u0002\u0197M\u0003\u0002\u0002\u0002",
    "\u0198\u0199\u0007\u0090\u0002\u0002\u0199\u019a\u0005P)\u0002\u019a",
    "\u019b\u0007\u000b\u0002\u0002\u019b\u019e\u0003\u0002\u0002\u0002\u019c",
    "\u019e\u0007\u0091\u0002\u0002\u019d\u0198\u0003\u0002\u0002\u0002\u019d",
    "\u019c\u0003\u0002\u0002\u0002\u019eO\u0003\u0002\u0002\u0002\u019f",
    "\u01a0\t\u000b\u0002\u0002\u01a0Q\u0003\u0002\u0002\u0002\u01a1\u01a2",
    "\u0005L\'\u0002\u01a2\u01a3\u0007\u0011\u0002\u0002\u01a3\u01a4\u0005",
    "T+\u0002\u01a4S\u0003\u0002\u0002\u0002\u01a5\u01aa\u0005\u0014\u000b",
    "\u0002\u01a6\u01a7\u0007\u0013\u0002\u0002\u01a7\u01a9\u0005\u0014\u000b",
    "\u0002\u01a8\u01a6\u0003\u0002\u0002\u0002\u01a9\u01ac\u0003\u0002\u0002",
    "\u0002\u01aa\u01a8\u0003\u0002\u0002\u0002\u01aa\u01ab\u0003\u0002\u0002",
    "\u0002\u01abU\u0003\u0002\u0002\u0002\u01ac\u01aa\u0003\u0002\u0002",
    "\u0002\u01ad\u01ae\u0007\'\u0002\u0002\u01ae\u01af\u0007\u008e\u0002",
    "\u0002\u01af\u01b0\u0007\u008d\u0002\u0002\u01b0W\u0003\u0002\u0002",
    "\u0002\u01b1\u01b3\u0007:\u0002\u0002\u01b2\u01b4\u0007\u0005\u0002",
    "\u0002\u01b3\u01b2\u0003\u0002\u0002\u0002\u01b3\u01b4\u0003\u0002\u0002",
    "\u0002\u01b4Y\u0003\u0002\u0002\u00021]grux\u007f\u0087\u008a\u0092",
    "\u009c\u00a1\u00a4\u00b3\u00c0\u00c5\u00ce\u00da\u00e1\u00ee\u00f3\u00f7",
    "\u0101\u0108\u0112\u0116\u011f\u0128\u012b\u012e\u0132\u013b\u0140\u0144",
    "\u014d\u0153\u0158\u015c\u0163\u016b\u016f\u0180\u018a\u0193\u0196\u019d",
    "\u01aa\u01b3"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'null'", "'in'", null, "'...'", null, "'('", 
                     "')'", "'{'", "'}'", "'['", "']'", "'>'", "'~'", "'<'", 
                     "':'", "';'", "','", "'.'", "'$'", "'@'", "'&'", "'#'", 
                     "'::'", "'+'", "'*'", "'/'", "'-'", "'%'", "'=='", 
                     "'>='", "'<='", "'!='", "'='", "'|='", "'~='", "'url'", 
                     null, "'@import'", "'@media'", "'only'", "':extend'", 
                     "'!important'", "'@arguments'", "'@rest'", "'reference'", 
                     "'inline'", "'less'", "'css'", "'once'", "'multiple'", 
                     "'when'", "'not'", "'and'", null, null, null, null, 
                     null, null, null, null, "'color'", "'convert'", "'data-uri'", 
                     "'default'", "'unit'", "'get-unit'", "'svg-gradient'", 
                     "'escape'", "'e'", "'replace'", "'length'", "'extract'", 
                     "'ceil'", "'floor'", "'percentage'", "'round'", "'sqrt'", 
                     "'abs'", "'sin'", "'asin'", "'cos'", "'acos'", "'tan'", 
                     "'atan'", "'pi'", "'pow'", "'mod'", "'min'", "'max'", 
                     "'isnumber'", "'isstring'", "'iscolor'", "'iskeyword'", 
                     "'isurl'", "'ispixel'", "'isem'", "'ispercentage'", 
                     "'isunit'", "'rgb'", "'rgba'", "'argb'", "'hsl'", "'hsla'", 
                     "'hsv'", "'hsva'", "'hue'", "'saturation'", "'lightness'", 
                     "'hsvhue'", "'hsvsaturation'", "'hsvvalue'", "'red'", 
                     "'green'", "'blue'", "'alpha'", "'luma'", "'luminance'", 
                     "'saturate'", "'desaturate'", "'lighten'", "'darken'", 
                     "'fadein'", "'fadeout'", "'fade'", "'spin'", "'mix'", 
                     "'greyscale'", "'contrast'", "'multiply'", "'screen'", 
                     "'overlay'", "'softlight'", "'hardlight'", "'difference'", 
                     "'exclusion'", "'average'", "'negation'" ];

var symbolicNames = [ null, "NULL", "IN", "Unit", "Ellipsis", "InterpolationStart", 
                      "LPAREN", "RPAREN", "BlockStart", "BlockEnd", "LBRACK", 
                      "RBRACK", "GT", "TIL", "LT", "COLON", "SEMI", "COMMA", 
                      "DOT", "DOLLAR", "AT", "PARENTREF", "HASH", "COLONCOLON", 
                      "PLUS", "TIMES", "DIV", "MINUS", "PERC", "EQEQ", "GTEQ", 
                      "LTEQ", "NOTEQ", "EQ", "PIPE_EQ", "TILD_EQ", "URL", 
                      "UrlStart", "IMPORT", "MEDIA", "MEDIAONLY", "EXTEND", 
                      "IMPORTANT", "ARGUMENTS", "REST", "REFERENCE", "INLINE", 
                      "LESS", "CSS", "ONCE", "MULTIPLE", "WHEN", "NOT", 
                      "AND", "Identifier", "StringLiteral", "Number", "Color", 
                      "WS", "SL_COMMENT", "COMMENT", "FUNCTION_NAME", "COLOR", 
                      "CONVERT", "DATA_URI", "DEFAULT", "UNIT", "GET_UNIT", 
                      "SVG_GRADIENT", "ESCAPE", "E", "REPLACE", "LENGTH", 
                      "EXTRACT", "CEIL", "FLOOR", "PERCENTAGE", "ROUND", 
                      "SQRT", "ABS", "SIN", "ASIN", "COS", "ACOS", "TAN", 
                      "ATAN", "PI", "POW", "MOD", "MIN", "MAX", "ISNUMBER", 
                      "ISSTRING", "ISCOLOR", "ISKEYWORD", "ISURL", "ISPIXEL", 
                      "ISEM", "ISPERCENTAGE", "ISUNIT", "RGB", "RGBA", "ARGB", 
                      "HSL", "HSLA", "HSV", "HSVA", "HUE", "SATURATION", 
                      "LIGHTNESS", "HSVHUE", "HSVSATURATION", "HSVVALUE", 
                      "RED", "GREEN", "BLUE", "ALPHA", "LUMA", "LUMINANCE", 
                      "SATURATE", "DESATURATE", "LIGHTEN", "DARKEN", "FADEIN", 
                      "FADEOUT", "FADE", "SPIN", "MIX", "GREYSCALE", "CONTRAST", 
                      "MULTIPLY", "SCREEN", "OVERLAY", "SOFTLIGHT", "HARDLIGHT", 
                      "DIFFERENCE", "EXCLUSION", "AVERAGE", "NEGATION", 
                      "UrlEnd", "Url", "SPACE", "InterpolationStartAfter", 
                      "IdentifierAfter" ];

var ruleNames =  [ "stylesheet", "statement", "media", "mediaQueryList", 
                   "mediaQuery", "mediaType", "mediaExpression", "mediaFeature", 
                   "variableName", "commandStatement", "mathCharacter", 
                   "mathStatement", "expression", "func", "conditions", 
                   "condition", "conditionStatement", "variableDeclaration", 
                   "importDeclaration", "importOption", "referenceUrl", 
                   "mediaTypes", "ruleset", "block", "blockItem", "mixinDefinition", 
                   "mixinGuard", "mixinDefinitionParam", "mixinReference", 
                   "selectors", "selector", "attrib", "negation", "pseudo", 
                   "element", "selectorPrefix", "attribRelate", "identifier", 
                   "identifierPart", "identifierVariableName", "property", 
                   "values", "url", "measurement" ];

function LessParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

LessParser.prototype = Object.create(antlr4.Parser.prototype);
LessParser.prototype.constructor = LessParser;

Object.defineProperty(LessParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

LessParser.EOF = antlr4.Token.EOF;
LessParser.NULL = 1;
LessParser.IN = 2;
LessParser.Unit = 3;
LessParser.Ellipsis = 4;
LessParser.InterpolationStart = 5;
LessParser.LPAREN = 6;
LessParser.RPAREN = 7;
LessParser.BlockStart = 8;
LessParser.BlockEnd = 9;
LessParser.LBRACK = 10;
LessParser.RBRACK = 11;
LessParser.GT = 12;
LessParser.TIL = 13;
LessParser.LT = 14;
LessParser.COLON = 15;
LessParser.SEMI = 16;
LessParser.COMMA = 17;
LessParser.DOT = 18;
LessParser.DOLLAR = 19;
LessParser.AT = 20;
LessParser.PARENTREF = 21;
LessParser.HASH = 22;
LessParser.COLONCOLON = 23;
LessParser.PLUS = 24;
LessParser.TIMES = 25;
LessParser.DIV = 26;
LessParser.MINUS = 27;
LessParser.PERC = 28;
LessParser.EQEQ = 29;
LessParser.GTEQ = 30;
LessParser.LTEQ = 31;
LessParser.NOTEQ = 32;
LessParser.EQ = 33;
LessParser.PIPE_EQ = 34;
LessParser.TILD_EQ = 35;
LessParser.URL = 36;
LessParser.UrlStart = 37;
LessParser.IMPORT = 38;
LessParser.MEDIA = 39;
LessParser.MEDIAONLY = 40;
LessParser.EXTEND = 41;
LessParser.IMPORTANT = 42;
LessParser.ARGUMENTS = 43;
LessParser.REST = 44;
LessParser.REFERENCE = 45;
LessParser.INLINE = 46;
LessParser.LESS = 47;
LessParser.CSS = 48;
LessParser.ONCE = 49;
LessParser.MULTIPLE = 50;
LessParser.WHEN = 51;
LessParser.NOT = 52;
LessParser.AND = 53;
LessParser.Identifier = 54;
LessParser.StringLiteral = 55;
LessParser.Number = 56;
LessParser.Color = 57;
LessParser.WS = 58;
LessParser.SL_COMMENT = 59;
LessParser.COMMENT = 60;
LessParser.FUNCTION_NAME = 61;
LessParser.COLOR = 62;
LessParser.CONVERT = 63;
LessParser.DATA_URI = 64;
LessParser.DEFAULT = 65;
LessParser.UNIT = 66;
LessParser.GET_UNIT = 67;
LessParser.SVG_GRADIENT = 68;
LessParser.ESCAPE = 69;
LessParser.E = 70;
LessParser.REPLACE = 71;
LessParser.LENGTH = 72;
LessParser.EXTRACT = 73;
LessParser.CEIL = 74;
LessParser.FLOOR = 75;
LessParser.PERCENTAGE = 76;
LessParser.ROUND = 77;
LessParser.SQRT = 78;
LessParser.ABS = 79;
LessParser.SIN = 80;
LessParser.ASIN = 81;
LessParser.COS = 82;
LessParser.ACOS = 83;
LessParser.TAN = 84;
LessParser.ATAN = 85;
LessParser.PI = 86;
LessParser.POW = 87;
LessParser.MOD = 88;
LessParser.MIN = 89;
LessParser.MAX = 90;
LessParser.ISNUMBER = 91;
LessParser.ISSTRING = 92;
LessParser.ISCOLOR = 93;
LessParser.ISKEYWORD = 94;
LessParser.ISURL = 95;
LessParser.ISPIXEL = 96;
LessParser.ISEM = 97;
LessParser.ISPERCENTAGE = 98;
LessParser.ISUNIT = 99;
LessParser.RGB = 100;
LessParser.RGBA = 101;
LessParser.ARGB = 102;
LessParser.HSL = 103;
LessParser.HSLA = 104;
LessParser.HSV = 105;
LessParser.HSVA = 106;
LessParser.HUE = 107;
LessParser.SATURATION = 108;
LessParser.LIGHTNESS = 109;
LessParser.HSVHUE = 110;
LessParser.HSVSATURATION = 111;
LessParser.HSVVALUE = 112;
LessParser.RED = 113;
LessParser.GREEN = 114;
LessParser.BLUE = 115;
LessParser.ALPHA = 116;
LessParser.LUMA = 117;
LessParser.LUMINANCE = 118;
LessParser.SATURATE = 119;
LessParser.DESATURATE = 120;
LessParser.LIGHTEN = 121;
LessParser.DARKEN = 122;
LessParser.FADEIN = 123;
LessParser.FADEOUT = 124;
LessParser.FADE = 125;
LessParser.SPIN = 126;
LessParser.MIX = 127;
LessParser.GREYSCALE = 128;
LessParser.CONTRAST = 129;
LessParser.MULTIPLY = 130;
LessParser.SCREEN = 131;
LessParser.OVERLAY = 132;
LessParser.SOFTLIGHT = 133;
LessParser.HARDLIGHT = 134;
LessParser.DIFFERENCE = 135;
LessParser.EXCLUSION = 136;
LessParser.AVERAGE = 137;
LessParser.NEGATION = 138;
LessParser.UrlEnd = 139;
LessParser.Url = 140;
LessParser.SPACE = 141;
LessParser.InterpolationStartAfter = 142;
LessParser.IdentifierAfter = 143;

LessParser.RULE_stylesheet = 0;
LessParser.RULE_statement = 1;
LessParser.RULE_media = 2;
LessParser.RULE_mediaQueryList = 3;
LessParser.RULE_mediaQuery = 4;
LessParser.RULE_mediaType = 5;
LessParser.RULE_mediaExpression = 6;
LessParser.RULE_mediaFeature = 7;
LessParser.RULE_variableName = 8;
LessParser.RULE_commandStatement = 9;
LessParser.RULE_mathCharacter = 10;
LessParser.RULE_mathStatement = 11;
LessParser.RULE_expression = 12;
LessParser.RULE_func = 13;
LessParser.RULE_conditions = 14;
LessParser.RULE_condition = 15;
LessParser.RULE_conditionStatement = 16;
LessParser.RULE_variableDeclaration = 17;
LessParser.RULE_importDeclaration = 18;
LessParser.RULE_importOption = 19;
LessParser.RULE_referenceUrl = 20;
LessParser.RULE_mediaTypes = 21;
LessParser.RULE_ruleset = 22;
LessParser.RULE_block = 23;
LessParser.RULE_blockItem = 24;
LessParser.RULE_mixinDefinition = 25;
LessParser.RULE_mixinGuard = 26;
LessParser.RULE_mixinDefinitionParam = 27;
LessParser.RULE_mixinReference = 28;
LessParser.RULE_selectors = 29;
LessParser.RULE_selector = 30;
LessParser.RULE_attrib = 31;
LessParser.RULE_negation = 32;
LessParser.RULE_pseudo = 33;
LessParser.RULE_element = 34;
LessParser.RULE_selectorPrefix = 35;
LessParser.RULE_attribRelate = 36;
LessParser.RULE_identifier = 37;
LessParser.RULE_identifierPart = 38;
LessParser.RULE_identifierVariableName = 39;
LessParser.RULE_property = 40;
LessParser.RULE_values = 41;
LessParser.RULE_url = 42;
LessParser.RULE_measurement = 43;


function StylesheetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_stylesheet;
    return this;
}

StylesheetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StylesheetContext.prototype.constructor = StylesheetContext;

StylesheetContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

StylesheetContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterStylesheet(this);
	}
};

StylesheetContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitStylesheet(this);
	}
};




LessParser.StylesheetContext = StylesheetContext;

LessParser.prototype.stylesheet = function() {

    var localctx = new StylesheetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, LessParser.RULE_stylesheet);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LessParser.InterpolationStart) | (1 << LessParser.GT) | (1 << LessParser.TIL) | (1 << LessParser.COLON) | (1 << LessParser.AT) | (1 << LessParser.PARENTREF) | (1 << LessParser.HASH) | (1 << LessParser.COLONCOLON) | (1 << LessParser.PLUS) | (1 << LessParser.TIMES))) !== 0) || ((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (LessParser.IMPORT - 38)) | (1 << (LessParser.MEDIA - 38)) | (1 << (LessParser.Identifier - 38)))) !== 0)) {
            this.state = 88;
            this.statement();
            this.state = 93;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.importDeclaration = function() {
    return this.getTypedRuleContext(ImportDeclarationContext,0);
};

StatementContext.prototype.ruleset = function() {
    return this.getTypedRuleContext(RulesetContext,0);
};

StatementContext.prototype.variableDeclaration = function() {
    return this.getTypedRuleContext(VariableDeclarationContext,0);
};

StatementContext.prototype.SEMI = function() {
    return this.getToken(LessParser.SEMI, 0);
};

StatementContext.prototype.mixinDefinition = function() {
    return this.getTypedRuleContext(MixinDefinitionContext,0);
};

StatementContext.prototype.media = function() {
    return this.getTypedRuleContext(MediaContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitStatement(this);
	}
};




LessParser.StatementContext = StatementContext;

LessParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, LessParser.RULE_statement);
    try {
        this.state = 101;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 94;
            this.importDeclaration();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 95;
            this.ruleset();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 96;
            this.variableDeclaration();
            this.state = 97;
            this.match(LessParser.SEMI);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 99;
            this.mixinDefinition();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 100;
            this.media();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MediaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_media;
    return this;
}

MediaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MediaContext.prototype.constructor = MediaContext;

MediaContext.prototype.MEDIA = function() {
    return this.getToken(LessParser.MEDIA, 0);
};

MediaContext.prototype.mediaQueryList = function() {
    return this.getTypedRuleContext(MediaQueryListContext,0);
};

MediaContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

MediaContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterMedia(this);
	}
};

MediaContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitMedia(this);
	}
};




LessParser.MediaContext = MediaContext;

LessParser.prototype.media = function() {

    var localctx = new MediaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, LessParser.RULE_media);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 103;
        this.match(LessParser.MEDIA);
        this.state = 104;
        this.mediaQueryList();
        this.state = 105;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MediaQueryListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_mediaQueryList;
    return this;
}

MediaQueryListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MediaQueryListContext.prototype.constructor = MediaQueryListContext;

MediaQueryListContext.prototype.mediaQuery = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MediaQueryContext);
    } else {
        return this.getTypedRuleContext(MediaQueryContext,i);
    }
};

MediaQueryListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LessParser.COMMA);
    } else {
        return this.getToken(LessParser.COMMA, i);
    }
};


MediaQueryListContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterMediaQueryList(this);
	}
};

MediaQueryListContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitMediaQueryList(this);
	}
};




LessParser.MediaQueryListContext = MediaQueryListContext;

LessParser.prototype.mediaQueryList = function() {

    var localctx = new MediaQueryListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, LessParser.RULE_mediaQueryList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 115;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LessParser.InterpolationStart || _la===LessParser.LPAREN || ((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (LessParser.MEDIAONLY - 40)) | (1 << (LessParser.NOT - 40)) | (1 << (LessParser.Identifier - 40)))) !== 0)) {
            this.state = 107;
            this.mediaQuery();
            this.state = 112;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===LessParser.COMMA) {
                this.state = 108;
                this.match(LessParser.COMMA);
                this.state = 109;
                this.mediaQuery();
                this.state = 114;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MediaQueryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_mediaQuery;
    return this;
}

MediaQueryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MediaQueryContext.prototype.constructor = MediaQueryContext;

MediaQueryContext.prototype.mediaType = function() {
    return this.getTypedRuleContext(MediaTypeContext,0);
};

MediaQueryContext.prototype.AND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LessParser.AND);
    } else {
        return this.getToken(LessParser.AND, i);
    }
};


MediaQueryContext.prototype.mediaExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MediaExpressionContext);
    } else {
        return this.getTypedRuleContext(MediaExpressionContext,i);
    }
};

MediaQueryContext.prototype.MEDIAONLY = function() {
    return this.getToken(LessParser.MEDIAONLY, 0);
};

MediaQueryContext.prototype.NOT = function() {
    return this.getToken(LessParser.NOT, 0);
};

MediaQueryContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterMediaQuery(this);
	}
};

MediaQueryContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitMediaQuery(this);
	}
};




LessParser.MediaQueryContext = MediaQueryContext;

LessParser.prototype.mediaQuery = function() {

    var localctx = new MediaQueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, LessParser.RULE_mediaQuery);
    var _la = 0; // Token type
    try {
        this.state = 136;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LessParser.InterpolationStart:
        case LessParser.MEDIAONLY:
        case LessParser.NOT:
        case LessParser.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 118;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LessParser.MEDIAONLY || _la===LessParser.NOT) {
                this.state = 117;
                _la = this._input.LA(1);
                if(!(_la===LessParser.MEDIAONLY || _la===LessParser.NOT)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
            }

            this.state = 120;
            this.mediaType();
            this.state = 125;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===LessParser.AND) {
                this.state = 121;
                this.match(LessParser.AND);
                this.state = 122;
                this.mediaExpression();
                this.state = 127;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case LessParser.LPAREN:
            this.enterOuterAlt(localctx, 2);
            this.state = 128;
            this.mediaExpression();
            this.state = 133;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===LessParser.AND) {
                this.state = 129;
                this.match(LessParser.AND);
                this.state = 130;
                this.mediaExpression();
                this.state = 135;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MediaTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_mediaType;
    return this;
}

MediaTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MediaTypeContext.prototype.constructor = MediaTypeContext;

MediaTypeContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

MediaTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterMediaType(this);
	}
};

MediaTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitMediaType(this);
	}
};




LessParser.MediaTypeContext = MediaTypeContext;

LessParser.prototype.mediaType = function() {

    var localctx = new MediaTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, LessParser.RULE_mediaType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 138;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MediaExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_mediaExpression;
    return this;
}

MediaExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MediaExpressionContext.prototype.constructor = MediaExpressionContext;

MediaExpressionContext.prototype.LPAREN = function() {
    return this.getToken(LessParser.LPAREN, 0);
};

MediaExpressionContext.prototype.mediaFeature = function() {
    return this.getTypedRuleContext(MediaFeatureContext,0);
};

MediaExpressionContext.prototype.RPAREN = function() {
    return this.getToken(LessParser.RPAREN, 0);
};

MediaExpressionContext.prototype.COLON = function() {
    return this.getToken(LessParser.COLON, 0);
};

MediaExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

MediaExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterMediaExpression(this);
	}
};

MediaExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitMediaExpression(this);
	}
};




LessParser.MediaExpressionContext = MediaExpressionContext;

LessParser.prototype.mediaExpression = function() {

    var localctx = new MediaExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, LessParser.RULE_mediaExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.match(LessParser.LPAREN);
        this.state = 141;
        this.mediaFeature();
        this.state = 144;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LessParser.COLON) {
            this.state = 142;
            this.match(LessParser.COLON);
            this.state = 143;
            this.expression();
        }

        this.state = 146;
        this.match(LessParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MediaFeatureContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_mediaFeature;
    return this;
}

MediaFeatureContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MediaFeatureContext.prototype.constructor = MediaFeatureContext;

MediaFeatureContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

MediaFeatureContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterMediaFeature(this);
	}
};

MediaFeatureContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitMediaFeature(this);
	}
};




LessParser.MediaFeatureContext = MediaFeatureContext;

LessParser.prototype.mediaFeature = function() {

    var localctx = new MediaFeatureContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, LessParser.RULE_mediaFeature);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 148;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VariableNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_variableName;
    return this;
}

VariableNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableNameContext.prototype.constructor = VariableNameContext;

VariableNameContext.prototype.AT = function() {
    return this.getToken(LessParser.AT, 0);
};

VariableNameContext.prototype.variableName = function() {
    return this.getTypedRuleContext(VariableNameContext,0);
};

VariableNameContext.prototype.Identifier = function() {
    return this.getToken(LessParser.Identifier, 0);
};

VariableNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterVariableName(this);
	}
};

VariableNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitVariableName(this);
	}
};




LessParser.VariableNameContext = VariableNameContext;

LessParser.prototype.variableName = function() {

    var localctx = new VariableNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, LessParser.RULE_variableName);
    try {
        this.state = 154;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 150;
            this.match(LessParser.AT);
            this.state = 151;
            this.variableName();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 152;
            this.match(LessParser.AT);
            this.state = 153;
            this.match(LessParser.Identifier);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CommandStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_commandStatement;
    return this;
}

CommandStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommandStatementContext.prototype.constructor = CommandStatementContext;

CommandStatementContext.prototype.mathStatement = function() {
    return this.getTypedRuleContext(MathStatementContext,0);
};

CommandStatementContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

CommandStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterCommandStatement(this);
	}
};

CommandStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitCommandStatement(this);
	}
};




LessParser.CommandStatementContext = CommandStatementContext;

LessParser.prototype.commandStatement = function() {

    var localctx = new CommandStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, LessParser.RULE_commandStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 157; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 156;
            this.expression();
            this.state = 159; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===LessParser.InterpolationStart || _la===LessParser.AT || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (LessParser.UrlStart - 37)) | (1 << (LessParser.Identifier - 37)) | (1 << (LessParser.StringLiteral - 37)) | (1 << (LessParser.Number - 37)) | (1 << (LessParser.Color - 37)))) !== 0));
        this.state = 162;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LessParser.PLUS) | (1 << LessParser.TIMES) | (1 << LessParser.DIV) | (1 << LessParser.MINUS) | (1 << LessParser.PERC))) !== 0)) {
            this.state = 161;
            this.mathStatement();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MathCharacterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_mathCharacter;
    return this;
}

MathCharacterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MathCharacterContext.prototype.constructor = MathCharacterContext;

MathCharacterContext.prototype.TIMES = function() {
    return this.getToken(LessParser.TIMES, 0);
};

MathCharacterContext.prototype.PLUS = function() {
    return this.getToken(LessParser.PLUS, 0);
};

MathCharacterContext.prototype.DIV = function() {
    return this.getToken(LessParser.DIV, 0);
};

MathCharacterContext.prototype.MINUS = function() {
    return this.getToken(LessParser.MINUS, 0);
};

MathCharacterContext.prototype.PERC = function() {
    return this.getToken(LessParser.PERC, 0);
};

MathCharacterContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterMathCharacter(this);
	}
};

MathCharacterContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitMathCharacter(this);
	}
};




LessParser.MathCharacterContext = MathCharacterContext;

LessParser.prototype.mathCharacter = function() {

    var localctx = new MathCharacterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, LessParser.RULE_mathCharacter);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 164;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LessParser.PLUS) | (1 << LessParser.TIMES) | (1 << LessParser.DIV) | (1 << LessParser.MINUS) | (1 << LessParser.PERC))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MathStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_mathStatement;
    return this;
}

MathStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MathStatementContext.prototype.constructor = MathStatementContext;

MathStatementContext.prototype.mathCharacter = function() {
    return this.getTypedRuleContext(MathCharacterContext,0);
};

MathStatementContext.prototype.commandStatement = function() {
    return this.getTypedRuleContext(CommandStatementContext,0);
};

MathStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterMathStatement(this);
	}
};

MathStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitMathStatement(this);
	}
};




LessParser.MathStatementContext = MathStatementContext;

LessParser.prototype.mathStatement = function() {

    var localctx = new MathStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, LessParser.RULE_mathStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 166;
        this.mathCharacter();
        this.state = 167;
        this.commandStatement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.measurement = function() {
    return this.getTypedRuleContext(MeasurementContext,0);
};

ExpressionContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ExpressionContext.prototype.IMPORTANT = function() {
    return this.getToken(LessParser.IMPORTANT, 0);
};

ExpressionContext.prototype.LPAREN = function() {
    return this.getToken(LessParser.LPAREN, 0);
};

ExpressionContext.prototype.RPAREN = function() {
    return this.getToken(LessParser.RPAREN, 0);
};

ExpressionContext.prototype.values = function() {
    return this.getTypedRuleContext(ValuesContext,0);
};

ExpressionContext.prototype.Color = function() {
    return this.getToken(LessParser.Color, 0);
};

ExpressionContext.prototype.StringLiteral = function() {
    return this.getToken(LessParser.StringLiteral, 0);
};

ExpressionContext.prototype.url = function() {
    return this.getTypedRuleContext(UrlContext,0);
};

ExpressionContext.prototype.variableName = function() {
    return this.getTypedRuleContext(VariableNameContext,0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitExpression(this);
	}
};




LessParser.ExpressionContext = ExpressionContext;

LessParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, LessParser.RULE_expression);
    var _la = 0; // Token type
    try {
        this.state = 190;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 169;
            this.measurement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 170;
            this.identifier();
            this.state = 171;
            this.match(LessParser.IMPORTANT);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 173;
            this.identifier();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 174;
            this.identifier();
            this.state = 175;
            this.match(LessParser.LPAREN);
            this.state = 177;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LessParser.InterpolationStart || _la===LessParser.AT || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (LessParser.UrlStart - 37)) | (1 << (LessParser.Identifier - 37)) | (1 << (LessParser.StringLiteral - 37)) | (1 << (LessParser.Number - 37)) | (1 << (LessParser.Color - 37)))) !== 0)) {
                this.state = 176;
                this.values();
            }

            this.state = 179;
            this.match(LessParser.RPAREN);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 181;
            this.match(LessParser.Color);
            this.state = 182;
            this.match(LessParser.IMPORTANT);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 183;
            this.match(LessParser.Color);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 184;
            this.match(LessParser.StringLiteral);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 185;
            this.url();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 186;
            this.variableName();
            this.state = 187;
            this.match(LessParser.IMPORTANT);
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 189;
            this.variableName();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FuncContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_func;
    return this;
}

FuncContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncContext.prototype.constructor = FuncContext;

FuncContext.prototype.FUNCTION_NAME = function() {
    return this.getToken(LessParser.FUNCTION_NAME, 0);
};

FuncContext.prototype.LPAREN = function() {
    return this.getToken(LessParser.LPAREN, 0);
};

FuncContext.prototype.RPAREN = function() {
    return this.getToken(LessParser.RPAREN, 0);
};

FuncContext.prototype.values = function() {
    return this.getTypedRuleContext(ValuesContext,0);
};

FuncContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterFunc(this);
	}
};

FuncContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitFunc(this);
	}
};




LessParser.FuncContext = FuncContext;

LessParser.prototype.func = function() {

    var localctx = new FuncContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, LessParser.RULE_func);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 192;
        this.match(LessParser.FUNCTION_NAME);
        this.state = 193;
        this.match(LessParser.LPAREN);
        this.state = 195;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LessParser.InterpolationStart || _la===LessParser.AT || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (LessParser.UrlStart - 37)) | (1 << (LessParser.Identifier - 37)) | (1 << (LessParser.StringLiteral - 37)) | (1 << (LessParser.Number - 37)) | (1 << (LessParser.Color - 37)))) !== 0)) {
            this.state = 194;
            this.values();
        }

        this.state = 197;
        this.match(LessParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConditionsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_conditions;
    return this;
}

ConditionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionsContext.prototype.constructor = ConditionsContext;

ConditionsContext.prototype.condition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConditionContext);
    } else {
        return this.getTypedRuleContext(ConditionContext,i);
    }
};

ConditionsContext.prototype.AND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LessParser.AND);
    } else {
        return this.getToken(LessParser.AND, i);
    }
};


ConditionsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LessParser.COMMA);
    } else {
        return this.getToken(LessParser.COMMA, i);
    }
};


ConditionsContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterConditions(this);
	}
};

ConditionsContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitConditions(this);
	}
};




LessParser.ConditionsContext = ConditionsContext;

LessParser.prototype.conditions = function() {

    var localctx = new ConditionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, LessParser.RULE_conditions);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this.condition();
        this.state = 204;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LessParser.COMMA || _la===LessParser.AND) {
            this.state = 200;
            _la = this._input.LA(1);
            if(!(_la===LessParser.COMMA || _la===LessParser.AND)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 201;
            this.condition();
            this.state = 206;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_condition;
    return this;
}

ConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionContext.prototype.constructor = ConditionContext;

ConditionContext.prototype.LPAREN = function() {
    return this.getToken(LessParser.LPAREN, 0);
};

ConditionContext.prototype.conditionStatement = function() {
    return this.getTypedRuleContext(ConditionStatementContext,0);
};

ConditionContext.prototype.RPAREN = function() {
    return this.getToken(LessParser.RPAREN, 0);
};

ConditionContext.prototype.NOT = function() {
    return this.getToken(LessParser.NOT, 0);
};

ConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterCondition(this);
	}
};

ConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitCondition(this);
	}
};




LessParser.ConditionContext = ConditionContext;

LessParser.prototype.condition = function() {

    var localctx = new ConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, LessParser.RULE_condition);
    try {
        this.state = 216;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LessParser.LPAREN:
            this.enterOuterAlt(localctx, 1);
            this.state = 207;
            this.match(LessParser.LPAREN);
            this.state = 208;
            this.conditionStatement();
            this.state = 209;
            this.match(LessParser.RPAREN);
            break;
        case LessParser.NOT:
            this.enterOuterAlt(localctx, 2);
            this.state = 211;
            this.match(LessParser.NOT);
            this.state = 212;
            this.match(LessParser.LPAREN);
            this.state = 213;
            this.conditionStatement();
            this.state = 214;
            this.match(LessParser.RPAREN);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConditionStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_conditionStatement;
    return this;
}

ConditionStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionStatementContext.prototype.constructor = ConditionStatementContext;

ConditionStatementContext.prototype.commandStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CommandStatementContext);
    } else {
        return this.getTypedRuleContext(CommandStatementContext,i);
    }
};

ConditionStatementContext.prototype.EQ = function() {
    return this.getToken(LessParser.EQ, 0);
};

ConditionStatementContext.prototype.LT = function() {
    return this.getToken(LessParser.LT, 0);
};

ConditionStatementContext.prototype.GT = function() {
    return this.getToken(LessParser.GT, 0);
};

ConditionStatementContext.prototype.GTEQ = function() {
    return this.getToken(LessParser.GTEQ, 0);
};

ConditionStatementContext.prototype.LTEQ = function() {
    return this.getToken(LessParser.LTEQ, 0);
};

ConditionStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterConditionStatement(this);
	}
};

ConditionStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitConditionStatement(this);
	}
};




LessParser.ConditionStatementContext = ConditionStatementContext;

LessParser.prototype.conditionStatement = function() {

    var localctx = new ConditionStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, LessParser.RULE_conditionStatement);
    var _la = 0; // Token type
    try {
        this.state = 223;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 218;
            this.commandStatement();
            this.state = 219;
            _la = this._input.LA(1);
            if(!(((((_la - 12)) & ~0x1f) == 0 && ((1 << (_la - 12)) & ((1 << (LessParser.GT - 12)) | (1 << (LessParser.LT - 12)) | (1 << (LessParser.GTEQ - 12)) | (1 << (LessParser.LTEQ - 12)) | (1 << (LessParser.EQ - 12)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 220;
            this.commandStatement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 222;
            this.commandStatement();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VariableDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_variableDeclaration;
    return this;
}

VariableDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableDeclarationContext.prototype.constructor = VariableDeclarationContext;

VariableDeclarationContext.prototype.variableName = function() {
    return this.getTypedRuleContext(VariableNameContext,0);
};

VariableDeclarationContext.prototype.COLON = function() {
    return this.getToken(LessParser.COLON, 0);
};

VariableDeclarationContext.prototype.values = function() {
    return this.getTypedRuleContext(ValuesContext,0);
};

VariableDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterVariableDeclaration(this);
	}
};

VariableDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitVariableDeclaration(this);
	}
};




LessParser.VariableDeclarationContext = VariableDeclarationContext;

LessParser.prototype.variableDeclaration = function() {

    var localctx = new VariableDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, LessParser.RULE_variableDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 225;
        this.variableName();
        this.state = 226;
        this.match(LessParser.COLON);
        this.state = 227;
        this.values();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ImportDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_importDeclaration;
    return this;
}

ImportDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImportDeclarationContext.prototype.constructor = ImportDeclarationContext;

ImportDeclarationContext.prototype.IMPORT = function() {
    return this.getToken(LessParser.IMPORT, 0);
};

ImportDeclarationContext.prototype.referenceUrl = function() {
    return this.getTypedRuleContext(ReferenceUrlContext,0);
};

ImportDeclarationContext.prototype.SEMI = function() {
    return this.getToken(LessParser.SEMI, 0);
};

ImportDeclarationContext.prototype.LPAREN = function() {
    return this.getToken(LessParser.LPAREN, 0);
};

ImportDeclarationContext.prototype.RPAREN = function() {
    return this.getToken(LessParser.RPAREN, 0);
};

ImportDeclarationContext.prototype.mediaTypes = function() {
    return this.getTypedRuleContext(MediaTypesContext,0);
};

ImportDeclarationContext.prototype.importOption = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ImportOptionContext);
    } else {
        return this.getTypedRuleContext(ImportOptionContext,i);
    }
};

ImportDeclarationContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LessParser.COMMA);
    } else {
        return this.getToken(LessParser.COMMA, i);
    }
};


ImportDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterImportDeclaration(this);
	}
};

ImportDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitImportDeclaration(this);
	}
};




LessParser.ImportDeclarationContext = ImportDeclarationContext;

LessParser.prototype.importDeclaration = function() {

    var localctx = new ImportDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, LessParser.RULE_importDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 229;
        this.match(LessParser.IMPORT);
        this.state = 241;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LessParser.LPAREN) {
            this.state = 230;
            this.match(LessParser.LPAREN);

            this.state = 231;
            this.importOption();
            this.state = 236;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===LessParser.COMMA) {
                this.state = 232;
                this.match(LessParser.COMMA);
                this.state = 233;
                this.importOption();
                this.state = 238;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 239;
            this.match(LessParser.RPAREN);
        }

        this.state = 243;
        this.referenceUrl();
        this.state = 245;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LessParser.Identifier) {
            this.state = 244;
            this.mediaTypes();
        }

        this.state = 247;
        this.match(LessParser.SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ImportOptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_importOption;
    return this;
}

ImportOptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImportOptionContext.prototype.constructor = ImportOptionContext;

ImportOptionContext.prototype.REFERENCE = function() {
    return this.getToken(LessParser.REFERENCE, 0);
};

ImportOptionContext.prototype.INLINE = function() {
    return this.getToken(LessParser.INLINE, 0);
};

ImportOptionContext.prototype.LESS = function() {
    return this.getToken(LessParser.LESS, 0);
};

ImportOptionContext.prototype.CSS = function() {
    return this.getToken(LessParser.CSS, 0);
};

ImportOptionContext.prototype.ONCE = function() {
    return this.getToken(LessParser.ONCE, 0);
};

ImportOptionContext.prototype.MULTIPLE = function() {
    return this.getToken(LessParser.MULTIPLE, 0);
};

ImportOptionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterImportOption(this);
	}
};

ImportOptionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitImportOption(this);
	}
};




LessParser.ImportOptionContext = ImportOptionContext;

LessParser.prototype.importOption = function() {

    var localctx = new ImportOptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, LessParser.RULE_importOption);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 249;
        _la = this._input.LA(1);
        if(!(((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (LessParser.REFERENCE - 45)) | (1 << (LessParser.INLINE - 45)) | (1 << (LessParser.LESS - 45)) | (1 << (LessParser.CSS - 45)) | (1 << (LessParser.ONCE - 45)) | (1 << (LessParser.MULTIPLE - 45)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ReferenceUrlContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_referenceUrl;
    return this;
}

ReferenceUrlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReferenceUrlContext.prototype.constructor = ReferenceUrlContext;

ReferenceUrlContext.prototype.StringLiteral = function() {
    return this.getToken(LessParser.StringLiteral, 0);
};

ReferenceUrlContext.prototype.UrlStart = function() {
    return this.getToken(LessParser.UrlStart, 0);
};

ReferenceUrlContext.prototype.Url = function() {
    return this.getToken(LessParser.Url, 0);
};

ReferenceUrlContext.prototype.UrlEnd = function() {
    return this.getToken(LessParser.UrlEnd, 0);
};

ReferenceUrlContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterReferenceUrl(this);
	}
};

ReferenceUrlContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitReferenceUrl(this);
	}
};




LessParser.ReferenceUrlContext = ReferenceUrlContext;

LessParser.prototype.referenceUrl = function() {

    var localctx = new ReferenceUrlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, LessParser.RULE_referenceUrl);
    try {
        this.state = 255;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LessParser.StringLiteral:
            this.enterOuterAlt(localctx, 1);
            this.state = 251;
            this.match(LessParser.StringLiteral);
            break;
        case LessParser.UrlStart:
            this.enterOuterAlt(localctx, 2);
            this.state = 252;
            this.match(LessParser.UrlStart);
            this.state = 253;
            this.match(LessParser.Url);
            this.state = 254;
            this.match(LessParser.UrlEnd);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MediaTypesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_mediaTypes;
    return this;
}

MediaTypesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MediaTypesContext.prototype.constructor = MediaTypesContext;

MediaTypesContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LessParser.Identifier);
    } else {
        return this.getToken(LessParser.Identifier, i);
    }
};


MediaTypesContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LessParser.COMMA);
    } else {
        return this.getToken(LessParser.COMMA, i);
    }
};


MediaTypesContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterMediaTypes(this);
	}
};

MediaTypesContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitMediaTypes(this);
	}
};




LessParser.MediaTypesContext = MediaTypesContext;

LessParser.prototype.mediaTypes = function() {

    var localctx = new MediaTypesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, LessParser.RULE_mediaTypes);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 257;
        this.match(LessParser.Identifier);
        this.state = 262;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LessParser.COMMA) {
            this.state = 258;
            this.match(LessParser.COMMA);
            this.state = 259;
            this.match(LessParser.Identifier);
            this.state = 264;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RulesetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_ruleset;
    return this;
}

RulesetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RulesetContext.prototype.constructor = RulesetContext;

RulesetContext.prototype.selectors = function() {
    return this.getTypedRuleContext(SelectorsContext,0);
};

RulesetContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

RulesetContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterRuleset(this);
	}
};

RulesetContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitRuleset(this);
	}
};




LessParser.RulesetContext = RulesetContext;

LessParser.prototype.ruleset = function() {

    var localctx = new RulesetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, LessParser.RULE_ruleset);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 265;
        this.selectors();
        this.state = 266;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.BlockStart = function() {
    return this.getToken(LessParser.BlockStart, 0);
};

BlockContext.prototype.BlockEnd = function() {
    return this.getToken(LessParser.BlockEnd, 0);
};

BlockContext.prototype.blockItem = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockItemContext);
    } else {
        return this.getTypedRuleContext(BlockItemContext,i);
    }
};

BlockContext.prototype.property = function() {
    return this.getTypedRuleContext(PropertyContext,0);
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitBlock(this);
	}
};




LessParser.BlockContext = BlockContext;

LessParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, LessParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 268;
        this.match(LessParser.BlockStart);
        this.state = 272;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 269;
                this.blockItem(); 
            }
            this.state = 274;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,23,this._ctx);
        }

        this.state = 276;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LessParser.InterpolationStart || _la===LessParser.Identifier) {
            this.state = 275;
            this.property();
        }

        this.state = 278;
        this.match(LessParser.BlockEnd);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BlockItemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_blockItem;
    return this;
}

BlockItemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockItemContext.prototype.constructor = BlockItemContext;

BlockItemContext.prototype.property = function() {
    return this.getTypedRuleContext(PropertyContext,0);
};

BlockItemContext.prototype.SEMI = function() {
    return this.getToken(LessParser.SEMI, 0);
};

BlockItemContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

BlockItemContext.prototype.mixinReference = function() {
    return this.getTypedRuleContext(MixinReferenceContext,0);
};

BlockItemContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterBlockItem(this);
	}
};

BlockItemContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitBlockItem(this);
	}
};




LessParser.BlockItemContext = BlockItemContext;

LessParser.prototype.blockItem = function() {

    var localctx = new BlockItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, LessParser.RULE_blockItem);
    try {
        this.state = 285;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 280;
            this.property();
            this.state = 281;
            this.match(LessParser.SEMI);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 283;
            this.statement();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 284;
            this.mixinReference();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MixinDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_mixinDefinition;
    return this;
}

MixinDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MixinDefinitionContext.prototype.constructor = MixinDefinitionContext;

MixinDefinitionContext.prototype.selectors = function() {
    return this.getTypedRuleContext(SelectorsContext,0);
};

MixinDefinitionContext.prototype.LPAREN = function() {
    return this.getToken(LessParser.LPAREN, 0);
};

MixinDefinitionContext.prototype.RPAREN = function() {
    return this.getToken(LessParser.RPAREN, 0);
};

MixinDefinitionContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

MixinDefinitionContext.prototype.mixinDefinitionParam = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MixinDefinitionParamContext);
    } else {
        return this.getTypedRuleContext(MixinDefinitionParamContext,i);
    }
};

MixinDefinitionContext.prototype.Ellipsis = function() {
    return this.getToken(LessParser.Ellipsis, 0);
};

MixinDefinitionContext.prototype.mixinGuard = function() {
    return this.getTypedRuleContext(MixinGuardContext,0);
};

MixinDefinitionContext.prototype.SEMI = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LessParser.SEMI);
    } else {
        return this.getToken(LessParser.SEMI, i);
    }
};


MixinDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterMixinDefinition(this);
	}
};

MixinDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitMixinDefinition(this);
	}
};




LessParser.MixinDefinitionContext = MixinDefinitionContext;

LessParser.prototype.mixinDefinition = function() {

    var localctx = new MixinDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, LessParser.RULE_mixinDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 287;
        this.selectors();
        this.state = 288;
        this.match(LessParser.LPAREN);
        this.state = 297;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LessParser.AT) {
            this.state = 289;
            this.mixinDefinitionParam();
            this.state = 294;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===LessParser.SEMI) {
                this.state = 290;
                this.match(LessParser.SEMI);
                this.state = 291;
                this.mixinDefinitionParam();
                this.state = 296;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 300;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LessParser.Ellipsis) {
            this.state = 299;
            this.match(LessParser.Ellipsis);
        }

        this.state = 302;
        this.match(LessParser.RPAREN);
        this.state = 304;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LessParser.WHEN) {
            this.state = 303;
            this.mixinGuard();
        }

        this.state = 306;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MixinGuardContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_mixinGuard;
    return this;
}

MixinGuardContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MixinGuardContext.prototype.constructor = MixinGuardContext;

MixinGuardContext.prototype.WHEN = function() {
    return this.getToken(LessParser.WHEN, 0);
};

MixinGuardContext.prototype.conditions = function() {
    return this.getTypedRuleContext(ConditionsContext,0);
};

MixinGuardContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterMixinGuard(this);
	}
};

MixinGuardContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitMixinGuard(this);
	}
};




LessParser.MixinGuardContext = MixinGuardContext;

LessParser.prototype.mixinGuard = function() {

    var localctx = new MixinGuardContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, LessParser.RULE_mixinGuard);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 308;
        this.match(LessParser.WHEN);
        this.state = 309;
        this.conditions();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MixinDefinitionParamContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_mixinDefinitionParam;
    return this;
}

MixinDefinitionParamContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MixinDefinitionParamContext.prototype.constructor = MixinDefinitionParamContext;

MixinDefinitionParamContext.prototype.variableName = function() {
    return this.getTypedRuleContext(VariableNameContext,0);
};

MixinDefinitionParamContext.prototype.variableDeclaration = function() {
    return this.getTypedRuleContext(VariableDeclarationContext,0);
};

MixinDefinitionParamContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterMixinDefinitionParam(this);
	}
};

MixinDefinitionParamContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitMixinDefinitionParam(this);
	}
};




LessParser.MixinDefinitionParamContext = MixinDefinitionParamContext;

LessParser.prototype.mixinDefinitionParam = function() {

    var localctx = new MixinDefinitionParamContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, LessParser.RULE_mixinDefinitionParam);
    try {
        this.state = 313;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 311;
            this.variableName();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 312;
            this.variableDeclaration();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MixinReferenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_mixinReference;
    return this;
}

MixinReferenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MixinReferenceContext.prototype.constructor = MixinReferenceContext;

MixinReferenceContext.prototype.selector = function() {
    return this.getTypedRuleContext(SelectorContext,0);
};

MixinReferenceContext.prototype.LPAREN = function() {
    return this.getToken(LessParser.LPAREN, 0);
};

MixinReferenceContext.prototype.RPAREN = function() {
    return this.getToken(LessParser.RPAREN, 0);
};

MixinReferenceContext.prototype.SEMI = function() {
    return this.getToken(LessParser.SEMI, 0);
};

MixinReferenceContext.prototype.values = function() {
    return this.getTypedRuleContext(ValuesContext,0);
};

MixinReferenceContext.prototype.IMPORTANT = function() {
    return this.getToken(LessParser.IMPORTANT, 0);
};

MixinReferenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterMixinReference(this);
	}
};

MixinReferenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitMixinReference(this);
	}
};




LessParser.MixinReferenceContext = MixinReferenceContext;

LessParser.prototype.mixinReference = function() {

    var localctx = new MixinReferenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, LessParser.RULE_mixinReference);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 315;
        this.selector();
        this.state = 316;
        this.match(LessParser.LPAREN);
        this.state = 318;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LessParser.InterpolationStart || _la===LessParser.AT || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (LessParser.UrlStart - 37)) | (1 << (LessParser.Identifier - 37)) | (1 << (LessParser.StringLiteral - 37)) | (1 << (LessParser.Number - 37)) | (1 << (LessParser.Color - 37)))) !== 0)) {
            this.state = 317;
            this.values();
        }

        this.state = 320;
        this.match(LessParser.RPAREN);
        this.state = 322;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LessParser.IMPORTANT) {
            this.state = 321;
            this.match(LessParser.IMPORTANT);
        }

        this.state = 324;
        this.match(LessParser.SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SelectorsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_selectors;
    return this;
}

SelectorsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectorsContext.prototype.constructor = SelectorsContext;

SelectorsContext.prototype.selector = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SelectorContext);
    } else {
        return this.getTypedRuleContext(SelectorContext,i);
    }
};

SelectorsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LessParser.COMMA);
    } else {
        return this.getToken(LessParser.COMMA, i);
    }
};


SelectorsContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterSelectors(this);
	}
};

SelectorsContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitSelectors(this);
	}
};




LessParser.SelectorsContext = SelectorsContext;

LessParser.prototype.selectors = function() {

    var localctx = new SelectorsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, LessParser.RULE_selectors);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 326;
        this.selector();
        this.state = 331;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LessParser.COMMA) {
            this.state = 327;
            this.match(LessParser.COMMA);
            this.state = 328;
            this.selector();
            this.state = 333;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SelectorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_selector;
    return this;
}

SelectorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectorContext.prototype.constructor = SelectorContext;

SelectorContext.prototype.element = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElementContext);
    } else {
        return this.getTypedRuleContext(ElementContext,i);
    }
};

SelectorContext.prototype.attrib = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AttribContext);
    } else {
        return this.getTypedRuleContext(AttribContext,i);
    }
};

SelectorContext.prototype.pseudo = function() {
    return this.getTypedRuleContext(PseudoContext,0);
};

SelectorContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterSelector(this);
	}
};

SelectorContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitSelector(this);
	}
};




LessParser.SelectorContext = SelectorContext;

LessParser.prototype.selector = function() {

    var localctx = new SelectorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, LessParser.RULE_selector);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 335; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 334;
        		this.element();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 337; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,34, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 342;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LessParser.LBRACK) {
            this.state = 339;
            this.attrib();
            this.state = 344;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 346;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LessParser.COLON || _la===LessParser.COLONCOLON) {
            this.state = 345;
            this.pseudo();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AttribContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_attrib;
    return this;
}

AttribContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AttribContext.prototype.constructor = AttribContext;

AttribContext.prototype.LBRACK = function() {
    return this.getToken(LessParser.LBRACK, 0);
};

AttribContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LessParser.Identifier);
    } else {
        return this.getToken(LessParser.Identifier, i);
    }
};


AttribContext.prototype.RBRACK = function() {
    return this.getToken(LessParser.RBRACK, 0);
};

AttribContext.prototype.attribRelate = function() {
    return this.getTypedRuleContext(AttribRelateContext,0);
};

AttribContext.prototype.StringLiteral = function() {
    return this.getToken(LessParser.StringLiteral, 0);
};

AttribContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterAttrib(this);
	}
};

AttribContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitAttrib(this);
	}
};




LessParser.AttribContext = AttribContext;

LessParser.prototype.attrib = function() {

    var localctx = new AttribContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, LessParser.RULE_attrib);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 348;
        this.match(LessParser.LBRACK);
        this.state = 349;
        this.match(LessParser.Identifier);
        this.state = 353;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (LessParser.EQ - 33)) | (1 << (LessParser.PIPE_EQ - 33)) | (1 << (LessParser.TILD_EQ - 33)))) !== 0)) {
            this.state = 350;
            this.attribRelate();
            this.state = 351;
            _la = this._input.LA(1);
            if(!(_la===LessParser.Identifier || _la===LessParser.StringLiteral)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
        }

        this.state = 355;
        this.match(LessParser.RBRACK);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NegationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_negation;
    return this;
}

NegationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NegationContext.prototype.constructor = NegationContext;

NegationContext.prototype.COLON = function() {
    return this.getToken(LessParser.COLON, 0);
};

NegationContext.prototype.NOT = function() {
    return this.getToken(LessParser.NOT, 0);
};

NegationContext.prototype.LPAREN = function() {
    return this.getToken(LessParser.LPAREN, 0);
};

NegationContext.prototype.selectors = function() {
    return this.getTypedRuleContext(SelectorsContext,0);
};

NegationContext.prototype.RPAREN = function() {
    return this.getToken(LessParser.RPAREN, 0);
};

NegationContext.prototype.LBRACK = function() {
    return this.getToken(LessParser.LBRACK, 0);
};

NegationContext.prototype.RBRACK = function() {
    return this.getToken(LessParser.RBRACK, 0);
};

NegationContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterNegation(this);
	}
};

NegationContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitNegation(this);
	}
};




LessParser.NegationContext = NegationContext;

LessParser.prototype.negation = function() {

    var localctx = new NegationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, LessParser.RULE_negation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 357;
        this.match(LessParser.COLON);
        this.state = 358;
        this.match(LessParser.NOT);
        this.state = 359;
        this.match(LessParser.LPAREN);
        this.state = 361;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LessParser.LBRACK) {
            this.state = 360;
            this.match(LessParser.LBRACK);
        }

        this.state = 363;
        this.selectors();
        this.state = 365;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LessParser.RBRACK) {
            this.state = 364;
            this.match(LessParser.RBRACK);
        }

        this.state = 367;
        this.match(LessParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PseudoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_pseudo;
    return this;
}

PseudoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PseudoContext.prototype.constructor = PseudoContext;

PseudoContext.prototype.Identifier = function() {
    return this.getToken(LessParser.Identifier, 0);
};

PseudoContext.prototype.COLON = function() {
    return this.getToken(LessParser.COLON, 0);
};

PseudoContext.prototype.COLONCOLON = function() {
    return this.getToken(LessParser.COLONCOLON, 0);
};

PseudoContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterPseudo(this);
	}
};

PseudoContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitPseudo(this);
	}
};




LessParser.PseudoContext = PseudoContext;

LessParser.prototype.pseudo = function() {

    var localctx = new PseudoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, LessParser.RULE_pseudo);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 369;
        _la = this._input.LA(1);
        if(!(_la===LessParser.COLON || _la===LessParser.COLONCOLON)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 370;
        this.match(LessParser.Identifier);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_element;
    return this;
}

ElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementContext.prototype.constructor = ElementContext;

ElementContext.prototype.selectorPrefix = function() {
    return this.getTypedRuleContext(SelectorPrefixContext,0);
};

ElementContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ElementContext.prototype.HASH = function() {
    return this.getToken(LessParser.HASH, 0);
};

ElementContext.prototype.pseudo = function() {
    return this.getTypedRuleContext(PseudoContext,0);
};

ElementContext.prototype.negation = function() {
    return this.getTypedRuleContext(NegationContext,0);
};

ElementContext.prototype.PARENTREF = function() {
    return this.getToken(LessParser.PARENTREF, 0);
};

ElementContext.prototype.TIMES = function() {
    return this.getToken(LessParser.TIMES, 0);
};

ElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterElement(this);
	}
};

ElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitElement(this);
	}
};




LessParser.ElementContext = ElementContext;

LessParser.prototype.element = function() {

    var localctx = new ElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, LessParser.RULE_element);
    try {
        this.state = 382;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 372;
            this.selectorPrefix();
            this.state = 373;
            this.identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 375;
            this.identifier();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 376;
            this.match(LessParser.HASH);
            this.state = 377;
            this.identifier();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 378;
            this.pseudo();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 379;
            this.negation();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 380;
            this.match(LessParser.PARENTREF);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 381;
            this.match(LessParser.TIMES);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SelectorPrefixContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_selectorPrefix;
    return this;
}

SelectorPrefixContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectorPrefixContext.prototype.constructor = SelectorPrefixContext;

SelectorPrefixContext.prototype.GT = function() {
    return this.getToken(LessParser.GT, 0);
};

SelectorPrefixContext.prototype.PLUS = function() {
    return this.getToken(LessParser.PLUS, 0);
};

SelectorPrefixContext.prototype.TIL = function() {
    return this.getToken(LessParser.TIL, 0);
};

SelectorPrefixContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterSelectorPrefix(this);
	}
};

SelectorPrefixContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitSelectorPrefix(this);
	}
};




LessParser.SelectorPrefixContext = SelectorPrefixContext;

LessParser.prototype.selectorPrefix = function() {

    var localctx = new SelectorPrefixContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, LessParser.RULE_selectorPrefix);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 384;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LessParser.GT) | (1 << LessParser.TIL) | (1 << LessParser.PLUS))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AttribRelateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_attribRelate;
    return this;
}

AttribRelateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AttribRelateContext.prototype.constructor = AttribRelateContext;

AttribRelateContext.prototype.EQ = function() {
    return this.getToken(LessParser.EQ, 0);
};

AttribRelateContext.prototype.TILD_EQ = function() {
    return this.getToken(LessParser.TILD_EQ, 0);
};

AttribRelateContext.prototype.PIPE_EQ = function() {
    return this.getToken(LessParser.PIPE_EQ, 0);
};

AttribRelateContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterAttribRelate(this);
	}
};

AttribRelateContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitAttribRelate(this);
	}
};




LessParser.AttribRelateContext = AttribRelateContext;

LessParser.prototype.attribRelate = function() {

    var localctx = new AttribRelateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, LessParser.RULE_attribRelate);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 386;
        _la = this._input.LA(1);
        if(!(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (LessParser.EQ - 33)) | (1 << (LessParser.PIPE_EQ - 33)) | (1 << (LessParser.TILD_EQ - 33)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_identifier;
    return this;
}

IdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierContext.prototype.constructor = IdentifierContext;

IdentifierContext.prototype.Identifier = function() {
    return this.getToken(LessParser.Identifier, 0);
};

IdentifierContext.prototype.identifierPart = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierPartContext);
    } else {
        return this.getTypedRuleContext(IdentifierPartContext,i);
    }
};

IdentifierContext.prototype.InterpolationStart = function() {
    return this.getToken(LessParser.InterpolationStart, 0);
};

IdentifierContext.prototype.identifierVariableName = function() {
    return this.getTypedRuleContext(IdentifierVariableNameContext,0);
};

IdentifierContext.prototype.BlockEnd = function() {
    return this.getToken(LessParser.BlockEnd, 0);
};

IdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterIdentifier(this);
	}
};

IdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitIdentifier(this);
	}
};




LessParser.IdentifierContext = IdentifierContext;

LessParser.prototype.identifier = function() {

    var localctx = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, LessParser.RULE_identifier);
    var _la = 0; // Token type
    try {
        this.state = 404;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LessParser.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 388;
            this.match(LessParser.Identifier);
            this.state = 392;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===LessParser.InterpolationStartAfter || _la===LessParser.IdentifierAfter) {
                this.state = 389;
                this.identifierPart();
                this.state = 394;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case LessParser.InterpolationStart:
            this.enterOuterAlt(localctx, 2);
            this.state = 395;
            this.match(LessParser.InterpolationStart);
            this.state = 396;
            this.identifierVariableName();
            this.state = 397;
            this.match(LessParser.BlockEnd);
            this.state = 401;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===LessParser.InterpolationStartAfter || _la===LessParser.IdentifierAfter) {
                this.state = 398;
                this.identifierPart();
                this.state = 403;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IdentifierPartContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_identifierPart;
    return this;
}

IdentifierPartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierPartContext.prototype.constructor = IdentifierPartContext;

IdentifierPartContext.prototype.InterpolationStartAfter = function() {
    return this.getToken(LessParser.InterpolationStartAfter, 0);
};

IdentifierPartContext.prototype.identifierVariableName = function() {
    return this.getTypedRuleContext(IdentifierVariableNameContext,0);
};

IdentifierPartContext.prototype.BlockEnd = function() {
    return this.getToken(LessParser.BlockEnd, 0);
};

IdentifierPartContext.prototype.IdentifierAfter = function() {
    return this.getToken(LessParser.IdentifierAfter, 0);
};

IdentifierPartContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterIdentifierPart(this);
	}
};

IdentifierPartContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitIdentifierPart(this);
	}
};




LessParser.IdentifierPartContext = IdentifierPartContext;

LessParser.prototype.identifierPart = function() {

    var localctx = new IdentifierPartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, LessParser.RULE_identifierPart);
    try {
        this.state = 411;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LessParser.InterpolationStartAfter:
            this.enterOuterAlt(localctx, 1);
            this.state = 406;
            this.match(LessParser.InterpolationStartAfter);
            this.state = 407;
            this.identifierVariableName();
            this.state = 408;
            this.match(LessParser.BlockEnd);
            break;
        case LessParser.IdentifierAfter:
            this.enterOuterAlt(localctx, 2);
            this.state = 410;
            this.match(LessParser.IdentifierAfter);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IdentifierVariableNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_identifierVariableName;
    return this;
}

IdentifierVariableNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierVariableNameContext.prototype.constructor = IdentifierVariableNameContext;

IdentifierVariableNameContext.prototype.Identifier = function() {
    return this.getToken(LessParser.Identifier, 0);
};

IdentifierVariableNameContext.prototype.IdentifierAfter = function() {
    return this.getToken(LessParser.IdentifierAfter, 0);
};

IdentifierVariableNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterIdentifierVariableName(this);
	}
};

IdentifierVariableNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitIdentifierVariableName(this);
	}
};




LessParser.IdentifierVariableNameContext = IdentifierVariableNameContext;

LessParser.prototype.identifierVariableName = function() {

    var localctx = new IdentifierVariableNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, LessParser.RULE_identifierVariableName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 413;
        _la = this._input.LA(1);
        if(!(_la===LessParser.Identifier || _la===LessParser.IdentifierAfter)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PropertyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_property;
    return this;
}

PropertyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyContext.prototype.constructor = PropertyContext;

PropertyContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

PropertyContext.prototype.COLON = function() {
    return this.getToken(LessParser.COLON, 0);
};

PropertyContext.prototype.values = function() {
    return this.getTypedRuleContext(ValuesContext,0);
};

PropertyContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterProperty(this);
	}
};

PropertyContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitProperty(this);
	}
};




LessParser.PropertyContext = PropertyContext;

LessParser.prototype.property = function() {

    var localctx = new PropertyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, LessParser.RULE_property);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 415;
        this.identifier();
        this.state = 416;
        this.match(LessParser.COLON);
        this.state = 417;
        this.values();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ValuesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_values;
    return this;
}

ValuesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesContext.prototype.constructor = ValuesContext;

ValuesContext.prototype.commandStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CommandStatementContext);
    } else {
        return this.getTypedRuleContext(CommandStatementContext,i);
    }
};

ValuesContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LessParser.COMMA);
    } else {
        return this.getToken(LessParser.COMMA, i);
    }
};


ValuesContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterValues(this);
	}
};

ValuesContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitValues(this);
	}
};




LessParser.ValuesContext = ValuesContext;

LessParser.prototype.values = function() {

    var localctx = new ValuesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, LessParser.RULE_values);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 419;
        this.commandStatement();
        this.state = 424;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LessParser.COMMA) {
            this.state = 420;
            this.match(LessParser.COMMA);
            this.state = 421;
            this.commandStatement();
            this.state = 426;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function UrlContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_url;
    return this;
}

UrlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UrlContext.prototype.constructor = UrlContext;

UrlContext.prototype.UrlStart = function() {
    return this.getToken(LessParser.UrlStart, 0);
};

UrlContext.prototype.Url = function() {
    return this.getToken(LessParser.Url, 0);
};

UrlContext.prototype.UrlEnd = function() {
    return this.getToken(LessParser.UrlEnd, 0);
};

UrlContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterUrl(this);
	}
};

UrlContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitUrl(this);
	}
};




LessParser.UrlContext = UrlContext;

LessParser.prototype.url = function() {

    var localctx = new UrlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, LessParser.RULE_url);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 427;
        this.match(LessParser.UrlStart);
        this.state = 428;
        this.match(LessParser.Url);
        this.state = 429;
        this.match(LessParser.UrlEnd);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MeasurementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LessParser.RULE_measurement;
    return this;
}

MeasurementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MeasurementContext.prototype.constructor = MeasurementContext;

MeasurementContext.prototype.Number = function() {
    return this.getToken(LessParser.Number, 0);
};

MeasurementContext.prototype.Unit = function() {
    return this.getToken(LessParser.Unit, 0);
};

MeasurementContext.prototype.enterRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.enterMeasurement(this);
	}
};

MeasurementContext.prototype.exitRule = function(listener) {
    if(listener instanceof LessParserListener ) {
        listener.exitMeasurement(this);
	}
};




LessParser.MeasurementContext = MeasurementContext;

LessParser.prototype.measurement = function() {

    var localctx = new MeasurementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, LessParser.RULE_measurement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 431;
        this.match(LessParser.Number);
        this.state = 433;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LessParser.Unit) {
            this.state = 432;
            this.match(LessParser.Unit);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.LessParser = LessParser;
