import type { CssTokenCategory, CssTokenKind } from '@filip.mazev/blocks/core';

export type TokenCatalogCategory = CssTokenCategory | 'pairs' | 'utilities' | 'breakpoints';

export type TokenCatalogKind = CssTokenKind | 'pair' | 'utility' | 'breakpoint';

export type TokenCopyFormat = 'variable' | 'name' | 'hex' | 'rgb' | 'rgba';
