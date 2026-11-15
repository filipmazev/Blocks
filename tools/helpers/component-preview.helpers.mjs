import { parseTemplate, TmplAstElement, TmplAstSwitchBlock } from '@angular/compiler';

/**
 * Collect catalog composition keys and reject renderers that contain no actual library view.
 * @param template - Angular template containing the kind() switch.
 * @param templatePath - Source path used for parser diagnostics.
 * @returns Explicit case keys; recipe-only renderers are registered separately.
 */
export function readPreviewCompositions(template, templatePath) {
  const parsed = parseTemplate(template, templatePath);

  if (parsed.errors?.length) throw new Error(parsed.errors.map((error) => error.toString()).join('\n'));

  const children = (node) => [...(node.children ?? []), ...(node.branches ?? []), ...(node.groups ?? [])];
  const hasLibraryView = (node) =>
    (node instanceof TmplAstElement &&
      (node.name.startsWith('bx-') ||
        node.name === 'app-toast-preview' ||
        node.name === 'app-surface-preview' ||
        [...node.attributes, ...node.inputs].some((attribute) => /^bx(?:[A-Z]|-)/.test(attribute.name)))) ||
    children(node).some(hasLibraryView);
  const kinds = [];
  const visit = (node) => {
    if (node instanceof TmplAstSwitchBlock && node.expression.source === 'kind()') {
      for (const group of node.groups) {
        for (const branch of group.cases) {
          if (!branch.expression) continue;

          const kind = branch.expression.source.replace(/^['"]|['"]$/g, '');

          if (!group.children.some(hasLibraryView)) {
            throw new Error(`Preview ${kind} must render a real Blocks component or directive, not a placeholder illustration.`);
          }

          kinds.push(kind);
        }
      }
    } else {
      children(node).forEach(visit);
    }
  };

  parsed.nodes.forEach(visit);

  return kinds;
}
