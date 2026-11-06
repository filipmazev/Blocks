/** Derives theme-selector metadata and swatches from the same palette roles used by the Sass theme engine. */
export function createThemePalettes(definitions, palettes) {
  return Object.entries(definitions).map(([id, definition]) => {
    const order = definition['preview-order'] ?? ['brand', 'accent'];

    if (!/^[a-z][a-z0-9-]+$/.test(id) || !definition.label || order.length !== 2) throw new Error(`Invalid theme palette definition: ${id}`);

    const colors = order.map((role) => {
      const palette = palettes[definition[role]];

      if (!['brand', 'accent'].includes(role) || !palette?.['500']) throw new Error(`Unknown ${role} palette for ${id}.`);

      return palette['500'];
    });

    return { id, label: definition.label, className: `theme-${id}`, colors };
  });
}
