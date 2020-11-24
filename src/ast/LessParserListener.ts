// Generated from lang/LessParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { StylesheetContext } from "./LessParser";
import { StatementContext } from "./LessParser";
import { MediaContext } from "./LessParser";
import { MediaQueryListContext } from "./LessParser";
import { MediaQueryContext } from "./LessParser";
import { MediaTypeContext } from "./LessParser";
import { MediaExpressionContext } from "./LessParser";
import { MediaFeatureContext } from "./LessParser";
import { VariableNameContext } from "./LessParser";
import { CommandStatementContext } from "./LessParser";
import { MathCharacterContext } from "./LessParser";
import { MathStatementContext } from "./LessParser";
import { ExpressionContext } from "./LessParser";
import { FuncContext } from "./LessParser";
import { ConditionsContext } from "./LessParser";
import { ConditionContext } from "./LessParser";
import { ConditionStatementContext } from "./LessParser";
import { VariableDeclarationContext } from "./LessParser";
import { ImportDeclarationContext } from "./LessParser";
import { ImportOptionContext } from "./LessParser";
import { ReferenceUrlContext } from "./LessParser";
import { MediaTypesContext } from "./LessParser";
import { RulesetContext } from "./LessParser";
import { BlockContext } from "./LessParser";
import { BlockItemContext } from "./LessParser";
import { MixinDefinitionContext } from "./LessParser";
import { MixinGuardContext } from "./LessParser";
import { MixinDefinitionParamContext } from "./LessParser";
import { MixinReferenceContext } from "./LessParser";
import { SelectorsContext } from "./LessParser";
import { SelectorContext } from "./LessParser";
import { AttribContext } from "./LessParser";
import { NegationContext } from "./LessParser";
import { PseudoContext } from "./LessParser";
import { ElementContext } from "./LessParser";
import { SelectorPrefixContext } from "./LessParser";
import { AttribRelateContext } from "./LessParser";
import { IdentifierContext } from "./LessParser";
import { IdentifierPartContext } from "./LessParser";
import { IdentifierVariableNameContext } from "./LessParser";
import { PropertyContext } from "./LessParser";
import { ValuesContext } from "./LessParser";
import { UrlContext } from "./LessParser";
import { MeasurementContext } from "./LessParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `LessParser`.
 */
