/** Resolve an Angular import through its lexical scope, including aliased and namespace imports. */
export function getAngularImport(sourceCode, expression) {
  if (!expression) {
    return undefined;
  }

  if (expression.type === 'MemberExpression' && !expression.computed) {
    if (expression.property.name === 'required') {
      return getAngularImport(sourceCode, expression.object);
    }

    const definition = getImportDefinition(sourceCode, expression.object);

    if (definition?.node.type === 'ImportNamespaceSpecifier' && /^@angular\//.test(definition.parent.source.value)) {
      return expression.property.name;
    }

    return undefined;
  }

  const definition = getImportDefinition(sourceCode, expression);

  if (definition?.node.type === 'ImportSpecifier' && /^@angular\//.test(definition.parent.source.value)) {
    return definition.node.imported.name;
  }

  return undefined;
}

/** Unwrap syntax which does not change the initializer's purpose. */
export function getInitializerCall(value) {
  while (value && ['TSAsExpression', 'TSSatisfiesExpression', 'TSNonNullExpression'].includes(value.type)) {
    value = value.expression;
  }

  return value?.type === 'CallExpression' ? value : undefined;
}

/** Injected references retain the type inferred from their token, including direct property projections. */
export function isInjectedInitializer(sourceCode, value) {
  if (!value) {
    return false;
  }

  if (['TSAsExpression', 'TSSatisfiesExpression', 'TSNonNullExpression', 'ChainExpression'].includes(value.type)) {
    return isInjectedInitializer(sourceCode, value.expression);
  }

  if (value.type === 'MemberExpression') {
    return isInjectedInitializer(sourceCode, value.object);
  }

  if (value.type === 'CallExpression') {
    return (
      getAngularImport(sourceCode, value.callee) === 'inject' ||
      (value.callee.type === 'MemberExpression' && isInjectedInitializer(sourceCode, value.callee.object))
    );
  }

  return false;
}

function getImportDefinition(sourceCode, identifier) {
  if (identifier?.type !== 'Identifier') {
    return undefined;
  }

  let scope = sourceCode.getScope(identifier);

  while (scope) {
    const variable = scope.set.get(identifier.name);

    if (variable) {
      return variable.defs.find((definition) => definition.type === 'ImportBinding');
    }

    scope = scope.upper;
  }

  return undefined;
}
