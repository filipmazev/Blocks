import { TagColor } from '../types/tag.types';
import { ITagPalette } from '../interfaces/itag-palette.interface';

export const TAG_PALETTES: Readonly<Record<TagColor, ITagPalette>> = {
  primary: {
    text: 'var(--bx-text-brand)',
    fill: 'var(--bx-primary)',
    onFill: 'var(--bx-on-primary)',
    tonal: 'var(--bx-primary-subtle)',
    border: 'var(--bx-border-brand)'
  },
  accent: {
    text: 'var(--bx-text-accent)',
    fill: 'var(--bx-accent)',
    onFill: 'var(--bx-on-accent)',
    tonal: 'var(--bx-accent-subtle)',
    border: 'var(--bx-border-accent)'
  },
  neutral: {
    text: 'var(--bx-text-primary)',
    fill: 'var(--bx-bg-element-active)',
    onFill: 'var(--bx-text-primary)',
    tonal: 'var(--bx-bg-element)',
    border: 'var(--bx-border-strong)'
  },
  success: {
    text: 'var(--bx-text-success)',
    fill: 'var(--bx-bg-success)',
    onFill: 'var(--bx-text-success)',
    tonal: 'var(--bx-bg-success-subtle)',
    border: 'var(--bx-border-success)'
  },
  danger: {
    text: 'var(--bx-text-danger)',
    fill: 'var(--bx-bg-danger)',
    onFill: 'var(--bx-text-danger)',
    tonal: 'var(--bx-bg-danger-subtle)',
    border: 'var(--bx-border-danger)'
  },
  info: {
    text: 'var(--bx-text-info)',
    fill: 'var(--bx-bg-info)',
    onFill: 'var(--bx-text-info)',
    tonal: 'var(--bx-bg-info-subtle)',
    border: 'var(--bx-border-info)'
  },
  warn: {
    text: 'var(--bx-text-warn)',
    fill: 'var(--bx-bg-warn)',
    onFill: 'var(--bx-text-warn)',
    tonal: 'var(--bx-bg-warn-subtle)',
    border: 'var(--bx-border-warn)'
  }
};
