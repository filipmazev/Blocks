import type { DemoLanguage } from '@playground/components/screens/library-components/shared/i18n/types/demo-language.types';

export const OVERLAY_DEMO_TRANSLATIONS: Readonly<Record<DemoLanguage, Readonly<Record<string, string>>>> = {
  en: { 'overlay.closeDialog': 'Close dialog', 'overlay.closeToast': 'Close toast' },
  es: { 'overlay.closeDialog': 'Cerrar diálogo', 'overlay.closeToast': 'Cerrar notificación' },
  fr: { 'overlay.closeDialog': 'Fermer la fenêtre', 'overlay.closeToast': 'Fermer la notification' },
  de: { 'overlay.closeDialog': 'Dialog schließen', 'overlay.closeToast': 'Benachrichtigung schließen' }
};
