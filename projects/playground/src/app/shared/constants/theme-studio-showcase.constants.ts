import { Color } from '@core/types/tokens.types';

export const STUDIO_COLOR_ROLES = [
  { label: 'Primary', token: '--bx-primary', textColorToken: '--bx-on-primary', description: 'Main actions and brand emphasis.' },
  { label: 'Accent', token: '--bx-accent', textColorToken: '--bx-on-accent', description: 'Highlights and secondary emphasis.' },
  { label: 'Surface', token: '--bx-bg-surface', textColorToken: '--bx-text-primary', description: 'Cards, panels and overlay backgrounds.' }
] as const satisfies readonly {
  readonly label: string;
  readonly token: `--bx-${Color}`;
  readonly textColorToken: `--bx-${Color}`;
  readonly description: string;
}[];
