import ts from 'typescript';

import { getAngularImport } from './angular.helpers.mjs';

/** Resolve the canonical name of a class-token injection or a direct injected member projection. */
export function getInjectedReferenceName(sourceCode, initializer) {
  const value = unwrap(initializer);

  if (value?.type === 'MemberExpression') {
    const name = getMemberName(value);

    if (name && getRootInjection(sourceCode, value.object)) {
      return { name, source: `the projected member '${name}'` };
    }

    return undefined;
  }

  const call = getRootInjection(sourceCode, value);

  if (!call || value !== call) return undefined;

  const token = unwrap(call.arguments[0]);
  const className = getInjectedClassName(sourceCode, token);

  if (!className) return undefined;

  const name = className.replace(/^[A-Z]+(?=[A-Z][a-z]|$)/, (prefix) => prefix.toLowerCase()).replace(/^[A-Z]/, (initial) => initial.toLowerCase());

  return { name, source: `the injected class '${className}'` };
}

function unwrap(value) {
  while (value && ['TSAsExpression', 'TSSatisfiesExpression', 'TSNonNullExpression', 'ChainExpression'].includes(value.type)) {
    value = value.expression;
  }

  return value;
}

function getRootInjection(sourceCode, value) {
  value = unwrap(value);

  if (value?.type === 'MemberExpression') return getRootInjection(sourceCode, value.object);

  return value?.type === 'CallExpression' && getAngularImport(sourceCode, value.callee) === 'inject' ? value : undefined;
}

function getMemberName(value) {
  if (!value.computed && value.property.type === 'Identifier') return value.property.name;

  return value.computed && value.property.type === 'Literal' && typeof value.property.value === 'string' ? value.property.value : undefined;
}

function getInjectedClassName(sourceCode, token) {
  const services = sourceCode.parserServices;
  const node = token && services?.esTreeNodeToTSNodeMap?.get(token);
  const checker = services?.program?.getTypeChecker();

  if (node && checker) {
    let symbol = checker.getSymbolAtLocation(node);

    if (symbol?.flags & ts.SymbolFlags.Alias) symbol = checker.getAliasedSymbol(symbol);

    const declaration = symbol?.declarations?.find((entry) => ts.isClassDeclaration(entry) || ts.isClassExpression(entry));

    return declaration?.name?.text;
  }

  // Generators lint before a TypeScript project exists. Preserve original import names there too.
  const identifier = token?.type === 'MemberExpression' ? token.object : token;

  if (identifier?.type !== 'Identifier') return undefined;

  let scope = sourceCode.getScope(identifier);

  while (scope) {
    const variable = scope.set.get(identifier.name);

    if (variable) {
      const definition = variable.defs.find((entry) => entry.type === 'ImportBinding' || entry.type === 'ClassName');

      if (token.type === 'Identifier' && definition?.type === 'ClassName') return definition.node.id?.name;

      const name =
        token.type === 'Identifier' && definition?.node.type === 'ImportSpecifier'
          ? definition.node.imported.name
          : token.type === 'MemberExpression' && definition?.node.type === 'ImportNamespaceSpecifier'
            ? getMemberName(token)
            : undefined;

      return name && /^[A-Z][a-zA-Z0-9]*[a-z][a-zA-Z0-9]*$/.test(name) ? name : undefined;
    }

    scope = scope.upper;
  }

  return undefined;
}
