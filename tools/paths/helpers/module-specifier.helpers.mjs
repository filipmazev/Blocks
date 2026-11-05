import ts from 'typescript';

/** Collect module strings without changing ordinary strings, comments, or resource URLs. */
export function getModuleSpecifiers(source, filename) {
  const ast = ts.createSourceFile(filename, source, ts.ScriptTarget.Latest, true);
  const specifiers = [];
  const visit = (node) => {
    let literal;

    if (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) {
      literal = node.moduleSpecifier;
    } else if (ts.isImportTypeNode(node) && ts.isLiteralTypeNode(node.argument)) {
      literal = node.argument.literal;
    } else if (ts.isExternalModuleReference(node)) {
      literal = node.expression;
    } else if (
      ts.isCallExpression(node) &&
      (node.expression.kind === ts.SyntaxKind.ImportKeyword || (ts.isIdentifier(node.expression) && node.expression.text === 'require'))
    ) {
      literal = node.arguments[0];
    }

    if (literal && ts.isStringLiteralLike(literal)) {
      specifiers.push({ value: literal.text, start: literal.getStart(ast) + 1, end: literal.getEnd() - 1 });
    }

    ts.forEachChild(node, visit);
  };

  visit(ast);

  return specifiers;
}
