/**
 * Read adjacent JSDoc while allowing intervening ESLint control comments.
 * @param sourceCode - ESLint source and comment-location utilities.
 * @param node - Declaration whose immediately preceding documentation is requested.
 */
export function getDocumentation(sourceCode, node) {
  const comments = sourceCode.getCommentsBefore(node);

  let index = comments.length - 1;

  while (index >= 0 && comments[index].type === 'Line' && /^\s*eslint-(?:disable|enable)/.test(comments[index].value)) index--;

  const comment = comments[index];
  const controls = comments.length - index - 1;

  return comment?.type === 'Block' && comment.value.startsWith('*') && node.loc.start.line - comment.loc.end.line === controls + 1 ? comment : undefined;
}

/**
 * Remove comment decoration without discarding descriptions or tags.
 * @param comment - Optional ESLint JSDoc comment; absence resolves to empty text.
 */
export function getDocumentationText(comment) {
  return comment?.value.replace(/^\s*\*\s?/gm, '').trim() ?? '';
}

/**
 * Require descriptive prose before the first JSDoc tag.
 * @param comment - Optional JSDoc comment whose summary should describe the declaration.
 */
export function hasDescription(comment) {
  return /[a-zA-Z]/.test(
    getDocumentationText(comment)
      .split(/(?:^|\n)\s*@/)[0]
      .trim()
  );
}

/**
 * Read named parameter and generic-parameter descriptions, including optional/rest parameter syntax.
 * @param comment - Optional JSDoc comment containing parameter documentation.
 * @param tag - Parameter tag to collect, either param or typeParam.
 */
export function getDocumentedParameters(comment, tag) {
  const descriptions = new Map();
  const text = getDocumentationText(comment);
  const pattern = /(?:^|\n)\s*@(param|typeParam)\s+([^\n]*(?:\n(?!\s*@)[^\n]*)*)/g;

  for (const match of text.matchAll(pattern)) {
    if (match[1] !== tag) continue;

    const value = match[2].trim().replace(/^\{[^}]*\}\s*/, '');
    const entry = /^(\[[^\]]+\]|\S+)\s+(?:-\s*)?([\s\S]*)$/.exec(value);

    if (entry && /[a-zA-Z]/.test(entry[2])) {
      descriptions.set(
        entry[1]
          .replace(/^\.\.\./, '')
          .replace(/^\[|\]$/g, '')
          .split('=')[0],
        entry[2].trim()
      );
    }
  }

  return descriptions;
}

/**
 * Collect names explicitly exported through file-local export lists.
 * @param program - Parsed ESLint program whose local export specifiers are inspected.
 */
export function getExportedLocalNames(program) {
  return new Set(
    program.body
      .filter((statement) => statement.type === 'ExportNamedDeclaration' && !statement.source)
      .flatMap((statement) => statement.specifiers.map((specifier) => specifier.local.name))
  );
}
