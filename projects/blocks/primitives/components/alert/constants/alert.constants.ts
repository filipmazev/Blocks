import { IconName } from '@filip.mazev/blocks/icons';
import { AlertTone } from '../types/alert.types';
import { TagColor } from '../../tag/types/tag.types';

export const ALERT_COLORS: Readonly<Record<AlertTone, TagColor>> = {
  default: 'neutral',
  info: 'info',
  danger: 'danger',
  warning: 'warn',
  success: 'success'
};

export const ALERT_ICONS: Readonly<Record<AlertTone, IconName>> = {
  default: 'message-square',
  info: 'info',
  danger: 'circle-alert',
  warning: 'triangle-alert',
  success: 'circle-check'
};
