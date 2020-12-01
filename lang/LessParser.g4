/*
 [The "MIT licence"]
 Copyright (c) 2014 Kyle Lee
 All rights reserved.
*/

parser grammar LessParser;

options
   { tokenVocab = LessLexer; }

stylesheet
   : statement*
   ;

statement
   : importDeclaration
   | ruleset
   | variableDeclaration ';'
   | mixinDefinition
   | media
   ;

// Media queries
// https://www.w3.org/TR/css3-mediaqueries/
media
    : MEDIA mediaQueryList block
    ;

mediaQueryList
    : ( mediaQuery ( COMMA mediaQuery )* )?
    ;

mediaQuery
    : ( MEDIAONLY | NOT )? mediaType ( AND mediaExpression )*
    | mediaExpression ( AND mediaExpression )*
    ;

mediaType
    : identifier
    ;

mediaExpression
    : '(' mediaFeature ( ':' expression )? ')'    // Grammar allofor 'and(', which gets tokenized as Function. In practice, people always insert space before '(' to have it work on Chrome.
    ;

mediaFeature
    : identifier
    ;

variableName
   : AT variableName
   | AT Identifier
   ;

commandStatement
   : (expression +) mathStatement?
   ;

mathCharacter
   : TIMES
   | PLUS
   | DIV
   | MINUS
   | PERC
   ;

mathStatement
   : mathCharacter commandStatement
   ;

expression
   : measurement
   | identifier IMPORTANT
   | identifier
   | identifier LPAREN values? RPAREN
   | Color IMPORTANT
   | Color
   | StringLiteral
   | url
   | variableName IMPORTANT
   | variableName
   ;

func
   : FUNCTION_NAME LPAREN values? RPAREN
   ;

conditions
   : condition ((AND | COMMA) condition)*
   ;

condition
   : LPAREN conditionStatement RPAREN
   | NOT LPAREN conditionStatement RPAREN
   ;

conditionStatement
   : commandStatement (EQ | LT | GT | GTEQ | LTEQ) commandStatement
   | commandStatement
   ;

variableDeclaration
   : variableName COLON values
   ;

//Imports
importDeclaration
   : '@import' (LPAREN (importOption (COMMA importOption)*) RPAREN)? referenceUrl mediaTypes? ';'
   ;

importOption
   : REFERENCE
   | INLINE
   | LESS
   | CSS
   | ONCE
   | MULTIPLE
   ;

referenceUrl
   : StringLiteral
   | UrlStart Url UrlEnd
   ;

mediaTypes
   : (Identifier (COMMA Identifier)*)
   ;

//Rules
ruleset
   : selectors block
   ;

block
   : BlockStart (blockItem)* property? BlockEnd
   ;

blockItem
    : property ';'
    | statement
    | mixinReference
    ;

mixinDefinition
   : selectors LPAREN (mixinDefinitionParam (';' mixinDefinitionParam)*)? Ellipsis? RPAREN mixinGuard? block
   ;

mixinGuard
   : WHEN conditions
   ;

mixinDefinitionParam
   : variableName
   | variableDeclaration
   ;

mixinReference
   : selector LPAREN values? RPAREN IMPORTANT? ';'
   ;

selectors
   : selector (COMMA selector)*
   ;

selector
   : element + attrib* pseudo?
   ;

attrib
   : '[' Identifier (attribRelate (StringLiteral | Identifier))? ']'
   ;

negation
   : COLON NOT LPAREN LBRACK? selectors RBRACK? RPAREN
   ;

pseudo
   : ':' ':'? Identifier
   ;

element
   : selectorPrefix identifier
   | identifier
   | '#' identifier
   | pseudo
   | negation
   | Identifier '[' Identifier ']'
   | PARENTREF
   | '*'
   ;

selectorPrefix
   : (GT | PLUS | TIL)
   ;

attribRelate
   : '='
   | '~='
   | '|='
   ;

identifier
   : Identifier identifierPart*
   | InterpolationStart identifierVariableName BlockEnd identifierPart*
   ;

identifierPart
   : InterpolationStartAfter identifierVariableName BlockEnd
   | IdentifierAfter
   ;

identifierVariableName
   : (Identifier | IdentifierAfter)
   ;

property
   : identifier COLON values
   ;

values
   : commandStatement (COMMA commandStatement)*
   ;

url
   : UrlStart Url UrlEnd
   ;

measurement
   : Number Unit?
   ;
