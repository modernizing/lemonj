// Generated from lang/LessParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `LessParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface LessParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `LessParser.stylesheet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStylesheet?: (ctx: StylesheetContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.media`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMedia?: (ctx: MediaContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.mediaQueryList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMediaQueryList?: (ctx: MediaQueryListContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.mediaQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMediaQuery?: (ctx: MediaQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.mediaType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMediaType?: (ctx: MediaTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.mediaExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMediaExpression?: (ctx: MediaExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.mediaFeature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMediaFeature?: (ctx: MediaFeatureContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.variableName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableName?: (ctx: VariableNameContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.commandStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommandStatement?: (ctx: CommandStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.mathCharacter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMathCharacter?: (ctx: MathCharacterContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.mathStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMathStatement?: (ctx: MathStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.func`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc?: (ctx: FuncContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.conditions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditions?: (ctx: ConditionsContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.conditionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionStatement?: (ctx: ConditionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.importDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportDeclaration?: (ctx: ImportDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.importOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportOption?: (ctx: ImportOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.referenceUrl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReferenceUrl?: (ctx: ReferenceUrlContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.mediaTypes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMediaTypes?: (ctx: MediaTypesContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.ruleset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleset?: (ctx: RulesetContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.blockItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockItem?: (ctx: BlockItemContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.mixinDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMixinDefinition?: (ctx: MixinDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.mixinGuard`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMixinGuard?: (ctx: MixinGuardContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.mixinDefinitionParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMixinDefinitionParam?: (ctx: MixinDefinitionParamContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.mixinReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMixinReference?: (ctx: MixinReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.selectors`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectors?: (ctx: SelectorsContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.selector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelector?: (ctx: SelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.attrib`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttrib?: (ctx: AttribContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.negation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNegation?: (ctx: NegationContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.pseudo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPseudo?: (ctx: PseudoContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement?: (ctx: ElementContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.selectorPrefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectorPrefix?: (ctx: SelectorPrefixContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.attribRelate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribRelate?: (ctx: AttribRelateContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.identifierPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierPart?: (ctx: IdentifierPartContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.identifierVariableName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierVariableName?: (ctx: IdentifierVariableNameContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.property`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperty?: (ctx: PropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.values`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValues?: (ctx: ValuesContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.url`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUrl?: (ctx: UrlContext) => Result;

	/**
	 * Visit a parse tree produced by `LessParser.measurement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeasurement?: (ctx: MeasurementContext) => Result;
}

