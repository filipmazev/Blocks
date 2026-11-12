import type { INaturalKeywords } from '@core/interfaces/inatural-keywords.interface';
import type { INaturalLanguageContext } from '@core/interfaces/inatural-language-context.interface';
import type { IParseResult, IsoDate, IsoTime } from '@core/types/date-time.types';

import { addDays, addMonths, addYears, startOfWeek, weekday } from './civil-date.helpers';
import { parseTimeParts, serializeTime } from './date-time-format.helpers';

/**
 * Parse a natural-language date, optionally with a time of day.
 *
 * Supported expressions cover relative days, weekdays, weeks, months, years and simple times in English, Spanish, French and German. Unsupported input
 * returns an explicit `'unsupported'` error instead of guessing.
 *
 * @param text - User input to interpret.
 * @param context - Deterministic clock, locale, calendar and week conventions.
 */
export function parseNaturalDateTime(text: string, context: INaturalLanguageContext): IParseResult<{ date: IsoDate; time: IsoTime | null }> {
  const normalized = text.trim().toLocaleLowerCase();

  if (!normalized) return { value: null, error: 'empty', message: 'The value is empty.' };

  const split = splitTimeExpression(normalized, context.locale);

  if (split.timeResult && split.timeResult.value === null) return { value: null, error: split.timeResult.error, message: split.timeResult.message };

  const dateResult = parseNaturalDateExpression(split.dateText, context);

  if (dateResult.value === null) return { value: null, error: dateResult.error, message: dateResult.message };

  return { value: { date: dateResult.value, time: split.timeResult?.value ?? null }, error: null, message: null };
}

/**
 * Parse a natural-language date into a canonical date.
 *
 * @param text - User input to interpret.
 * @param context - Deterministic clock, locale, calendar and week conventions.
 */
export function parseNaturalDate(text: string, context: INaturalLanguageContext): IParseResult<IsoDate> {
  const normalized = text.trim().toLocaleLowerCase();

  if (!normalized) return { value: null, error: 'empty', message: 'The value is empty.' };

  return parseNaturalDateExpression(normalized, context);
}

//#region Helpers

function parseNaturalDateExpression(text: string, context: INaturalLanguageContext): IParseResult<IsoDate> {
  const keywords = keywordsFor(text);
  const today = localToday(context);
  const tokens = text.split(/\s+/).filter(Boolean);

  if (!text) return { value: null, error: 'empty', message: 'The value is empty.' };

  for (const token of tokens) {
    if (keywords.today.includes(token)) return ok(today);

    if (keywords.tomorrow.includes(token)) return ok(addDays(today, 1));

    if (keywords.yesterday.includes(token)) return ok(addDays(today, -1));
  }

  const relatives = parseRelativeExpression(tokens, today);

  if (relatives) return ok(relatives);

  const weekdayMatch = parseWeekdayExpression(tokens, context, today);

  if (weekdayMatch) return ok(weekdayMatch);

  const periodMatch = parsePeriodExpression(tokens, context, today);

  if (periodMatch) return ok(periodMatch);

  return { value: null, error: 'unsupported', message: `The expression '${text}' is not supported for locale '${context.locale}'.` };
}

function parseRelativeExpression(tokens: readonly string[], today: IsoDate): IsoDate | null {
  const joinIndex = tokens.findIndex((token) => ['in', 'en', 'dans'].includes(token));

  if (joinIndex === -1 || tokens.length < joinIndex + 3) return null;

  const amount = Number(tokens[joinIndex + 1]);
  const unit = tokens[joinIndex + 2];

  if (!Number.isFinite(amount) || amount < 0) return null;

  if (['day', 'days', 'día', 'dias', 'días', 'jour', 'jours', 'tag', 'tage', 'tagen'].includes(unit)) return addDays(today, amount);

  if (['week', 'weeks', 'semana', 'semanas', 'semaine', 'semaines', 'woche', 'wochen'].includes(unit)) return addDays(today, amount * 7);

  if (['month', 'months', 'mes', 'meses', 'mois', 'monat', 'monate', 'monaten'].includes(unit)) return addMonths(today, amount);

  if (['year', 'years', 'año', 'años', 'an', 'ans', 'année', 'années', 'jahr', 'jahre', 'jahren'].includes(unit)) return addYears(today, amount);

  return null;
}

