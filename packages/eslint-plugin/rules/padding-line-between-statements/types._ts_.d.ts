/* GENERATED, DO NOT EDIT DIRECTLY */

/* @checksum: 6uKu5Yp4W2 */

export type PaddingType = 'any' | 'never' | 'always'
export type StatementType =
  | (
    | '*'
    | 'block-like'
    | 'exports'
    | 'require'
    | 'directive'
    | 'expression'
    | 'iife'
    | 'multiline-block-like'
    | 'multiline-expression'
    | 'multiline-const'
    | 'multiline-let'
    | 'multiline-var'
    | 'singleline-const'
    | 'singleline-let'
    | 'singleline-var'
    | 'block'
    | 'empty'
    | 'function'
    | 'ts-method'
    | 'break'
    | 'case'
    | 'class'
    | 'const'
    | 'continue'
    | 'debugger'
    | 'default'
    | 'do'
    | 'export'
    | 'for'
    | 'if'
    | 'import'
    | 'let'
    | 'return'
    | 'switch'
    | 'throw'
    | 'try'
    | 'var'
    | 'while'
    | 'with'
    | 'cjs-export'
    | 'cjs-import'
    | 'enum'
    | 'interface'
    | 'type'
    | 'function-overload'
    )
    | [
      (
        | '*'
        | 'block-like'
        | 'exports'
        | 'require'
        | 'directive'
        | 'expression'
        | 'iife'
        | 'multiline-block-like'
        | 'multiline-expression'
        | 'multiline-const'
        | 'multiline-let'
        | 'multiline-var'
        | 'singleline-const'
        | 'singleline-let'
        | 'singleline-var'
        | 'block'
        | 'empty'
        | 'function'
        | 'ts-method'
        | 'break'
        | 'case'
        | 'class'
        | 'const'
        | 'continue'
        | 'debugger'
        | 'default'
        | 'do'
        | 'export'
        | 'for'
        | 'if'
        | 'import'
        | 'let'
        | 'return'
        | 'switch'
        | 'throw'
        | 'try'
        | 'var'
        | 'while'
        | 'with'
        | 'cjs-export'
        | 'cjs-import'
        | 'enum'
        | 'interface'
        | 'type'
        | 'function-overload'
      ),
      ...(
        | '*'
        | 'block-like'
        | 'exports'
        | 'require'
        | 'directive'
        | 'expression'
        | 'iife'
        | 'multiline-block-like'
        | 'multiline-expression'
        | 'multiline-const'
        | 'multiline-let'
        | 'multiline-var'
        | 'singleline-const'
        | 'singleline-let'
        | 'singleline-var'
        | 'block'
        | 'empty'
        | 'function'
        | 'ts-method'
        | 'break'
        | 'case'
        | 'class'
        | 'const'
        | 'continue'
        | 'debugger'
        | 'default'
        | 'do'
        | 'export'
        | 'for'
        | 'if'
        | 'import'
        | 'let'
        | 'return'
        | 'switch'
        | 'throw'
        | 'try'
        | 'var'
        | 'while'
        | 'with'
        | 'cjs-export'
        | 'cjs-import'
        | 'enum'
        | 'interface'
        | 'type'
        | 'function-overload'
      )[],
    ]
export type PaddingLineBetweenStatementsSchema0 = {
  blankLine: PaddingType
  prev: StatementType
  next: StatementType
}[]

export type PaddingLineBetweenStatementsRuleOptions =
  PaddingLineBetweenStatementsSchema0

export type RuleOptions =
  PaddingLineBetweenStatementsRuleOptions
export type MessageIds =
  | 'unexpectedBlankLine'
  | 'expectedBlankLine'
