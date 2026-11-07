import { defaultIfEmpty, firstValueFrom, fromEvent, isObservable, takeUntil } from 'rxjs';

import type { IStepDefinition } from '@navigation/interfaces/istep-definition.interface';
import type { IStepperTransitionContext } from '@navigation/interfaces/istepper-transition-context.interface';
import type { StepperGuard } from '@navigation/types/stepper.types';

/**
 * Reads current form validity without introducing a second form model.
 * @param step - Step metadata whose explicit valid value overrides its form validity.
 * @returns Whether forward navigation is valid, excluding busy and server-error steps.
 */
export function isStepValid(step: IStepDefinition): boolean {
  const valid = step.valid ?? (typeof step.validation?.valid === 'function' ? step.validation.valid() : step.validation?.valid) ?? true;

  return valid && !isStepPending(step) && !step.error;
}

/**
 * Reads external loading and form asynchronous-validation state.
 * @param step - Step metadata with an optional structural form state.
 */
export function isStepPending(step: IStepDefinition): boolean {
  return !!step.loading || !!(typeof step.validation?.pending === 'function' ? step.validation.pending() : step.validation?.pending);
}

/**
 * Runs an application guard, unsubscribing observables and releasing pending state on cancellation.
 * @param guard - Optional guard; omission permits the transition.
 * @param context - Snapshot containing the cooperative abort signal.
 * @returns The first guard result; empty observables and cancelled operations refuse navigation.
 */
export async function runStepperGuard(guard: StepperGuard | undefined, context: IStepperTransitionContext): Promise<boolean> {
  if (context.signal.aborted) return false;

  if (!guard) return true;

  const result = guard(context);

  if (typeof result === 'boolean') return result;

  const promise = isObservable(result) ? firstValueFrom(result.pipe(takeUntil(fromEvent(context.signal, 'abort')), defaultIfEmpty(false))) : result;

  return new Promise<boolean>((resolve, reject) => {
    const abort = (): void => resolve(false);

    context.signal.addEventListener('abort', abort, { once: true });
    promise.then(resolve, reject).finally(() => context.signal.removeEventListener('abort', abort));

    if (context.signal.aborted) abort();
  });
}