function parseWeekdayExpression(tokens: readonly string[], context: INaturalLanguageContext, today: IsoDate): IsoDate | null {
  const longNames = context.calendar.getWeekdayNames(context.locale, 'long').map((name) => name.toLocaleLowerCase());
  const shortNames = context.calendar.getWeekdayNames(context.locale, 'short').map((name) => name.toLocaleLowerCase());
  const index = tokens.findIndex((token) => longNames.includes(token) || shortNames.includes(token));

  if (index === -1) return null;

  const target = Math.max(0, longNames.indexOf(tokens[index]));
  const direction = tokens
    .slice(0, index)
    .some((token) => ['last', 'previous', 'último', 'anterior', 'dernier', 'précédent', 'letzten', 'vorherigen'].includes(token))
    ? -1
    : 1;
  const current = weekday(today);
  const delta = direction > 0 ? (target - current + 7) % 7 || 7 : -((current - target + 7) % 7 || 7);

  return addDays(today, delta);
}

function parsePeriodExpression(tokens: readonly string[], context: INaturalLanguageContext, today: IsoDate): IsoDate | null {
  const keywords = keywordsFor(tokens.join(' '));
  const joined = tokens.join(' ');
  const matches = (group: readonly string[]): boolean => group.some((phrase) => joined.includes(phrase));

  if (matches(keywords.thisWeek)) return startOfWeek(today, context.weekStartsOn);

  if (matches(keywords.nextWeek)) return addDays(startOfWeek(today, context.weekStartsOn), 7);

  if (matches(keywords.lastWeek)) return addDays(startOfWeek(today, context.weekStartsOn), -7);

  if (matches(keywords.nextMonth)) return addMonths(today, 1);

  if (matches(keywords.lastMonth)) return addMonths(today, -1);

  if (matches(keywords.nextYear)) return addYears(today, 1);

  if (matches(keywords.lastYear)) return addYears(today, -1);

  return null;
}

function splitTimeExpression(text: string, _locale: string): { dateText: string; timeResult: IParseResult<IsoTime> | null } {
  const timeMatch = /(?:^|\s)(?:at|a las|à|um|om)?\s*(\d{1,2})(?::(\d{2}))?\s*(am|pm|a\.m\.|p\.m\.)?$/.exec(text);

  if (!timeMatch) return { dateText: text, timeResult: null };

  const dateText = text.slice(0, timeMatch.index).trim();
  const hour = Number(timeMatch[1]);
  const minute = Number(timeMatch[2] ?? 0);
  const period = timeMatch[3]?.replaceAll('.', '');

  if (!dateText) return { dateText: '', timeResult: null };

  if (minute > 59) return { dateText, timeResult: { value: null, error: 'range', message: 'The minute is outside the valid range.' } };

  let hour24 = hour;

  if (period) {
    if (hour < 1 || hour > 12) return { dateText, timeResult: { value: null, error: 'range', message: 'The hour is not valid for a 12-hour clock.' } };

    hour24 = hour === 12 ? (period.startsWith('p') ? 12 : 0) : period.startsWith('p') ? hour + 12 : hour;
  } else if (hour > 23) {
    return { dateText, timeResult: { value: null, error: 'range', message: 'The hour is outside the valid range.' } };
  }

  const key = `${hour24}:${minute}`;
  const parsed = parseTimeParts(key);

  if (!parsed) return { dateText, timeResult: { value: null, error: 'format', message: 'The time could not be parsed.' } };

  return { dateText, timeResult: { value: serializeTime(parsed, 'minute'), error: null, message: null } };
}

