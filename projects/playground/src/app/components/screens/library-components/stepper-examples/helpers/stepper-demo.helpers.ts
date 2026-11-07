import type { IStepperTransitionContext } from '@filip.mazev/blocks/navigation';

/**
 * Simulates an application-owned request and releases its timer on workflow cancellation.
 * @param context - Cooperative cancellation context from the stepper.
 * @param outcome - Whether the request permits navigation, rejects it, or throws a recoverable server error.
 */
export function simulateStepperRequest(context: IStepperTransitionContext, outcome: 'allow' | 'reject' | 'fail'): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const cancel = (): void => {
      clearTimeout(timer);
      resolve(false);
    };

    const timer = setTimeout(() => {
      context.signal.removeEventListener('abort', cancel);

      if (outcome === 'fail') reject(new Error('The simulated server could not save this step. Try again.'));
      else resolve(outcome === 'allow');
    }, 800);

    context.signal.addEventListener('abort', cancel, { once: true });

    if (context.signal.aborted) cancel();
  });
}
