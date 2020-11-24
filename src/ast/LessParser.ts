// Generated from lang/LessParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { LessParserListener } from "./LessParserListener";
import { LessParserVisitor } from "./LessParserVisitor";


export class LessParser extends Parser {
	public static readonly NULL = 1;
	public static readonly IN = 2;
	public static readonly Unit = 3;
	public static readonly Ellipsis = 4;
	public static readonly InterpolationStart = 5;
	public static readonly LPAREN = 6;
	public static readonly RPAREN = 7;
	public static readonly BlockStart = 8;
	public static readonly BlockEnd = 9;
	public static readonly LBRACK = 10;
	public static readonly RBRACK = 11;
	public static readonly GT = 12;
	public static readonly TIL = 13;
	public static readonly LT = 14;
	public static readonly COLON = 15;
	public static readonly SEMI = 16;
	public static readonly COMMA = 17;
	public static readonly DOT = 18;
	public static readonly DOLLAR = 19;
	public static readonly AT = 20;
	public static readonly PARENTREF = 21;
	public static readonly HASH = 22;
	public static readonly COLONCOLON = 23;
	public static readonly PLUS = 24;
	public static readonly TIMES = 25;
	public static readonly DIV = 26;
	public static readonly MINUS = 27;
	public static readonly PERC = 28;
	public static readonly EQEQ = 29;
	public static readonly GTEQ = 30;
	public static readonly LTEQ = 31;
	public static readonly NOTEQ = 32;
	public static readonly EQ = 33;
	public static readonly PIPE_EQ = 34;
	public static readonly TILD_EQ = 35;
	public static readonly URL = 36;
	public static readonly UrlStart = 37;
	public static readonly IMPORT = 38;
	public static readonly MEDIA = 39;
	public static readonly MEDIAONLY = 40;
	public static readonly EXTEND = 41;
	public static readonly IMPORTANT = 42;
	public static readonly ARGUMENTS = 43;
	public static readonly REST = 44;
	public static readonly REFERENCE = 45;
	public static readonly INLINE = 46;
	public static readonly LESS = 47;
	public static readonly CSS = 48;
	public static readonly ONCE = 49;
	public static readonly MULTIPLE = 50;
	public static readonly WHEN = 51;
	public static readonly NOT = 52;
	public static readonly AND = 53;
	public static readonly Identifier = 54;
	public static readonly StringLiteral = 55;
	public static readonly Number = 56;
	public static readonly Color = 57;
	public static readonly WS = 58;
	public static readonly SL_COMMENT = 59;
	public static readonly COMMENT = 60;
	public static readonly FUNCTION_NAME = 61;
	public static readonly COLOR = 62;
	public static readonly CONVERT = 63;
	public static readonly DATA_URI = 64;
	public static readonly DEFAULT = 65;
	public static readonly UNIT = 66;
	public static readonly GET_UNIT = 67;
	public static readonly SVG_GRADIENT = 68;
	public static readonly ESCAPE = 69;
	public static readonly E = 70;
	public static readonly REPLACE = 71;
	public static readonly LENGTH = 72;
	public static readonly EXTRACT = 73;
	public static readonly CEIL = 74;
	public static readonly FLOOR = 75;
	public static readonly PERCENTAGE = 76;
	public static readonly ROUND = 77;
	public static readonly SQRT = 78;
	public static readonly ABS = 79;
	public static readonly SIN = 80;
	public static readonly ASIN = 81;
	public static readonly COS = 82;
	public static readonly ACOS = 83;
	public static readonly TAN = 84;
	public static readonly ATAN = 85;
	public static readonly PI = 86;
	public static readonly POW = 87;
	public static readonly MOD = 88;
	public static readonly MIN = 89;
	public static readonly MAX = 90;
	public static readonly ISNUMBER = 91;
	public static readonly ISSTRING = 92;
	public static readonly ISCOLOR = 93;
	public static readonly ISKEYWORD = 94;
	public static readonly ISURL = 95;
	public static readonly ISPIXEL = 96;
	public static readonly ISEM = 97;
	public static readonly ISPERCENTAGE = 98;
	public static readonly ISUNIT = 99;
	public static readonly RGB = 100;
	public static readonly RGBA = 101;
	public static readonly ARGB = 102;
	public static readonly HSL = 103;
	public static readonly HSLA = 104;
	public static readonly HSV = 105;
	public static readonly HSVA = 106;
	public static readonly HUE = 107;
	public static readonly SATURATION = 108;
	public static readonly LIGHTNESS = 109;
	public static readonly HSVHUE = 110;
	public static readonly HSVSATURATION = 111;
	public static readonly HSVVALUE = 112;
	public static readonly RED = 113;
	public static readonly GREEN = 114;
	public static readonly BLUE = 115;
	public static readonly ALPHA = 116;
	public static readonly LUMA = 117;
	public static readonly LUMINANCE = 118;
	public static readonly SATURATE = 119;
	public static readonly DESATURATE = 120;
	public static readonly LIGHTEN = 121;
	public static readonly DARKEN = 122;
	public static readonly FADEIN = 123;
	public static readonly FADEOUT = 124;
	public static readonly FADE = 125;
	public static readonly SPIN = 126;
	public static readonly MIX = 127;
	public static readonly GREYSCALE = 128;
	public static readonly CONTRAST = 129;
	public static readonly MULTIPLY = 130;
	public static readonly SCREEN = 131;
	public static readonly OVERLAY = 132;
	public static readonly SOFTLIGHT = 133;
	public static readonly HARDLIGHT = 134;
	public static readonly DIFFERENCE = 135;
	public static readonly EXCLUSION = 136;
	public static readonly AVERAGE = 137;
	public static readonly NEGATION = 138;
	public static readonly UrlEnd = 139;
	public static readonly Url = 140;
	public static readonly SPACE = 141;
	public static readonly InterpolationStartAfter = 142;
	public static readonly IdentifierAfter = 143;
	public static readonly RULE_stylesheet = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_media = 2;
	public static readonly RULE_mediaQueryList = 3;
	public static readonly RULE_mediaQuery = 4;
	public static readonly RULE_mediaType = 5;
	public static readonly RULE_mediaExpression = 6;
	public static readonly RULE_mediaFeature = 7;
	public static readonly RULE_variableName = 8;
	public static readonly RULE_commandStatement = 9;
	public static readonly RULE_mathCharacter = 10;
	public static readonly RULE_mathStatement = 11;
	public static readonly RULE_expression = 12;
	public static readonly RULE_func = 13;
	public static readonly RULE_conditions = 14;
	public static readonly RULE_condition = 15;
	public static readonly RULE_conditionStatement = 16;
	public static readonly RULE_variableDeclaration = 17;
	public static readonly RULE_importDeclaration = 18;
	public static readonly RULE_importOption = 19;
	public static readonly RULE_referenceUrl = 20;
	public static readonly RULE_mediaTypes = 21;
	public static readonly RULE_ruleset = 22;
	public static readonly RULE_block = 23;
	public static readonly RULE_blockItem = 24;
	public static readonly RULE_mixinDefinition = 25;
	public static readonly RULE_mixinGuard = 26;
	public static readonly RULE_mixinDefinitionParam = 27;
	public static readonly RULE_mixinReference = 28;
	public static readonly RULE_selectors = 29;
	public static readonly RULE_selector = 30;
	public static readonly RULE_attrib = 31;
	public static readonly RULE_negation = 32;
	public static readonly RULE_pseudo = 33;
	public static readonly RULE_element = 34;
	public static readonly RULE_selectorPrefix = 35;
	public static readonly RULE_attribRelate = 36;
	public static readonly RULE_identifier = 37;
	public static readonly RULE_identifierPart = 38;
	public static readonly RULE_identifierVariableName = 39;
	public static readonly RULE_property = 40;
	public static readonly RULE_values = 41;
	public static readonly RULE_url = 42;
	public static readonly RULE_measurement = 43;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"stylesheet", "statement", "media", "mediaQueryList", "mediaQuery", "mediaType", 
		"mediaExpression", "mediaFeature", "variableName", "commandStatement", 
		"mathCharacter", "mathStatement", "expression", "func", "conditions", 
		"condition", "conditionStatement", "variableDeclaration", "importDeclaration", 
		"importOption", "referenceUrl", "mediaTypes", "ruleset", "block", "blockItem", 
		"mixinDefinition", "mixinGuard", "mixinDefinitionParam", "mixinReference", 
		"selectors", "selector", "attrib", "negation", "pseudo", "element", "selectorPrefix", 
		"attribRelate", "identifier", "identifierPart", "identifierVariableName", 
		"property", "values", "url", "measurement",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'null'", "'in'", undefined, "'...'", undefined, "'('", "')'", 
		"'{'", "'}'", "'['", "']'", "'>'", "'~'", "'<'", "':'", "';'", "','", 
		"'.'", "'$'", "'@'", "'&'", "'#'", "'::'", "'+'", "'*'", "'/'", "'-'", 
		"'%'", "'=='", "'>='", "'<='", "'!='", "'='", "'|='", "'~='", "'url'", 
		undefined, "'@import'", "'@media'", "'only'", "':extend'", "'!important'", 
		"'@arguments'", "'@rest'", "'reference'", "'inline'", "'less'", "'css'", 
		"'once'", "'multiple'", "'when'", "'not'", "'and'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'color'", 
		"'convert'", "'data-uri'", "'default'", "'unit'", "'get-unit'", "'svg-gradient'", 
		"'escape'", "'e'", "'replace'", "'length'", "'extract'", "'ceil'", "'floor'", 
		"'percentage'", "'round'", "'sqrt'", "'abs'", "'sin'", "'asin'", "'cos'", 
		"'acos'", "'tan'", "'atan'", "'pi'", "'pow'", "'mod'", "'min'", "'max'", 
		"'isnumber'", "'isstring'", "'iscolor'", "'iskeyword'", "'isurl'", "'ispixel'", 
		"'isem'", "'ispercentage'", "'isunit'", "'rgb'", "'rgba'", "'argb'", "'hsl'", 
		"'hsla'", "'hsv'", "'hsva'", "'hue'", "'saturation'", "'lightness'", "'hsvhue'", 
		"'hsvsaturation'", "'hsvvalue'", "'red'", "'green'", "'blue'", "'alpha'", 
		"'luma'", "'luminance'", "'saturate'", "'desaturate'", "'lighten'", "'darken'", 
		"'fadein'", "'fadeout'", "'fade'", "'spin'", "'mix'", "'greyscale'", "'contrast'", 
		"'multiply'", "'screen'", "'overlay'", "'softlight'", "'hardlight'", "'difference'", 
		"'exclusion'", "'average'", "'negation'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "NULL", "IN", "Unit", "Ellipsis", "InterpolationStart", "LPAREN", 
		"RPAREN", "BlockStart", "BlockEnd", "LBRACK", "RBRACK", "GT", "TIL", "LT", 
		"COLON", "SEMI", "COMMA", "DOT", "DOLLAR", "AT", "PARENTREF", "HASH", 
		"COLONCOLON", "PLUS", "TIMES", "DIV", "MINUS", "PERC", "EQEQ", "GTEQ", 
		"LTEQ", "NOTEQ", "EQ", "PIPE_EQ", "TILD_EQ", "URL", "UrlStart", "IMPORT", 
		"MEDIA", "MEDIAONLY", "EXTEND", "IMPORTANT", "ARGUMENTS", "REST", "REFERENCE", 
		"INLINE", "LESS", "CSS", "ONCE", "MULTIPLE", "WHEN", "NOT", "AND", "Identifier", 
		"StringLiteral", "Number", "Color", "WS", "SL_COMMENT", "COMMENT", "FUNCTION_NAME", 
		"COLOR", "CONVERT", "DATA_URI", "DEFAULT", "UNIT", "GET_UNIT", "SVG_GRADIENT", 
		"ESCAPE", "E", "REPLACE", "LENGTH", "EXTRACT", "CEIL", "FLOOR", "PERCENTAGE", 
		"ROUND", "SQRT", "ABS", "SIN", "ASIN", "COS", "ACOS", "TAN", "ATAN", "PI", 
		"POW", "MOD", "MIN", "MAX", "ISNUMBER", "ISSTRING", "ISCOLOR", "ISKEYWORD", 
		"ISURL", "ISPIXEL", "ISEM", "ISPERCENTAGE", "ISUNIT", "RGB", "RGBA", "ARGB", 
		"HSL", "HSLA", "HSV", "HSVA", "HUE", "SATURATION", "LIGHTNESS", "HSVHUE", 
		"HSVSATURATION", "HSVVALUE", "RED", "GREEN", "BLUE", "ALPHA", "LUMA", 
		"LUMINANCE", "SATURATE", "DESATURATE", "LIGHTEN", "DARKEN", "FADEIN", 
		"FADEOUT", "FADE", "SPIN", "MIX", "GREYSCALE", "CONTRAST", "MULTIPLY", 
		"SCREEN", "OVERLAY", "SOFTLIGHT", "HARDLIGHT", "DIFFERENCE", "EXCLUSION", 
		"AVERAGE", "NEGATION", "UrlEnd", "Url", "SPACE", "InterpolationStartAfter", 
		"IdentifierAfter",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(LessParser._LITERAL_NAMES, LessParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return LessParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "LessParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return LessParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return LessParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(LessParser._ATN, this);
	}
	// @RuleVersion(0)
	public stylesheet(): StylesheetContext {
		let _localctx: StylesheetContext = new StylesheetContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, LessParser.RULE_stylesheet);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LessParser.InterpolationStart) | (1 << LessParser.GT) | (1 << LessParser.TIL) | (1 << LessParser.COLON) | (1 << LessParser.AT) | (1 << LessParser.PARENTREF) | (1 << LessParser.HASH) | (1 << LessParser.COLONCOLON) | (1 << LessParser.PLUS) | (1 << LessParser.TIMES))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (LessParser.IMPORT - 38)) | (1 << (LessParser.MEDIA - 38)) | (1 << (LessParser.Identifier - 38)))) !== 0)) {
				{
				{
				this.state = 88;
				this.statement();
				}
				}
				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, LessParser.RULE_statement);
		try {
			this.state = 101;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 94;
				this.importDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 95;
				this.ruleset();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 96;
				this.variableDeclaration();
				this.state = 97;
				this.match(LessParser.SEMI);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 99;
				this.mixinDefinition();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 100;
				this.media();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public media(): MediaContext {
		let _localctx: MediaContext = new MediaContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, LessParser.RULE_media);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 103;
			this.match(LessParser.MEDIA);
			this.state = 104;
			this.mediaQueryList();
			this.state = 105;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mediaQueryList(): MediaQueryListContext {
		let _localctx: MediaQueryListContext = new MediaQueryListContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, LessParser.RULE_mediaQueryList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LessParser.InterpolationStart || _la === LessParser.LPAREN || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (LessParser.MEDIAONLY - 40)) | (1 << (LessParser.NOT - 40)) | (1 << (LessParser.Identifier - 40)))) !== 0)) {
				{
				this.state = 107;
				this.mediaQuery();
				this.state = 112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LessParser.COMMA) {
					{
					{
					this.state = 108;
					this.match(LessParser.COMMA);
					this.state = 109;
					this.mediaQuery();
					}
					}
					this.state = 114;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mediaQuery(): MediaQueryContext {
		let _localctx: MediaQueryContext = new MediaQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, LessParser.RULE_mediaQuery);
		let _la: number;
		try {
			this.state = 136;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LessParser.InterpolationStart:
			case LessParser.MEDIAONLY:
			case LessParser.NOT:
			case LessParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LessParser.MEDIAONLY || _la === LessParser.NOT) {
					{
					this.state = 117;
					_la = this._input.LA(1);
					if (!(_la === LessParser.MEDIAONLY || _la === LessParser.NOT)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 120;
				this.mediaType();
				this.state = 125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LessParser.AND) {
					{
					{
					this.state = 121;
					this.match(LessParser.AND);
					this.state = 122;
					this.mediaExpression();
					}
					}
					this.state = 127;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case LessParser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 128;
				this.mediaExpression();
				this.state = 133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LessParser.AND) {
					{
					{
					this.state = 129;
					this.match(LessParser.AND);
					this.state = 130;
					this.mediaExpression();
					}
					}
					this.state = 135;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mediaType(): MediaTypeContext {
		let _localctx: MediaTypeContext = new MediaTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, LessParser.RULE_mediaType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mediaExpression(): MediaExpressionContext {
		let _localctx: MediaExpressionContext = new MediaExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, LessParser.RULE_mediaExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.match(LessParser.LPAREN);
			this.state = 141;
			this.mediaFeature();
			this.state = 144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LessParser.COLON) {
				{
				this.state = 142;
				this.match(LessParser.COLON);
				this.state = 143;
				this.expression();
				}
			}

			this.state = 146;
			this.match(LessParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mediaFeature(): MediaFeatureContext {
		let _localctx: MediaFeatureContext = new MediaFeatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, LessParser.RULE_mediaFeature);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 148;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableName(): VariableNameContext {
		let _localctx: VariableNameContext = new VariableNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, LessParser.RULE_variableName);
		try {
			this.state = 154;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 150;
				this.match(LessParser.AT);
				this.state = 151;
				this.variableName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 152;
				this.match(LessParser.AT);
				this.state = 153;
				this.match(LessParser.Identifier);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public commandStatement(): CommandStatementContext {
		let _localctx: CommandStatementContext = new CommandStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, LessParser.RULE_commandStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 156;
				this.expression();
				}
				}
				this.state = 159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === LessParser.InterpolationStart || _la === LessParser.AT || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (LessParser.UrlStart - 37)) | (1 << (LessParser.Identifier - 37)) | (1 << (LessParser.StringLiteral - 37)) | (1 << (LessParser.Number - 37)) | (1 << (LessParser.Color - 37)))) !== 0));
			}
			this.state = 162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LessParser.PLUS) | (1 << LessParser.TIMES) | (1 << LessParser.DIV) | (1 << LessParser.MINUS) | (1 << LessParser.PERC))) !== 0)) {
				{
				this.state = 161;
				this.mathStatement();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mathCharacter(): MathCharacterContext {
		let _localctx: MathCharacterContext = new MathCharacterContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, LessParser.RULE_mathCharacter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LessParser.PLUS) | (1 << LessParser.TIMES) | (1 << LessParser.DIV) | (1 << LessParser.MINUS) | (1 << LessParser.PERC))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mathStatement(): MathStatementContext {
		let _localctx: MathStatementContext = new MathStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, LessParser.RULE_mathStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this.mathCharacter();
			this.state = 167;
			this.commandStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, LessParser.RULE_expression);
		let _la: number;
		try {
			this.state = 190;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 169;
				this.measurement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 170;
				this.identifier();
				this.state = 171;
				this.match(LessParser.IMPORTANT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 173;
				this.identifier();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 174;
				this.identifier();
				this.state = 175;
				this.match(LessParser.LPAREN);
				this.state = 177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LessParser.InterpolationStart || _la === LessParser.AT || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (LessParser.UrlStart - 37)) | (1 << (LessParser.Identifier - 37)) | (1 << (LessParser.StringLiteral - 37)) | (1 << (LessParser.Number - 37)) | (1 << (LessParser.Color - 37)))) !== 0)) {
					{
					this.state = 176;
					this.values();
					}
				}

				this.state = 179;
				this.match(LessParser.RPAREN);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 181;
				this.match(LessParser.Color);
				this.state = 182;
				this.match(LessParser.IMPORTANT);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 183;
				this.match(LessParser.Color);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 184;
				this.match(LessParser.StringLiteral);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 185;
				this.url();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 186;
				this.variableName();
				this.state = 187;
				this.match(LessParser.IMPORTANT);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 189;
				this.variableName();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public func(): FuncContext {
		let _localctx: FuncContext = new FuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, LessParser.RULE_func);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this.match(LessParser.FUNCTION_NAME);
			this.state = 193;
			this.match(LessParser.LPAREN);
			this.state = 195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LessParser.InterpolationStart || _la === LessParser.AT || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (LessParser.UrlStart - 37)) | (1 << (LessParser.Identifier - 37)) | (1 << (LessParser.StringLiteral - 37)) | (1 << (LessParser.Number - 37)) | (1 << (LessParser.Color - 37)))) !== 0)) {
				{
				this.state = 194;
				this.values();
				}
			}

			this.state = 197;
			this.match(LessParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditions(): ConditionsContext {
		let _localctx: ConditionsContext = new ConditionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, LessParser.RULE_conditions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 199;
			this.condition();
			this.state = 204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LessParser.COMMA || _la === LessParser.AND) {
				{
				{
				this.state = 200;
				_la = this._input.LA(1);
				if (!(_la === LessParser.COMMA || _la === LessParser.AND)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 201;
				this.condition();
				}
				}
				this.state = 206;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public condition(): ConditionContext {
		let _localctx: ConditionContext = new ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, LessParser.RULE_condition);
		try {
			this.state = 216;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LessParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 207;
				this.match(LessParser.LPAREN);
				this.state = 208;
				this.conditionStatement();
				this.state = 209;
				this.match(LessParser.RPAREN);
				}
				break;
			case LessParser.NOT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 211;
				this.match(LessParser.NOT);
				this.state = 212;
				this.match(LessParser.LPAREN);
				this.state = 213;
				this.conditionStatement();
				this.state = 214;
				this.match(LessParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionStatement(): ConditionStatementContext {
		let _localctx: ConditionStatementContext = new ConditionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, LessParser.RULE_conditionStatement);
		let _la: number;
		try {
			this.state = 223;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 218;
				this.commandStatement();
				this.state = 219;
				_la = this._input.LA(1);
				if (!(((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (LessParser.GT - 12)) | (1 << (LessParser.LT - 12)) | (1 << (LessParser.GTEQ - 12)) | (1 << (LessParser.LTEQ - 12)) | (1 << (LessParser.EQ - 12)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 220;
				this.commandStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 222;
				this.commandStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, LessParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 225;
			this.variableName();
			this.state = 226;
			this.match(LessParser.COLON);
			this.state = 227;
			this.values();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDeclaration(): ImportDeclarationContext {
		let _localctx: ImportDeclarationContext = new ImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, LessParser.RULE_importDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			this.match(LessParser.IMPORT);
			this.state = 241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LessParser.LPAREN) {
				{
				this.state = 230;
				this.match(LessParser.LPAREN);
				{
				this.state = 231;
				this.importOption();
				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LessParser.COMMA) {
					{
					{
					this.state = 232;
					this.match(LessParser.COMMA);
					this.state = 233;
					this.importOption();
					}
					}
					this.state = 238;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				this.state = 239;
				this.match(LessParser.RPAREN);
				}
			}

			this.state = 243;
			this.referenceUrl();
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LessParser.Identifier) {
				{
				this.state = 244;
				this.mediaTypes();
				}
			}

			this.state = 247;
			this.match(LessParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importOption(): ImportOptionContext {
		let _localctx: ImportOptionContext = new ImportOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, LessParser.RULE_importOption);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 249;
			_la = this._input.LA(1);
			if (!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (LessParser.REFERENCE - 45)) | (1 << (LessParser.INLINE - 45)) | (1 << (LessParser.LESS - 45)) | (1 << (LessParser.CSS - 45)) | (1 << (LessParser.ONCE - 45)) | (1 << (LessParser.MULTIPLE - 45)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public referenceUrl(): ReferenceUrlContext {
		let _localctx: ReferenceUrlContext = new ReferenceUrlContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, LessParser.RULE_referenceUrl);
		try {
			this.state = 255;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LessParser.StringLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 251;
				this.match(LessParser.StringLiteral);
				}
				break;
			case LessParser.UrlStart:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 252;
				this.match(LessParser.UrlStart);
				this.state = 253;
				this.match(LessParser.Url);
				this.state = 254;
				this.match(LessParser.UrlEnd);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mediaTypes(): MediaTypesContext {
		let _localctx: MediaTypesContext = new MediaTypesContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, LessParser.RULE_mediaTypes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 257;
			this.match(LessParser.Identifier);
			this.state = 262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LessParser.COMMA) {
				{
				{
				this.state = 258;
				this.match(LessParser.COMMA);
				this.state = 259;
				this.match(LessParser.Identifier);
				}
				}
				this.state = 264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleset(): RulesetContext {
		let _localctx: RulesetContext = new RulesetContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, LessParser.RULE_ruleset);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 265;
			this.selectors();
			this.state = 266;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, LessParser.RULE_block);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 268;
			this.match(LessParser.BlockStart);
			this.state = 272;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 269;
					this.blockItem();
					}
					}
				}
				this.state = 274;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			}
			this.state = 276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LessParser.InterpolationStart || _la === LessParser.Identifier) {
				{
				this.state = 275;
				this.property();
				}
			}

			this.state = 278;
			this.match(LessParser.BlockEnd);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockItem(): BlockItemContext {
		let _localctx: BlockItemContext = new BlockItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, LessParser.RULE_blockItem);
		try {
			this.state = 285;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 280;
				this.property();
				this.state = 281;
				this.match(LessParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 283;
				this.statement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 284;
				this.mixinReference();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mixinDefinition(): MixinDefinitionContext {
		let _localctx: MixinDefinitionContext = new MixinDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, LessParser.RULE_mixinDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			this.selectors();
			this.state = 288;
			this.match(LessParser.LPAREN);
			this.state = 297;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LessParser.AT) {
				{
				this.state = 289;
				this.mixinDefinitionParam();
				this.state = 294;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LessParser.SEMI) {
					{
					{
					this.state = 290;
					this.match(LessParser.SEMI);
					this.state = 291;
					this.mixinDefinitionParam();
					}
					}
					this.state = 296;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LessParser.Ellipsis) {
				{
				this.state = 299;
				this.match(LessParser.Ellipsis);
				}
			}

			this.state = 302;
			this.match(LessParser.RPAREN);
			this.state = 304;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LessParser.WHEN) {
				{
				this.state = 303;
				this.mixinGuard();
				}
			}

			this.state = 306;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mixinGuard(): MixinGuardContext {
		let _localctx: MixinGuardContext = new MixinGuardContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, LessParser.RULE_mixinGuard);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 308;
			this.match(LessParser.WHEN);
			this.state = 309;
			this.conditions();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mixinDefinitionParam(): MixinDefinitionParamContext {
		let _localctx: MixinDefinitionParamContext = new MixinDefinitionParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, LessParser.RULE_mixinDefinitionParam);
		try {
			this.state = 313;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 311;
				this.variableName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 312;
				this.variableDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mixinReference(): MixinReferenceContext {
		let _localctx: MixinReferenceContext = new MixinReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, LessParser.RULE_mixinReference);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 315;
			this.selector();
			this.state = 316;
			this.match(LessParser.LPAREN);
			this.state = 318;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LessParser.InterpolationStart || _la === LessParser.AT || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (LessParser.UrlStart - 37)) | (1 << (LessParser.Identifier - 37)) | (1 << (LessParser.StringLiteral - 37)) | (1 << (LessParser.Number - 37)) | (1 << (LessParser.Color - 37)))) !== 0)) {
				{
				this.state = 317;
				this.values();
				}
			}

			this.state = 320;
			this.match(LessParser.RPAREN);
			this.state = 322;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LessParser.IMPORTANT) {
				{
				this.state = 321;
				this.match(LessParser.IMPORTANT);
				}
			}

			this.state = 324;
			this.match(LessParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectors(): SelectorsContext {
		let _localctx: SelectorsContext = new SelectorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, LessParser.RULE_selectors);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 326;
			this.selector();
			this.state = 331;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LessParser.COMMA) {
				{
				{
				this.state = 327;
				this.match(LessParser.COMMA);
				this.state = 328;
				this.selector();
				}
				}
				this.state = 333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selector(): SelectorContext {
		let _localctx: SelectorContext = new SelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, LessParser.RULE_selector);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 335;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 334;
					this.element();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 337;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 342;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LessParser.LBRACK) {
				{
				{
				this.state = 339;
				this.attrib();
				}
				}
				this.state = 344;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 346;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LessParser.COLON || _la === LessParser.COLONCOLON) {
				{
				this.state = 345;
				this.pseudo();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attrib(): AttribContext {
		let _localctx: AttribContext = new AttribContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, LessParser.RULE_attrib);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			this.match(LessParser.LBRACK);
			this.state = 349;
			this.match(LessParser.Identifier);
			this.state = 353;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (LessParser.EQ - 33)) | (1 << (LessParser.PIPE_EQ - 33)) | (1 << (LessParser.TILD_EQ - 33)))) !== 0)) {
				{
				this.state = 350;
				this.attribRelate();
				this.state = 351;
				_la = this._input.LA(1);
				if (!(_la === LessParser.Identifier || _la === LessParser.StringLiteral)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 355;
			this.match(LessParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public negation(): NegationContext {
		let _localctx: NegationContext = new NegationContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, LessParser.RULE_negation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 357;
			this.match(LessParser.COLON);
			this.state = 358;
			this.match(LessParser.NOT);
			this.state = 359;
			this.match(LessParser.LPAREN);
			this.state = 361;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LessParser.LBRACK) {
				{
				this.state = 360;
				this.match(LessParser.LBRACK);
				}
			}

			this.state = 363;
			this.selectors();
			this.state = 365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LessParser.RBRACK) {
				{
				this.state = 364;
				this.match(LessParser.RBRACK);
				}
			}

			this.state = 367;
			this.match(LessParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pseudo(): PseudoContext {
		let _localctx: PseudoContext = new PseudoContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, LessParser.RULE_pseudo);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 369;
			_la = this._input.LA(1);
			if (!(_la === LessParser.COLON || _la === LessParser.COLONCOLON)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 370;
			this.match(LessParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, LessParser.RULE_element);
		try {
			this.state = 382;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 372;
				this.selectorPrefix();
				this.state = 373;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 375;
				this.identifier();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 376;
				this.match(LessParser.HASH);
				this.state = 377;
				this.identifier();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 378;
				this.pseudo();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 379;
				this.negation();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 380;
				this.match(LessParser.PARENTREF);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 381;
				this.match(LessParser.TIMES);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectorPrefix(): SelectorPrefixContext {
		let _localctx: SelectorPrefixContext = new SelectorPrefixContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, LessParser.RULE_selectorPrefix);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 384;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LessParser.GT) | (1 << LessParser.TIL) | (1 << LessParser.PLUS))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attribRelate(): AttribRelateContext {
		let _localctx: AttribRelateContext = new AttribRelateContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, LessParser.RULE_attribRelate);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 386;
			_la = this._input.LA(1);
			if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (LessParser.EQ - 33)) | (1 << (LessParser.PIPE_EQ - 33)) | (1 << (LessParser.TILD_EQ - 33)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, LessParser.RULE_identifier);
		let _la: number;
		try {
			this.state = 404;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LessParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 388;
				this.match(LessParser.Identifier);
				this.state = 392;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LessParser.InterpolationStartAfter || _la === LessParser.IdentifierAfter) {
					{
					{
					this.state = 389;
					this.identifierPart();
					}
					}
					this.state = 394;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case LessParser.InterpolationStart:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 395;
				this.match(LessParser.InterpolationStart);
				this.state = 396;
				this.identifierVariableName();
				this.state = 397;
				this.match(LessParser.BlockEnd);
				this.state = 401;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LessParser.InterpolationStartAfter || _la === LessParser.IdentifierAfter) {
					{
					{
					this.state = 398;
					this.identifierPart();
					}
					}
					this.state = 403;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierPart(): IdentifierPartContext {
		let _localctx: IdentifierPartContext = new IdentifierPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, LessParser.RULE_identifierPart);
		try {
			this.state = 411;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LessParser.InterpolationStartAfter:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 406;
				this.match(LessParser.InterpolationStartAfter);
				this.state = 407;
				this.identifierVariableName();
				this.state = 408;
				this.match(LessParser.BlockEnd);
				}
				break;
			case LessParser.IdentifierAfter:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 410;
				this.match(LessParser.IdentifierAfter);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierVariableName(): IdentifierVariableNameContext {
		let _localctx: IdentifierVariableNameContext = new IdentifierVariableNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, LessParser.RULE_identifierVariableName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 413;
			_la = this._input.LA(1);
			if (!(_la === LessParser.Identifier || _la === LessParser.IdentifierAfter)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public property(): PropertyContext {
		let _localctx: PropertyContext = new PropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, LessParser.RULE_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			this.identifier();
			this.state = 416;
			this.match(LessParser.COLON);
			this.state = 417;
			this.values();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public values(): ValuesContext {
		let _localctx: ValuesContext = new ValuesContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, LessParser.RULE_values);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 419;
			this.commandStatement();
			this.state = 424;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LessParser.COMMA) {
				{
				{
				this.state = 420;
				this.match(LessParser.COMMA);
				this.state = 421;
				this.commandStatement();
				}
				}
				this.state = 426;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public url(): UrlContext {
		let _localctx: UrlContext = new UrlContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, LessParser.RULE_url);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 427;
			this.match(LessParser.UrlStart);
			this.state = 428;
			this.match(LessParser.Url);
			this.state = 429;
			this.match(LessParser.UrlEnd);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public measurement(): MeasurementContext {
		let _localctx: MeasurementContext = new MeasurementContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, LessParser.RULE_measurement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 431;
			this.match(LessParser.Number);
			this.state = 433;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LessParser.Unit) {
				{
				this.state = 432;
				this.match(LessParser.Unit);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x91\u01B6\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x03\x02\x07\x02\\\n\x02\f\x02\x0E\x02_\v\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03h\n\x03\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x07\x05q\n\x05\f\x05" +
		"\x0E\x05t\v\x05\x05\x05v\n\x05\x03\x06\x05\x06y\n\x06\x03\x06\x03\x06" +
		"\x03\x06\x07\x06~\n\x06\f\x06\x0E\x06\x81\v\x06\x03\x06\x03\x06\x03\x06" +
		"\x07\x06\x86\n\x06\f\x06\x0E\x06\x89\v\x06\x05\x06\x8B\n\x06\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\b\x03\b\x05\b\x93\n\b\x03\b\x03\b\x03\t\x03\t\x03" +
		"\n\x03\n\x03\n\x03\n\x05\n\x9D\n\n\x03\v\x06\v\xA0\n\v\r\v\x0E\v\xA1\x03" +
		"\v\x05\v\xA5\n\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xB4\n\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x05\x0E\xC1\n\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xC6\n\x0F\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x10\x07\x10\xCD\n\x10\f\x10\x0E\x10\xD0\v" +
		"\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x05\x11\xDB\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12" +
		"\xE2\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x07\x14\xED\n\x14\f\x14\x0E\x14\xF0\v\x14\x03\x14\x03\x14" +
		"\x05\x14\xF4\n\x14\x03\x14\x03\x14\x05\x14\xF8\n\x14\x03\x14\x03\x14\x03" +
		"\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0102\n\x16\x03\x17" +
		"\x03\x17\x03\x17\x07\x17\u0107\n\x17\f\x17\x0E\x17\u010A\v\x17\x03\x18" +
		"\x03\x18\x03\x18\x03\x19\x03\x19\x07\x19\u0111\n\x19\f\x19\x0E\x19\u0114" +
		"\v\x19\x03\x19\x05\x19\u0117\n\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x05\x1A\u0120\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x07\x1B\u0127\n\x1B\f\x1B\x0E\x1B\u012A\v\x1B\x05\x1B\u012C\n" +
		"\x1B\x03\x1B\x05\x1B\u012F\n\x1B\x03\x1B\x03\x1B\x05\x1B\u0133\n\x1B\x03" +
		"\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x05\x1D\u013C\n\x1D" +
		"\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0141\n\x1E\x03\x1E\x03\x1E\x05\x1E\u0145" +
		"\n\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u014C\n\x1F\f\x1F" +
		"\x0E\x1F\u014F\v\x1F\x03 \x06 \u0152\n \r \x0E \u0153\x03 \x07 \u0157" +
		"\n \f \x0E \u015A\v \x03 \x05 \u015D\n \x03!\x03!\x03!\x03!\x03!\x05!" +
		"\u0164\n!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x05\"\u016C\n\"\x03\"\x03" +
		"\"\x05\"\u0170\n\"\x03\"\x03\"\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03" +
		"$\x03$\x03$\x03$\x03$\x03$\x05$\u0181\n$\x03%\x03%\x03&\x03&\x03\'\x03" +
		"\'\x07\'\u0189\n\'\f\'\x0E\'\u018C\v\'\x03\'\x03\'\x03\'\x03\'\x07\'\u0192" +
		"\n\'\f\'\x0E\'\u0195\v\'\x05\'\u0197\n\'\x03(\x03(\x03(\x03(\x03(\x05" +
		"(\u019E\n(\x03)\x03)\x03*\x03*\x03*\x03*\x03+\x03+\x03+\x07+\u01A9\n+" +
		"\f+\x0E+\u01AC\v+\x03,\x03,\x03,\x03,\x03-\x03-\x05-\u01B4\n-\x03-\x02" +
		"\x02\x02.\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02\x02\f\x04" +
		"\x02**66\x03\x02\x1A\x1E\x04\x02\x13\x1377\x06\x02\x0E\x0E\x10\x10 !#" +
		"#\x03\x02/4\x03\x0289\x04\x02\x11\x11\x19\x19\x04\x02\x0E\x0F\x1A\x1A" +
		"\x03\x02#%\x04\x0288\x91\x91\x02\u01C9\x02]\x03\x02\x02\x02\x04g\x03\x02" +
		"\x02\x02\x06i\x03\x02\x02\x02\bu\x03\x02\x02\x02\n\x8A\x03\x02\x02\x02" +
		"\f\x8C\x03\x02\x02\x02\x0E\x8E\x03\x02\x02\x02\x10\x96\x03\x02\x02\x02" +
		"\x12\x9C\x03\x02\x02\x02\x14\x9F\x03\x02\x02\x02\x16\xA6\x03\x02\x02\x02" +
		"\x18\xA8\x03\x02\x02\x02\x1A\xC0\x03\x02\x02\x02\x1C\xC2\x03\x02\x02\x02" +
		"\x1E\xC9\x03\x02\x02\x02 \xDA\x03\x02\x02\x02\"\xE1\x03\x02\x02\x02$\xE3" +
		"\x03\x02\x02\x02&\xE7\x03\x02\x02\x02(\xFB\x03\x02\x02\x02*\u0101\x03" +
		"\x02\x02\x02,\u0103\x03\x02\x02\x02.\u010B\x03\x02\x02\x020\u010E\x03" +
		"\x02\x02\x022\u011F\x03\x02\x02\x024\u0121\x03\x02\x02\x026\u0136\x03" +
		"\x02\x02\x028\u013B\x03\x02\x02\x02:\u013D\x03\x02\x02\x02<\u0148\x03" +
		"\x02\x02\x02>\u0151\x03\x02\x02\x02@\u015E\x03\x02\x02\x02B\u0167\x03" +
		"\x02\x02\x02D\u0173\x03\x02\x02\x02F\u0180\x03\x02\x02\x02H\u0182\x03" +
		"\x02\x02\x02J\u0184\x03\x02\x02\x02L\u0196\x03\x02\x02\x02N\u019D\x03" +
		"\x02\x02\x02P\u019F\x03\x02\x02\x02R\u01A1\x03\x02\x02\x02T\u01A5\x03" +
		"\x02\x02\x02V\u01AD\x03\x02\x02\x02X\u01B1\x03\x02\x02\x02Z\\\x05\x04" +
		"\x03\x02[Z\x03\x02\x02\x02\\_\x03\x02\x02\x02][\x03\x02\x02\x02]^\x03" +
		"\x02\x02\x02^\x03\x03\x02\x02\x02_]\x03\x02\x02\x02`h\x05&\x14\x02ah\x05" +
		".\x18\x02bc\x05$\x13\x02cd\x07\x12\x02\x02dh\x03\x02\x02\x02eh\x054\x1B" +
		"\x02fh\x05\x06\x04\x02g`\x03\x02\x02\x02ga\x03\x02\x02\x02gb\x03\x02\x02" +
		"\x02ge\x03\x02\x02\x02gf\x03\x02\x02\x02h\x05\x03\x02\x02\x02ij\x07)\x02" +
		"\x02jk\x05\b\x05\x02kl\x050\x19\x02l\x07\x03\x02\x02\x02mr\x05\n\x06\x02" +
		"no\x07\x13\x02\x02oq\x05\n\x06\x02pn\x03\x02\x02\x02qt\x03\x02\x02\x02" +
		"rp\x03\x02\x02\x02rs\x03\x02\x02\x02sv\x03\x02\x02\x02tr\x03\x02\x02\x02" +
		"um\x03\x02\x02\x02uv\x03\x02\x02\x02v\t\x03\x02\x02\x02wy\t\x02\x02\x02" +
		"xw\x03\x02\x02\x02xy\x03\x02\x02\x02yz\x03\x02\x02\x02z\x7F\x05\f\x07" +
		"\x02{|\x077\x02\x02|~\x05\x0E\b\x02}{\x03\x02\x02\x02~\x81\x03\x02\x02" +
		"\x02\x7F}\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x8B\x03\x02\x02" +
		"\x02\x81\x7F\x03\x02\x02\x02\x82\x87\x05\x0E\b\x02\x83\x84\x077\x02\x02" +
		"\x84\x86\x05\x0E\b\x02\x85\x83\x03\x02\x02\x02\x86\x89\x03\x02\x02\x02" +
		"\x87\x85\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x8B\x03\x02\x02\x02" +
		"\x89\x87\x03\x02\x02\x02\x8Ax\x03\x02\x02\x02\x8A\x82\x03\x02\x02\x02" +
		"\x8B\v\x03\x02\x02\x02\x8C\x8D\x05L\'\x02\x8D\r\x03\x02\x02\x02\x8E\x8F" +
		"\x07\b\x02\x02\x8F\x92\x05\x10\t\x02\x90\x91\x07\x11\x02\x02\x91\x93\x05" +
		"\x1A\x0E\x02\x92\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x94\x03" +
		"\x02\x02\x02\x94\x95\x07\t\x02\x02\x95\x0F\x03\x02\x02\x02\x96\x97\x05" +
		"L\'\x02\x97\x11\x03\x02\x02\x02\x98\x99\x07\x16\x02\x02\x99\x9D\x05\x12" +
		"\n\x02\x9A\x9B\x07\x16\x02\x02\x9B\x9D\x078\x02\x02\x9C\x98\x03\x02\x02" +
		"\x02\x9C\x9A\x03\x02\x02\x02\x9D\x13\x03\x02\x02\x02\x9E\xA0\x05\x1A\x0E" +
		"\x02\x9F\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\x9F\x03\x02\x02" +
		"\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA4\x03\x02\x02\x02\xA3\xA5\x05\x18\r" +
		"\x02\xA4\xA3\x03\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\x15\x03\x02\x02" +
		"\x02\xA6\xA7\t\x03\x02\x02\xA7\x17\x03\x02\x02\x02\xA8\xA9\x05\x16\f\x02" +
		"\xA9\xAA\x05\x14\v\x02\xAA\x19\x03\x02\x02\x02\xAB\xC1\x05X-\x02\xAC\xAD" +
		"\x05L\'\x02\xAD\xAE\x07,\x02\x02\xAE\xC1\x03\x02\x02\x02\xAF\xC1\x05L" +
		"\'\x02\xB0\xB1\x05L\'\x02\xB1\xB3\x07\b\x02\x02\xB2\xB4\x05T+\x02\xB3" +
		"\xB2\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5" +
		"\xB6\x07\t\x02\x02\xB6\xC1\x03\x02\x02\x02\xB7\xB8\x07;\x02\x02\xB8\xC1" +
		"\x07,\x02\x02\xB9\xC1\x07;\x02\x02\xBA\xC1\x079\x02\x02\xBB\xC1\x05V," +
		"\x02\xBC\xBD\x05\x12\n\x02\xBD\xBE\x07,\x02\x02\xBE\xC1\x03\x02\x02\x02" +
		"\xBF\xC1\x05\x12\n\x02\xC0\xAB\x03\x02\x02\x02\xC0\xAC\x03\x02\x02\x02" +
		"\xC0\xAF\x03\x02\x02\x02\xC0\xB0\x03\x02\x02\x02\xC0\xB7\x03\x02\x02\x02" +
		"\xC0\xB9\x03\x02\x02\x02\xC0\xBA\x03\x02\x02\x02\xC0\xBB\x03\x02\x02\x02" +
		"\xC0\xBC\x03\x02\x02\x02\xC0\xBF\x03\x02\x02\x02\xC1\x1B\x03\x02\x02\x02" +
		"\xC2\xC3\x07?\x02\x02\xC3\xC5\x07\b\x02\x02\xC4\xC6\x05T+\x02\xC5\xC4" +
		"\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC8" +
		"\x07\t\x02\x02\xC8\x1D\x03\x02\x02\x02\xC9\xCE\x05 \x11\x02\xCA\xCB\t" +
		"\x04\x02\x02\xCB\xCD\x05 \x11\x02\xCC\xCA\x03\x02\x02\x02\xCD\xD0\x03" +
		"\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\x1F\x03" +
		"\x02\x02\x02\xD0\xCE\x03\x02\x02\x02\xD1\xD2\x07\b\x02\x02\xD2\xD3\x05" +
		"\"\x12\x02\xD3\xD4\x07\t\x02\x02\xD4\xDB\x03\x02\x02\x02\xD5\xD6\x076" +
		"\x02\x02\xD6\xD7\x07\b\x02\x02\xD7\xD8\x05\"\x12\x02\xD8\xD9\x07\t\x02" +
		"\x02\xD9\xDB\x03\x02\x02\x02\xDA\xD1\x03\x02\x02\x02\xDA\xD5\x03\x02\x02" +
		"\x02\xDB!\x03\x02\x02\x02\xDC\xDD\x05\x14\v\x02\xDD\xDE\t\x05\x02\x02" +
		"\xDE\xDF\x05\x14\v\x02\xDF\xE2\x03\x02\x02\x02\xE0\xE2\x05\x14\v\x02\xE1" +
		"\xDC\x03\x02\x02\x02\xE1\xE0\x03\x02\x02\x02\xE2#\x03\x02\x02\x02\xE3" +
		"\xE4\x05\x12\n\x02\xE4\xE5\x07\x11\x02\x02\xE5\xE6\x05T+\x02\xE6%\x03" +
		"\x02\x02\x02\xE7\xF3\x07(\x02\x02\xE8\xE9\x07\b\x02\x02\xE9\xEE\x05(\x15" +
		"\x02\xEA\xEB\x07\x13\x02\x02\xEB\xED\x05(\x15\x02\xEC\xEA\x03\x02\x02" +
		"\x02\xED\xF0\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEE\xEF\x03\x02\x02" +
		"\x02\xEF\xF1\x03\x02\x02\x02\xF0\xEE\x03\x02\x02\x02\xF1\xF2\x07\t\x02" +
		"\x02\xF2\xF4\x03\x02\x02\x02\xF3\xE8\x03\x02\x02\x02\xF3\xF4\x03\x02\x02" +
		"\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF7\x05*\x16\x02\xF6\xF8\x05,\x17\x02" +
		"\xF7\xF6\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02" +
		"\xF9\xFA\x07\x12\x02\x02\xFA\'\x03\x02\x02\x02\xFB\xFC\t\x06\x02\x02\xFC" +
		")\x03\x02\x02\x02\xFD\u0102\x079\x02\x02\xFE\xFF\x07\'\x02\x02\xFF\u0100" +
		"\x07\x8E\x02\x02\u0100\u0102\x07\x8D\x02\x02\u0101\xFD\x03\x02\x02\x02" +
		"\u0101\xFE\x03\x02\x02\x02\u0102+\x03\x02\x02\x02\u0103\u0108\x078\x02" +
		"\x02\u0104\u0105\x07\x13\x02\x02\u0105\u0107\x078\x02\x02\u0106\u0104" +
		"\x03\x02\x02\x02\u0107\u010A\x03\x02\x02\x02\u0108\u0106\x03\x02\x02\x02" +
		"\u0108\u0109\x03\x02\x02\x02\u0109-\x03\x02\x02\x02\u010A\u0108\x03\x02" +
		"\x02\x02\u010B\u010C\x05<\x1F\x02\u010C\u010D\x050\x19\x02\u010D/\x03" +
		"\x02\x02\x02\u010E\u0112\x07\n\x02\x02\u010F\u0111\x052\x1A\x02\u0110" +
		"\u010F\x03\x02\x02\x02\u0111\u0114\x03\x02\x02\x02\u0112\u0110\x03\x02" +
		"\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\u0116\x03\x02\x02\x02\u0114" +
		"\u0112\x03\x02\x02\x02\u0115\u0117\x05R*\x02\u0116\u0115\x03\x02\x02\x02" +
		"\u0116\u0117\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u0119\x07" +
		"\v\x02\x02\u01191\x03\x02\x02\x02\u011A\u011B\x05R*\x02\u011B\u011C\x07" +
		"\x12\x02\x02\u011C\u0120\x03\x02\x02\x02\u011D\u0120\x05\x04\x03\x02\u011E" +
		"\u0120\x05:\x1E\x02\u011F\u011A\x03\x02\x02\x02\u011F\u011D\x03\x02\x02" +
		"\x02\u011F\u011E\x03\x02\x02\x02\u01203\x03\x02\x02\x02\u0121\u0122\x05" +
		"<\x1F\x02\u0122\u012B\x07\b\x02\x02\u0123\u0128\x058\x1D\x02\u0124\u0125" +
		"\x07\x12\x02\x02\u0125\u0127\x058\x1D\x02\u0126\u0124\x03\x02\x02\x02" +
		"\u0127\u012A\x03\x02\x02\x02\u0128\u0126\x03\x02\x02\x02\u0128\u0129\x03" +
		"\x02\x02\x02\u0129\u012C\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012B" +
		"\u0123\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C\u012E\x03\x02" +
		"\x02\x02\u012D\u012F\x07\x06\x02\x02\u012E\u012D\x03\x02\x02\x02\u012E" +
		"\u012F\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130\u0132\x07\t\x02" +
		"\x02\u0131\u0133\x056\x1C\x02\u0132\u0131\x03\x02\x02\x02\u0132\u0133" +
		"\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0135\x050\x19\x02" +
		"\u01355\x03\x02\x02\x02\u0136\u0137\x075\x02\x02\u0137\u0138\x05\x1E\x10" +
		"\x02\u01387\x03\x02\x02\x02\u0139\u013C\x05\x12\n\x02\u013A\u013C\x05" +
		"$\x13\x02\u013B\u0139\x03\x02\x02\x02\u013B\u013A\x03\x02\x02\x02\u013C" +
		"9\x03\x02\x02\x02\u013D\u013E\x05> \x02\u013E\u0140\x07\b\x02\x02\u013F" +
		"\u0141\x05T+\x02\u0140\u013F\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02" +
		"\u0141\u0142\x03\x02\x02\x02\u0142\u0144\x07\t\x02\x02\u0143\u0145\x07" +
		",\x02\x02\u0144\u0143\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145" +
		"\u0146\x03\x02\x02\x02\u0146\u0147\x07\x12\x02\x02\u0147;\x03\x02\x02" +
		"\x02\u0148\u014D\x05> \x02\u0149\u014A\x07\x13\x02\x02\u014A\u014C\x05" +
		"> \x02\u014B\u0149\x03\x02\x02\x02\u014C\u014F\x03\x02\x02\x02\u014D\u014B" +
		"\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E=\x03\x02\x02\x02\u014F" +
		"\u014D\x03\x02\x02\x02\u0150\u0152\x05F$\x02\u0151\u0150\x03\x02\x02\x02" +
		"\u0152\u0153\x03\x02\x02\x02\u0153\u0151\x03\x02\x02\x02\u0153\u0154\x03" +
		"\x02\x02\x02\u0154\u0158\x03\x02\x02\x02\u0155\u0157\x05@!\x02\u0156\u0155" +
		"\x03\x02\x02\x02\u0157\u015A\x03\x02\x02\x02\u0158\u0156\x03\x02\x02\x02" +
		"\u0158\u0159\x03\x02\x02\x02\u0159\u015C\x03\x02\x02\x02\u015A\u0158\x03" +
		"\x02\x02\x02\u015B\u015D\x05D#\x02\u015C\u015B\x03\x02\x02\x02\u015C\u015D" +
		"\x03\x02\x02\x02\u015D?\x03\x02\x02\x02\u015E\u015F\x07\f\x02\x02\u015F" +
		"\u0163\x078\x02\x02\u0160\u0161\x05J&\x02\u0161\u0162\t\x07\x02\x02\u0162" +
		"\u0164\x03\x02\x02\x02\u0163\u0160\x03\x02\x02\x02\u0163\u0164\x03\x02" +
		"\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0166\x07\r\x02\x02\u0166A" +
		"\x03\x02\x02\x02\u0167\u0168\x07\x11\x02\x02\u0168\u0169\x076\x02\x02" +
		"\u0169\u016B\x07\b\x02\x02\u016A\u016C\x07\f\x02\x02\u016B\u016A\x03\x02" +
		"\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D" +
		"\u016F\x05<\x1F\x02\u016E\u0170\x07\r\x02\x02\u016F\u016E\x03\x02\x02" +
		"\x02\u016F\u0170\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171\u0172" +
		"\x07\t\x02\x02\u0172C\x03\x02\x02\x02\u0173\u0174\t\b\x02\x02\u0174\u0175" +
		"\x078\x02\x02\u0175E\x03\x02\x02\x02\u0176\u0177\x05H%\x02\u0177\u0178" +
		"\x05L\'\x02\u0178\u0181\x03\x02\x02\x02\u0179\u0181\x05L\'\x02\u017A\u017B" +
		"\x07\x18\x02\x02\u017B\u0181\x05L\'\x02\u017C\u0181\x05D#\x02\u017D\u0181" +
		"\x05B\"\x02\u017E\u0181\x07\x17\x02\x02\u017F\u0181\x07\x1B\x02\x02\u0180" +
		"\u0176\x03\x02\x02\x02\u0180\u0179\x03\x02\x02\x02\u0180\u017A\x03\x02" +
		"\x02\x02\u0180\u017C\x03\x02\x02\x02\u0180\u017D\x03\x02\x02\x02\u0180" +
		"\u017E\x03\x02\x02\x02\u0180\u017F\x03\x02\x02\x02\u0181G\x03\x02\x02" +
		"\x02\u0182\u0183\t\t\x02\x02\u0183I\x03\x02\x02\x02\u0184\u0185\t\n\x02" +
		"\x02\u0185K\x03\x02\x02\x02\u0186\u018A\x078\x02\x02\u0187\u0189\x05N" +
		"(\x02\u0188\u0187\x03\x02\x02\x02\u0189\u018C\x03\x02\x02\x02\u018A\u0188" +
		"\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B\u0197\x03\x02\x02\x02" +
		"\u018C\u018A\x03\x02\x02\x02\u018D\u018E\x07\x07\x02\x02\u018E\u018F\x05" +
		"P)\x02\u018F\u0193\x07\v\x02\x02\u0190\u0192\x05N(\x02\u0191\u0190\x03" +
		"\x02\x02\x02\u0192\u0195\x03\x02\x02\x02\u0193\u0191\x03\x02\x02\x02\u0193" +
		"\u0194\x03\x02\x02\x02\u0194\u0197\x03\x02\x02\x02\u0195\u0193\x03\x02" +
		"\x02\x02\u0196\u0186\x03\x02\x02\x02\u0196\u018D\x03\x02\x02\x02\u0197" +
		"M\x03\x02\x02\x02\u0198\u0199\x07\x90\x02\x02\u0199\u019A\x05P)\x02\u019A" +
		"\u019B\x07\v\x02\x02\u019B\u019E\x03\x02\x02\x02\u019C\u019E\x07\x91\x02" +
		"\x02\u019D\u0198\x03\x02\x02\x02\u019D\u019C\x03\x02\x02\x02\u019EO\x03" +
		"\x02\x02\x02\u019F\u01A0\t\v\x02\x02\u01A0Q\x03\x02\x02\x02\u01A1\u01A2" +
		"\x05L\'\x02\u01A2\u01A3\x07\x11\x02\x02\u01A3\u01A4\x05T+\x02\u01A4S\x03" +
		"\x02\x02\x02\u01A5\u01AA\x05\x14\v\x02\u01A6\u01A7\x07\x13\x02\x02\u01A7" +
		"\u01A9\x05\x14\v\x02\u01A8\u01A6\x03\x02\x02\x02\u01A9\u01AC\x03\x02\x02" +
		"\x02\u01AA\u01A8\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02\u01ABU\x03" +
		"\x02\x02\x02\u01AC\u01AA\x03\x02\x02\x02\u01AD\u01AE\x07\'\x02\x02\u01AE" +
		"\u01AF\x07\x8E\x02\x02\u01AF\u01B0\x07\x8D\x02\x02\u01B0W\x03\x02\x02" +
		"\x02\u01B1\u01B3\x07:\x02\x02\u01B2\u01B4\x07\x05\x02\x02\u01B3\u01B2" +
		"\x03\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4Y\x03\x02\x02\x021]" +
		"grux\x7F\x87\x8A\x92\x9C\xA1\xA4\xB3\xC0\xC5\xCE\xDA\xE1\xEE\xF3\xF7\u0101" +
		"\u0108\u0112\u0116\u011F\u0128\u012B\u012E\u0132\u013B\u0140\u0144\u014D" +
		"\u0153\u0158\u015C\u0163\u016B\u016F\u0180\u018A\u0193\u0196\u019D\u01AA" +
		"\u01B3";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LessParser.__ATN) {
			LessParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(LessParser._serializedATN));
		}

		return LessParser.__ATN;
	}

}

export class StylesheetContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_stylesheet; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterStylesheet) {
			listener.enterStylesheet(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitStylesheet) {
			listener.exitStylesheet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitStylesheet) {
			return visitor.visitStylesheet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public importDeclaration(): ImportDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ImportDeclarationContext);
	}
	public ruleset(): RulesetContext | undefined {
		return this.tryGetRuleContext(0, RulesetContext);
	}
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(LessParser.SEMI, 0); }
	public mixinDefinition(): MixinDefinitionContext | undefined {
		return this.tryGetRuleContext(0, MixinDefinitionContext);
	}
	public media(): MediaContext | undefined {
		return this.tryGetRuleContext(0, MediaContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_statement; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MediaContext extends ParserRuleContext {
	public MEDIA(): TerminalNode { return this.getToken(LessParser.MEDIA, 0); }
	public mediaQueryList(): MediaQueryListContext {
		return this.getRuleContext(0, MediaQueryListContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_media; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterMedia) {
			listener.enterMedia(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitMedia) {
			listener.exitMedia(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitMedia) {
			return visitor.visitMedia(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MediaQueryListContext extends ParserRuleContext {
	public mediaQuery(): MediaQueryContext[];
	public mediaQuery(i: number): MediaQueryContext;
	public mediaQuery(i?: number): MediaQueryContext | MediaQueryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MediaQueryContext);
		} else {
			return this.getRuleContext(i, MediaQueryContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LessParser.COMMA);
		} else {
			return this.getToken(LessParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_mediaQueryList; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterMediaQueryList) {
			listener.enterMediaQueryList(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitMediaQueryList) {
			listener.exitMediaQueryList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitMediaQueryList) {
			return visitor.visitMediaQueryList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MediaQueryContext extends ParserRuleContext {
	public mediaType(): MediaTypeContext | undefined {
		return this.tryGetRuleContext(0, MediaTypeContext);
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LessParser.AND);
		} else {
			return this.getToken(LessParser.AND, i);
		}
	}
	public mediaExpression(): MediaExpressionContext[];
	public mediaExpression(i: number): MediaExpressionContext;
	public mediaExpression(i?: number): MediaExpressionContext | MediaExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MediaExpressionContext);
		} else {
			return this.getRuleContext(i, MediaExpressionContext);
		}
	}
	public MEDIAONLY(): TerminalNode | undefined { return this.tryGetToken(LessParser.MEDIAONLY, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(LessParser.NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_mediaQuery; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterMediaQuery) {
			listener.enterMediaQuery(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitMediaQuery) {
			listener.exitMediaQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitMediaQuery) {
			return visitor.visitMediaQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MediaTypeContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_mediaType; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterMediaType) {
			listener.enterMediaType(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitMediaType) {
			listener.exitMediaType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitMediaType) {
			return visitor.visitMediaType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MediaExpressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(LessParser.LPAREN, 0); }
	public mediaFeature(): MediaFeatureContext {
		return this.getRuleContext(0, MediaFeatureContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(LessParser.RPAREN, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(LessParser.COLON, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_mediaExpression; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterMediaExpression) {
			listener.enterMediaExpression(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitMediaExpression) {
			listener.exitMediaExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitMediaExpression) {
			return visitor.visitMediaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MediaFeatureContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_mediaFeature; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterMediaFeature) {
			listener.enterMediaFeature(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitMediaFeature) {
			listener.exitMediaFeature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitMediaFeature) {
			return visitor.visitMediaFeature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableNameContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(LessParser.AT, 0); }
	public variableName(): VariableNameContext | undefined {
		return this.tryGetRuleContext(0, VariableNameContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(LessParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_variableName; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterVariableName) {
			listener.enterVariableName(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitVariableName) {
			listener.exitVariableName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitVariableName) {
			return visitor.visitVariableName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommandStatementContext extends ParserRuleContext {
	public mathStatement(): MathStatementContext | undefined {
		return this.tryGetRuleContext(0, MathStatementContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_commandStatement; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterCommandStatement) {
			listener.enterCommandStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitCommandStatement) {
			listener.exitCommandStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitCommandStatement) {
			return visitor.visitCommandStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MathCharacterContext extends ParserRuleContext {
	public TIMES(): TerminalNode | undefined { return this.tryGetToken(LessParser.TIMES, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(LessParser.PLUS, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(LessParser.DIV, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(LessParser.MINUS, 0); }
	public PERC(): TerminalNode | undefined { return this.tryGetToken(LessParser.PERC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_mathCharacter; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterMathCharacter) {
			listener.enterMathCharacter(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitMathCharacter) {
			listener.exitMathCharacter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitMathCharacter) {
			return visitor.visitMathCharacter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MathStatementContext extends ParserRuleContext {
	public mathCharacter(): MathCharacterContext {
		return this.getRuleContext(0, MathCharacterContext);
	}
	public commandStatement(): CommandStatementContext {
		return this.getRuleContext(0, CommandStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_mathStatement; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterMathStatement) {
			listener.enterMathStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitMathStatement) {
			listener.exitMathStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitMathStatement) {
			return visitor.visitMathStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public measurement(): MeasurementContext | undefined {
		return this.tryGetRuleContext(0, MeasurementContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public IMPORTANT(): TerminalNode | undefined { return this.tryGetToken(LessParser.IMPORTANT, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(LessParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(LessParser.RPAREN, 0); }
	public values(): ValuesContext | undefined {
		return this.tryGetRuleContext(0, ValuesContext);
	}
	public Color(): TerminalNode | undefined { return this.tryGetToken(LessParser.Color, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(LessParser.StringLiteral, 0); }
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public variableName(): VariableNameContext | undefined {
		return this.tryGetRuleContext(0, VariableNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_expression; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncContext extends ParserRuleContext {
	public FUNCTION_NAME(): TerminalNode { return this.getToken(LessParser.FUNCTION_NAME, 0); }
	public LPAREN(): TerminalNode { return this.getToken(LessParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(LessParser.RPAREN, 0); }
	public values(): ValuesContext | undefined {
		return this.tryGetRuleContext(0, ValuesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_func; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterFunc) {
			listener.enterFunc(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitFunc) {
			listener.exitFunc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitFunc) {
			return visitor.visitFunc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionsContext extends ParserRuleContext {
	public condition(): ConditionContext[];
	public condition(i: number): ConditionContext;
	public condition(i?: number): ConditionContext | ConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionContext);
		} else {
			return this.getRuleContext(i, ConditionContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LessParser.AND);
		} else {
			return this.getToken(LessParser.AND, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LessParser.COMMA);
		} else {
			return this.getToken(LessParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_conditions; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterConditions) {
			listener.enterConditions(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitConditions) {
			listener.exitConditions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitConditions) {
			return visitor.visitConditions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(LessParser.LPAREN, 0); }
	public conditionStatement(): ConditionStatementContext {
		return this.getRuleContext(0, ConditionStatementContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(LessParser.RPAREN, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(LessParser.NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_condition; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterCondition) {
			listener.enterCondition(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitCondition) {
			listener.exitCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitCondition) {
			return visitor.visitCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionStatementContext extends ParserRuleContext {
	public commandStatement(): CommandStatementContext[];
	public commandStatement(i: number): CommandStatementContext;
	public commandStatement(i?: number): CommandStatementContext | CommandStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommandStatementContext);
		} else {
			return this.getRuleContext(i, CommandStatementContext);
		}
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(LessParser.EQ, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(LessParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(LessParser.GT, 0); }
	public GTEQ(): TerminalNode | undefined { return this.tryGetToken(LessParser.GTEQ, 0); }
	public LTEQ(): TerminalNode | undefined { return this.tryGetToken(LessParser.LTEQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_conditionStatement; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterConditionStatement) {
			listener.enterConditionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitConditionStatement) {
			listener.exitConditionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitConditionStatement) {
			return visitor.visitConditionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public variableName(): VariableNameContext {
		return this.getRuleContext(0, VariableNameContext);
	}
	public COLON(): TerminalNode { return this.getToken(LessParser.COLON, 0); }
	public values(): ValuesContext {
		return this.getRuleContext(0, ValuesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(LessParser.IMPORT, 0); }
	public referenceUrl(): ReferenceUrlContext {
		return this.getRuleContext(0, ReferenceUrlContext);
	}
	public SEMI(): TerminalNode { return this.getToken(LessParser.SEMI, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(LessParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(LessParser.RPAREN, 0); }
	public mediaTypes(): MediaTypesContext | undefined {
		return this.tryGetRuleContext(0, MediaTypesContext);
	}
	public importOption(): ImportOptionContext[];
	public importOption(i: number): ImportOptionContext;
	public importOption(i?: number): ImportOptionContext | ImportOptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportOptionContext);
		} else {
			return this.getRuleContext(i, ImportOptionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LessParser.COMMA);
		} else {
			return this.getToken(LessParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_importDeclaration; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterImportDeclaration) {
			listener.enterImportDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitImportDeclaration) {
			listener.exitImportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitImportDeclaration) {
			return visitor.visitImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportOptionContext extends ParserRuleContext {
	public REFERENCE(): TerminalNode | undefined { return this.tryGetToken(LessParser.REFERENCE, 0); }
	public INLINE(): TerminalNode | undefined { return this.tryGetToken(LessParser.INLINE, 0); }
	public LESS(): TerminalNode | undefined { return this.tryGetToken(LessParser.LESS, 0); }
	public CSS(): TerminalNode | undefined { return this.tryGetToken(LessParser.CSS, 0); }
	public ONCE(): TerminalNode | undefined { return this.tryGetToken(LessParser.ONCE, 0); }
	public MULTIPLE(): TerminalNode | undefined { return this.tryGetToken(LessParser.MULTIPLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_importOption; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterImportOption) {
			listener.enterImportOption(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitImportOption) {
			listener.exitImportOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitImportOption) {
			return visitor.visitImportOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReferenceUrlContext extends ParserRuleContext {
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(LessParser.StringLiteral, 0); }
	public UrlStart(): TerminalNode | undefined { return this.tryGetToken(LessParser.UrlStart, 0); }
	public Url(): TerminalNode | undefined { return this.tryGetToken(LessParser.Url, 0); }
	public UrlEnd(): TerminalNode | undefined { return this.tryGetToken(LessParser.UrlEnd, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_referenceUrl; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterReferenceUrl) {
			listener.enterReferenceUrl(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitReferenceUrl) {
			listener.exitReferenceUrl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitReferenceUrl) {
			return visitor.visitReferenceUrl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MediaTypesContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LessParser.Identifier);
		} else {
			return this.getToken(LessParser.Identifier, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LessParser.COMMA);
		} else {
			return this.getToken(LessParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_mediaTypes; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterMediaTypes) {
			listener.enterMediaTypes(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitMediaTypes) {
			listener.exitMediaTypes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitMediaTypes) {
			return visitor.visitMediaTypes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RulesetContext extends ParserRuleContext {
	public selectors(): SelectorsContext {
		return this.getRuleContext(0, SelectorsContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_ruleset; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterRuleset) {
			listener.enterRuleset(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitRuleset) {
			listener.exitRuleset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitRuleset) {
			return visitor.visitRuleset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public BlockStart(): TerminalNode { return this.getToken(LessParser.BlockStart, 0); }
	public BlockEnd(): TerminalNode { return this.getToken(LessParser.BlockEnd, 0); }
	public blockItem(): BlockItemContext[];
	public blockItem(i: number): BlockItemContext;
	public blockItem(i?: number): BlockItemContext | BlockItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockItemContext);
		} else {
			return this.getRuleContext(i, BlockItemContext);
		}
	}
	public property(): PropertyContext | undefined {
		return this.tryGetRuleContext(0, PropertyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_block; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockItemContext extends ParserRuleContext {
	public property(): PropertyContext | undefined {
		return this.tryGetRuleContext(0, PropertyContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(LessParser.SEMI, 0); }
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public mixinReference(): MixinReferenceContext | undefined {
		return this.tryGetRuleContext(0, MixinReferenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_blockItem; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterBlockItem) {
			listener.enterBlockItem(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitBlockItem) {
			listener.exitBlockItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitBlockItem) {
			return visitor.visitBlockItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MixinDefinitionContext extends ParserRuleContext {
	public selectors(): SelectorsContext {
		return this.getRuleContext(0, SelectorsContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(LessParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(LessParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public mixinDefinitionParam(): MixinDefinitionParamContext[];
	public mixinDefinitionParam(i: number): MixinDefinitionParamContext;
	public mixinDefinitionParam(i?: number): MixinDefinitionParamContext | MixinDefinitionParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MixinDefinitionParamContext);
		} else {
			return this.getRuleContext(i, MixinDefinitionParamContext);
		}
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(LessParser.Ellipsis, 0); }
	public mixinGuard(): MixinGuardContext | undefined {
		return this.tryGetRuleContext(0, MixinGuardContext);
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LessParser.SEMI);
		} else {
			return this.getToken(LessParser.SEMI, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_mixinDefinition; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterMixinDefinition) {
			listener.enterMixinDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitMixinDefinition) {
			listener.exitMixinDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitMixinDefinition) {
			return visitor.visitMixinDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MixinGuardContext extends ParserRuleContext {
	public WHEN(): TerminalNode { return this.getToken(LessParser.WHEN, 0); }
	public conditions(): ConditionsContext {
		return this.getRuleContext(0, ConditionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_mixinGuard; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterMixinGuard) {
			listener.enterMixinGuard(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitMixinGuard) {
			listener.exitMixinGuard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitMixinGuard) {
			return visitor.visitMixinGuard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MixinDefinitionParamContext extends ParserRuleContext {
	public variableName(): VariableNameContext | undefined {
		return this.tryGetRuleContext(0, VariableNameContext);
	}
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_mixinDefinitionParam; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterMixinDefinitionParam) {
			listener.enterMixinDefinitionParam(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitMixinDefinitionParam) {
			listener.exitMixinDefinitionParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitMixinDefinitionParam) {
			return visitor.visitMixinDefinitionParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MixinReferenceContext extends ParserRuleContext {
	public selector(): SelectorContext {
		return this.getRuleContext(0, SelectorContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(LessParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(LessParser.RPAREN, 0); }
	public SEMI(): TerminalNode { return this.getToken(LessParser.SEMI, 0); }
	public values(): ValuesContext | undefined {
		return this.tryGetRuleContext(0, ValuesContext);
	}
	public IMPORTANT(): TerminalNode | undefined { return this.tryGetToken(LessParser.IMPORTANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_mixinReference; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterMixinReference) {
			listener.enterMixinReference(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitMixinReference) {
			listener.exitMixinReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitMixinReference) {
			return visitor.visitMixinReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectorsContext extends ParserRuleContext {
	public selector(): SelectorContext[];
	public selector(i: number): SelectorContext;
	public selector(i?: number): SelectorContext | SelectorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectorContext);
		} else {
			return this.getRuleContext(i, SelectorContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LessParser.COMMA);
		} else {
			return this.getToken(LessParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_selectors; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterSelectors) {
			listener.enterSelectors(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitSelectors) {
			listener.exitSelectors(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitSelectors) {
			return visitor.visitSelectors(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectorContext extends ParserRuleContext {
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	public attrib(): AttribContext[];
	public attrib(i: number): AttribContext;
	public attrib(i?: number): AttribContext | AttribContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttribContext);
		} else {
			return this.getRuleContext(i, AttribContext);
		}
	}
	public pseudo(): PseudoContext | undefined {
		return this.tryGetRuleContext(0, PseudoContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_selector; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterSelector) {
			listener.enterSelector(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitSelector) {
			listener.exitSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitSelector) {
			return visitor.visitSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttribContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(LessParser.LBRACK, 0); }
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LessParser.Identifier);
		} else {
			return this.getToken(LessParser.Identifier, i);
		}
	}
	public RBRACK(): TerminalNode { return this.getToken(LessParser.RBRACK, 0); }
	public attribRelate(): AttribRelateContext | undefined {
		return this.tryGetRuleContext(0, AttribRelateContext);
	}
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(LessParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_attrib; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterAttrib) {
			listener.enterAttrib(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitAttrib) {
			listener.exitAttrib(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitAttrib) {
			return visitor.visitAttrib(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NegationContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(LessParser.COLON, 0); }
	public NOT(): TerminalNode { return this.getToken(LessParser.NOT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(LessParser.LPAREN, 0); }
	public selectors(): SelectorsContext {
		return this.getRuleContext(0, SelectorsContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(LessParser.RPAREN, 0); }
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(LessParser.LBRACK, 0); }
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(LessParser.RBRACK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_negation; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterNegation) {
			listener.enterNegation(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitNegation) {
			listener.exitNegation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitNegation) {
			return visitor.visitNegation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PseudoContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(LessParser.Identifier, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(LessParser.COLON, 0); }
	public COLONCOLON(): TerminalNode | undefined { return this.tryGetToken(LessParser.COLONCOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_pseudo; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterPseudo) {
			listener.enterPseudo(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitPseudo) {
			listener.exitPseudo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitPseudo) {
			return visitor.visitPseudo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public selectorPrefix(): SelectorPrefixContext | undefined {
		return this.tryGetRuleContext(0, SelectorPrefixContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public HASH(): TerminalNode | undefined { return this.tryGetToken(LessParser.HASH, 0); }
	public pseudo(): PseudoContext | undefined {
		return this.tryGetRuleContext(0, PseudoContext);
	}
	public negation(): NegationContext | undefined {
		return this.tryGetRuleContext(0, NegationContext);
	}
	public PARENTREF(): TerminalNode | undefined { return this.tryGetToken(LessParser.PARENTREF, 0); }
	public TIMES(): TerminalNode | undefined { return this.tryGetToken(LessParser.TIMES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_element; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitElement) {
			return visitor.visitElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectorPrefixContext extends ParserRuleContext {
	public GT(): TerminalNode | undefined { return this.tryGetToken(LessParser.GT, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(LessParser.PLUS, 0); }
	public TIL(): TerminalNode | undefined { return this.tryGetToken(LessParser.TIL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_selectorPrefix; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterSelectorPrefix) {
			listener.enterSelectorPrefix(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitSelectorPrefix) {
			listener.exitSelectorPrefix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitSelectorPrefix) {
			return visitor.visitSelectorPrefix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttribRelateContext extends ParserRuleContext {
	public EQ(): TerminalNode | undefined { return this.tryGetToken(LessParser.EQ, 0); }
	public TILD_EQ(): TerminalNode | undefined { return this.tryGetToken(LessParser.TILD_EQ, 0); }
	public PIPE_EQ(): TerminalNode | undefined { return this.tryGetToken(LessParser.PIPE_EQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_attribRelate; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterAttribRelate) {
			listener.enterAttribRelate(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitAttribRelate) {
			listener.exitAttribRelate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitAttribRelate) {
			return visitor.visitAttribRelate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(LessParser.Identifier, 0); }
	public identifierPart(): IdentifierPartContext[];
	public identifierPart(i: number): IdentifierPartContext;
	public identifierPart(i?: number): IdentifierPartContext | IdentifierPartContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierPartContext);
		} else {
			return this.getRuleContext(i, IdentifierPartContext);
		}
	}
	public InterpolationStart(): TerminalNode | undefined { return this.tryGetToken(LessParser.InterpolationStart, 0); }
	public identifierVariableName(): IdentifierVariableNameContext | undefined {
		return this.tryGetRuleContext(0, IdentifierVariableNameContext);
	}
	public BlockEnd(): TerminalNode | undefined { return this.tryGetToken(LessParser.BlockEnd, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_identifier; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierPartContext extends ParserRuleContext {
	public InterpolationStartAfter(): TerminalNode | undefined { return this.tryGetToken(LessParser.InterpolationStartAfter, 0); }
	public identifierVariableName(): IdentifierVariableNameContext | undefined {
		return this.tryGetRuleContext(0, IdentifierVariableNameContext);
	}
	public BlockEnd(): TerminalNode | undefined { return this.tryGetToken(LessParser.BlockEnd, 0); }
	public IdentifierAfter(): TerminalNode | undefined { return this.tryGetToken(LessParser.IdentifierAfter, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_identifierPart; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterIdentifierPart) {
			listener.enterIdentifierPart(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitIdentifierPart) {
			listener.exitIdentifierPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitIdentifierPart) {
			return visitor.visitIdentifierPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierVariableNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(LessParser.Identifier, 0); }
	public IdentifierAfter(): TerminalNode | undefined { return this.tryGetToken(LessParser.IdentifierAfter, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_identifierVariableName; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterIdentifierVariableName) {
			listener.enterIdentifierVariableName(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitIdentifierVariableName) {
			listener.exitIdentifierVariableName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitIdentifierVariableName) {
			return visitor.visitIdentifierVariableName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(LessParser.COLON, 0); }
	public values(): ValuesContext {
		return this.getRuleContext(0, ValuesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_property; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterProperty) {
			listener.enterProperty(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitProperty) {
			listener.exitProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitProperty) {
			return visitor.visitProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValuesContext extends ParserRuleContext {
	public commandStatement(): CommandStatementContext[];
	public commandStatement(i: number): CommandStatementContext;
	public commandStatement(i?: number): CommandStatementContext | CommandStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommandStatementContext);
		} else {
			return this.getRuleContext(i, CommandStatementContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LessParser.COMMA);
		} else {
			return this.getToken(LessParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_values; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterValues) {
			listener.enterValues(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitValues) {
			listener.exitValues(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitValues) {
			return visitor.visitValues(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UrlContext extends ParserRuleContext {
	public UrlStart(): TerminalNode { return this.getToken(LessParser.UrlStart, 0); }
	public Url(): TerminalNode { return this.getToken(LessParser.Url, 0); }
	public UrlEnd(): TerminalNode { return this.getToken(LessParser.UrlEnd, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_url; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterUrl) {
			listener.enterUrl(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitUrl) {
			listener.exitUrl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitUrl) {
			return visitor.visitUrl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MeasurementContext extends ParserRuleContext {
	public Number(): TerminalNode { return this.getToken(LessParser.Number, 0); }
	public Unit(): TerminalNode | undefined { return this.tryGetToken(LessParser.Unit, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LessParser.RULE_measurement; }
	// @Override
	public enterRule(listener: LessParserListener): void {
		if (listener.enterMeasurement) {
			listener.enterMeasurement(this);
		}
	}
	// @Override
	public exitRule(listener: LessParserListener): void {
		if (listener.exitMeasurement) {
			listener.exitMeasurement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LessParserVisitor<Result>): Result {
		if (visitor.visitMeasurement) {
			return visitor.visitMeasurement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