function keywordsFor(text: string): INaturalKeywords {
  const isSpanish = /[ñáéíóú¿¡]|\b(hoy|mañana|ayer|lunes|martes|miércoles|jueves|viernes|sábado|domingo)\b/.test(text);
  const isFrench = /[àâçéèêëîïôûùüÿœ]|\b(aujourd'hui|demain|hier|lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche)\b/.test(text);
  const isGerman = /[äöüß]|\b(heute|morgen|gestern|montag|dienstag|mittwoch|donnerstag|freitag|samstag|sonntag)\b/.test(text);
  const at = isSpanish ? ['a', 'a las'] : isFrench ? ['à'] : isGerman ? ['um'] : ['at'];

  if (isSpanish) {
    return {
      today: ['hoy'],
      tomorrow: ['mañana'],
      yesterday: ['ayer'],
      next: ['próximo', 'próxima', 'siguiente'],
      last: ['último', 'última', 'anterior'],
      thisWeek: ['esta semana'],
      nextWeek: ['próxima semana', 'semana que viene'],
      lastWeek: ['semana pasada', 'última semana'],
      nextMonth: ['próximo mes', 'mes que viene'],
      lastMonth: ['mes pasado', 'último mes'],
      nextYear: ['próximo año', 'año que viene'],
      lastYear: ['año pasado', 'último año'],
      inDays: ['días'],
      inWeeks: ['semanas'],
      inMonths: ['meses'],
      inYears: ['años'],
      at
    };
  }

  if (isFrench) {
    return {
      today: ["aujourd'hui"],
      tomorrow: ['demain'],
      yesterday: ['hier'],
      next: ['prochain', 'prochaine', 'suivant', 'suivante'],
      last: ['dernier', 'dernière'],
      thisWeek: ['cette semaine'],
      nextWeek: ['semaine prochaine', 'semaine suivante'],
      lastWeek: ['semaine dernière', 'semaine passée'],
      nextMonth: ['mois prochain', 'mois suivant'],
      lastMonth: ['mois dernier', 'mois passé'],
      nextYear: ['année prochaine', 'année suivante'],
      lastYear: ['année dernière', 'année passée'],
      inDays: ['jours'],
      inWeeks: ['semaines'],
      inMonths: ['mois'],
      inYears: ['ans', 'années'],
      at
    };
  }

  if (isGerman) {
    return {
      today: ['heute'],
      tomorrow: ['morgen'],
      yesterday: ['gestern'],
      next: ['nächsten', 'nächste', 'nächster'],
      last: ['letzten', 'letzte', 'letzter'],
      thisWeek: ['diese woche'],
      nextWeek: ['nächste woche'],
      lastWeek: ['letzte woche'],
      nextMonth: ['nächsten monat', 'nächster monat'],
      lastMonth: ['letzten monat', 'letzter monat'],
      nextYear: ['nächstes jahr', 'nächsten jahr'],
      lastYear: ['letztes jahr', 'letzten jahr'],
      inDays: ['tage', 'tagen'],
      inWeeks: ['wochen'],
      inMonths: ['monate', 'monaten'],
      inYears: ['jahre', 'jahren'],
      at
    };
  }

  return {
    today: ['today'],
    tomorrow: ['tomorrow'],
    yesterday: ['yesterday'],
    next: ['next'],
    last: ['last', 'previous'],
    thisWeek: ['this week'],
    nextWeek: ['next week'],
    lastWeek: ['last week', 'previous week'],
    nextMonth: ['next month'],
    lastMonth: ['last month', 'previous month'],
    nextYear: ['next year'],
    lastYear: ['last year', 'previous year'],
    inDays: ['days'],
    inWeeks: ['weeks'],
    inMonths: ['months'],
    inYears: ['years'],
    at
  };
}

function localToday(context: INaturalLanguageContext): IsoDate {
  const formatter = new Intl.DateTimeFormat('en-CA', { timeZone: context.timeZone, year: 'numeric', month: '2-digit', day: '2-digit' });
  const parts = formatter.formatToParts(context.now);
  const read = (type: string): string => parts.find((part) => part.type === type)?.value ?? '';

  return `${read('year')}-${read('month')}-${read('day')}`;
}

function ok<T>(value: T): IParseResult<T> {
  return { value, error: null, message: null };
}

//#endregion

export type { INaturalLanguageContext } from '@core/interfaces/inatural-language-context.interface';
