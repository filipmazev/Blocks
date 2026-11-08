/** Browseable families of emitted CSS variables and component customization properties. */
export type CssTokenCategory = 'colors' | 'spacing' | 'radii' | 'shadows' | 'borders' | 'layers' | 'effects' | 'components' | 'other';

/** The visual sample appropriate to a variable's supported role. */
export type CssTokenKind = 'color' | 'spacing' | 'radius' | 'shadow' | 'number' | 'value';

/** Where a variable becomes available; local/runtime values must not be assumed to exist on the document root. */
export type CssTokenScope = 'global' | 'theme' | 'local' | 'runtime';
