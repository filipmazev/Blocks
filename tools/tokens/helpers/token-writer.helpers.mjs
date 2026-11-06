import ts from 'typescript';

import { formatGeneratedTypeScript } from '../../helpers/generated-typescript.helpers.mjs';

/** Prints data declarations with the TypeScript AST, then applies the repository's lint and formatting rules. */
export async function printTokenConstants(values, target) {
  const factory = ts.factory;
  const contract = Object.hasOwn(values, 'CSS_TOKEN_CATALOG')
    ? { name: 'ICssToken', path: '@core/interfaces/icss-token.interface' }
    : Object.hasOwn(values, 'THEME_PALETTES')
      ? { name: 'IThemingServicePalettesState', path: '@core/interfaces/itheming-service-palettes-state.interface' }
      : undefined;
  const statements = Object.entries(values).map(([name, value]) =>
    factory.createVariableStatement(
      [factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      factory.createVariableDeclarationList(
        [
          factory.createVariableDeclaration(
            name,
            undefined,
            contract
              ? factory.createTypeOperatorNode(ts.SyntaxKind.ReadonlyKeyword, factory.createArrayTypeNode(factory.createTypeReferenceNode(contract.name)))
              : undefined,
            contract ? literal(value) : factory.createAsExpression(literal(value), factory.createTypeReferenceNode('const'))
          )
        ],
        ts.NodeFlags.Const
      )
    )
  );

  if (contract) {
    statements.unshift(
      factory.createImportDeclaration(
        undefined,
        factory.createImportClause(
          true,
          undefined,
          factory.createNamedImports([factory.createImportSpecifier(false, undefined, factory.createIdentifier(contract.name))])
        ),
        factory.createStringLiteral(contract.path)
      )
    );
  }
  const file = ts.createSourceFile(target, '', ts.ScriptTarget.Latest, false, ts.ScriptKind.TS);
  const source = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed }).printFile(factory.updateSourceFile(file, statements));

  const banner = '// Generated from projects/blocks/core/styles and Blocks CSS/TypeScript sources by tools/tokens/generate-tokens.mjs. Do not edit.';

  return formatGeneratedTypeScript(`${banner}\n${source}`, target);
}

/** Converts JSON-shaped token data into syntax nodes without embedding executable TypeScript in strings. */
function literal(value) {
  if (typeof value === 'string') return ts.factory.createStringLiteral(value);
  if (typeof value === 'number') return ts.factory.createNumericLiteral(value);
  if (Array.isArray(value)) return ts.factory.createArrayLiteralExpression(value.map(literal), true);
  if (value && typeof value === 'object') {
    return ts.factory.createObjectLiteralExpression(
      Object.entries(value).map(([key, entry]) => ts.factory.createPropertyAssignment(ts.factory.createStringLiteral(key), literal(entry))),
      true
    );
  }

  throw new Error(`Unsupported token data: ${String(value)}`);
}
