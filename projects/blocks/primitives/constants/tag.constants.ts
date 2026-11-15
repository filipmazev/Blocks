import { ITagPalette } from '@primitives/interfaces/itag-palette.interface';
import { TagColor } from '@primitives/types/tag.types';

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
    readableText: 'var(--bx-text-success-readable, var(--bx-text-success))',
    fill: 'var(--bx-bg-success)',
    onFill: 'var(--bx-on-success, var(--bx-text-success))',
    tonal: 'var(--bx-bg-success-subtle)',
    border: 'var(--bx-border-success)'
  },
  danger: {
    text: 'var(--bx-text-danger)',
    readableText: 'var(--bx-text-danger-readable, var(--bx-text-danger))',
    fill: 'var(--bx-bg-danger)',
    onFill: 'var(--bx-on-danger, var(--bx-text-danger))',
    tonal: 'var(--bx-bg-danger-subtle)',
    border: 'var(--bx-border-danger)'
  },
  info: {
    text: 'var(--bx-text-info)',
    readableText: 'var(--bx-text-info-readable, var(--bx-text-info))',
    fill: 'var(--bx-bg-info)',
    onFill: 'var(--bx-on-info, var(--bx-text-info))',
    tonal: 'var(--bx-bg-info-subtle)',
    border: 'var(--bx-border-info)'
  },
  warn: {
    text: 'var(--bx-text-warn)',
    readableText: 'var(--bx-text-warn-readable, var(--bx-text-warn))',
    fill: 'var(--bx-bg-warn)',
    onFill: 'var(--bx-on-warn, var(--bx-text-warn))',
    tonal: 'var(--bx-bg-warn-subtle)',
    border: 'var(--bx-border-warn)'
  }
};