export interface LessParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `LessParser.stylesheet`.
	 * @param ctx the parse tree
	 */
	enterStylesheet?: (ctx: StylesheetContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.stylesheet`.
	 * @param ctx the parse tree
	 */
	exitStylesheet?: (ctx: StylesheetContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.media`.
	 * @param ctx the parse tree
	 */
	enterMedia?: (ctx: MediaContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.media`.
	 * @param ctx the parse tree
	 */
	exitMedia?: (ctx: MediaContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.mediaQueryList`.
	 * @param ctx the parse tree
	 */
	enterMediaQueryList?: (ctx: MediaQueryListContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.mediaQueryList`.
	 * @param ctx the parse tree
	 */
	exitMediaQueryList?: (ctx: MediaQueryListContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.mediaQuery`.
	 * @param ctx the parse tree
	 */
	enterMediaQuery?: (ctx: MediaQueryContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.mediaQuery`.
	 * @param ctx the parse tree
	 */
	exitMediaQuery?: (ctx: MediaQueryContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.mediaType`.
	 * @param ctx the parse tree
	 */
	enterMediaType?: (ctx: MediaTypeContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.mediaType`.
	 * @param ctx the parse tree
	 */
	exitMediaType?: (ctx: MediaTypeContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.mediaExpression`.
	 * @param ctx the parse tree
	 */
	enterMediaExpression?: (ctx: MediaExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.mediaExpression`.
	 * @param ctx the parse tree
	 */
	exitMediaExpression?: (ctx: MediaExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.mediaFeature`.
	 * @param ctx the parse tree
	 */
	enterMediaFeature?: (ctx: MediaFeatureContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.mediaFeature`.
	 * @param ctx the parse tree
	 */
	exitMediaFeature?: (ctx: MediaFeatureContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.variableName`.
	 * @param ctx the parse tree
	 */
	enterVariableName?: (ctx: VariableNameContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.variableName`.
	 * @param ctx the parse tree
	 */
	exitVariableName?: (ctx: VariableNameContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.commandStatement`.
	 * @param ctx the parse tree
	 */
	enterCommandStatement?: (ctx: CommandStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.commandStatement`.
	 * @param ctx the parse tree
	 */
	exitCommandStatement?: (ctx: CommandStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.mathCharacter`.
	 * @param ctx the parse tree
	 */
	enterMathCharacter?: (ctx: MathCharacterContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.mathCharacter`.
	 * @param ctx the parse tree
	 */
	exitMathCharacter?: (ctx: MathCharacterContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.mathStatement`.
	 * @param ctx the parse tree
	 */
	enterMathStatement?: (ctx: MathStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.mathStatement`.
	 * @param ctx the parse tree
	 */
	exitMathStatement?: (ctx: MathStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.func`.
	 * @param ctx the parse tree
	 */
	enterFunc?: (ctx: FuncContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.func`.
	 * @param ctx the parse tree
	 */
	exitFunc?: (ctx: FuncContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.conditions`.
	 * @param ctx the parse tree
	 */
	enterConditions?: (ctx: ConditionsContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.conditions`.
	 * @param ctx the parse tree
	 */
	exitConditions?: (ctx: ConditionsContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.conditionStatement`.
	 * @param ctx the parse tree
	 */
	enterConditionStatement?: (ctx: ConditionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.conditionStatement`.
	 * @param ctx the parse tree
	 */
	exitConditionStatement?: (ctx: ConditionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	enterImportDeclaration?: (ctx: ImportDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	exitImportDeclaration?: (ctx: ImportDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.importOption`.
	 * @param ctx the parse tree
	 */
	enterImportOption?: (ctx: ImportOptionContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.importOption`.
	 * @param ctx the parse tree
	 */
	exitImportOption?: (ctx: ImportOptionContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.referenceUrl`.
	 * @param ctx the parse tree
	 */
	enterReferenceUrl?: (ctx: ReferenceUrlContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.referenceUrl`.
	 * @param ctx the parse tree
	 */
	exitReferenceUrl?: (ctx: ReferenceUrlContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.mediaTypes`.
	 * @param ctx the parse tree
	 */
	enterMediaTypes?: (ctx: MediaTypesContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.mediaTypes`.
	 * @param ctx the parse tree
	 */
	exitMediaTypes?: (ctx: MediaTypesContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.ruleset`.
	 * @param ctx the parse tree
	 */
	enterRuleset?: (ctx: RulesetContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.ruleset`.
	 * @param ctx the parse tree
	 */
	exitRuleset?: (ctx: RulesetContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.blockItem`.
	 * @param ctx the parse tree
	 */
	enterBlockItem?: (ctx: BlockItemContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.blockItem`.
	 * @param ctx the parse tree
	 */
	exitBlockItem?: (ctx: BlockItemContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.mixinDefinition`.
	 * @param ctx the parse tree
	 */
	enterMixinDefinition?: (ctx: MixinDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.mixinDefinition`.
	 * @param ctx the parse tree
	 */
	exitMixinDefinition?: (ctx: MixinDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.mixinGuard`.
	 * @param ctx the parse tree
	 */
	enterMixinGuard?: (ctx: MixinGuardContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.mixinGuard`.
	 * @param ctx the parse tree
	 */
	exitMixinGuard?: (ctx: MixinGuardContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.mixinDefinitionParam`.
	 * @param ctx the parse tree
	 */
	enterMixinDefinitionParam?: (ctx: MixinDefinitionParamContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.mixinDefinitionParam`.
	 * @param ctx the parse tree
	 */
	exitMixinDefinitionParam?: (ctx: MixinDefinitionParamContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.mixinReference`.
	 * @param ctx the parse tree
	 */
	enterMixinReference?: (ctx: MixinReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.mixinReference`.
	 * @param ctx the parse tree
	 */
	exitMixinReference?: (ctx: MixinReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.selectors`.
	 * @param ctx the parse tree
	 */
	enterSelectors?: (ctx: SelectorsContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.selectors`.
	 * @param ctx the parse tree
	 */
	exitSelectors?: (ctx: SelectorsContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.selector`.
	 * @param ctx the parse tree
	 */
	enterSelector?: (ctx: SelectorContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.selector`.
	 * @param ctx the parse tree
	 */
	exitSelector?: (ctx: SelectorContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.attrib`.
	 * @param ctx the parse tree
	 */
	enterAttrib?: (ctx: AttribContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.attrib`.
	 * @param ctx the parse tree
	 */
	exitAttrib?: (ctx: AttribContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.negation`.
	 * @param ctx the parse tree
	 */
	enterNegation?: (ctx: NegationContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.negation`.
	 * @param ctx the parse tree
	 */
	exitNegation?: (ctx: NegationContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.pseudo`.
	 * @param ctx the parse tree
	 */
	enterPseudo?: (ctx: PseudoContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.pseudo`.
	 * @param ctx the parse tree
	 */
	exitPseudo?: (ctx: PseudoContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.selectorPrefix`.
	 * @param ctx the parse tree
	 */
	enterSelectorPrefix?: (ctx: SelectorPrefixContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.selectorPrefix`.
	 * @param ctx the parse tree
	 */
	exitSelectorPrefix?: (ctx: SelectorPrefixContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.attribRelate`.
	 * @param ctx the parse tree
	 */
	enterAttribRelate?: (ctx: AttribRelateContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.attribRelate`.
	 * @param ctx the parse tree
	 */
	exitAttribRelate?: (ctx: AttribRelateContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.identifierPart`.
	 * @param ctx the parse tree
	 */
	enterIdentifierPart?: (ctx: IdentifierPartContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.identifierPart`.
	 * @param ctx the parse tree
	 */
	exitIdentifierPart?: (ctx: IdentifierPartContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.identifierVariableName`.
	 * @param ctx the parse tree
	 */
	enterIdentifierVariableName?: (ctx: IdentifierVariableNameContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.identifierVariableName`.
	 * @param ctx the parse tree
	 */
	exitIdentifierVariableName?: (ctx: IdentifierVariableNameContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.property`.
	 * @param ctx the parse tree
	 */
	enterProperty?: (ctx: PropertyContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.property`.
	 * @param ctx the parse tree
	 */
	exitProperty?: (ctx: PropertyContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.values`.
	 * @param ctx the parse tree
	 */
	enterValues?: (ctx: ValuesContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.values`.
	 * @param ctx the parse tree
	 */
	exitValues?: (ctx: ValuesContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.url`.
	 * @param ctx the parse tree
	 */
	enterUrl?: (ctx: UrlContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.url`.
	 * @param ctx the parse tree
	 */
	exitUrl?: (ctx: UrlContext) => void;

	/**
	 * Enter a parse tree produced by `LessParser.measurement`.
	 * @param ctx the parse tree
	 */
	enterMeasurement?: (ctx: MeasurementContext) => void;
	/**
	 * Exit a parse tree produced by `LessParser.measurement`.
	 * @param ctx the parse tree
	 */
	exitMeasurement?: (ctx: MeasurementContext) => void;
}

