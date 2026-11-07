import type { Signal, WritableSignal } from '@angular/core';

import { DestroyRef, inject, Injectable, signal } from '@angular/core';

import type { IStepDefinition } from '@navigation/interfaces/istep-definition.interface';
import type { IStepperRequest } from '@navigation/interfaces/istepper-request.interface';
import type { IStepperTransition } from '@navigation/interfaces/istepper-transition.interface';
import type { IStepperTransitionContext } from '@navigation/interfaces/istepper-transition-context.interface';
import type { IStepperWorkflowState } from '@navigation/interfaces/istepper-workflow-state.interface';

import { isStepPending, isStepValid, runStepperGuard } from '@navigation/helpers/stepper.helpers';

/** Component-scoped wizard state and cancellation; not exported from the package entry point. */
@Injectable()
export class StepperWorkflowService {
  private readonly completedState: WritableSignal<ReadonlySet<string>> = signal(new Set<string>());
  private readonly skippedState: WritableSignal<ReadonlySet<string>> = signal(new Set<string>());
  private readonly attemptedState: WritableSignal<ReadonlySet<string>> = signal(new Set<string>());

  private readonly pendingState: WritableSignal<IStepperRequest | null> = signal(null);

  private readonly finishedState: WritableSignal<boolean> = signal(false);

  /** IDs successfully advanced past; explicit metadata overrides this state. */
  public readonly completed: Signal<ReadonlySet<string>> = this.completedState.asReadonly();
  /** Optional steps deliberately skipped by an accepted operation. */
  public readonly skipped: Signal<ReadonlySet<string>> = this.skippedState.asReadonly();
  /** Steps whose invalid forward navigation was attempted. */
  public readonly attempted: Signal<ReadonlySet<string>> = this.attemptedState.asReadonly();
  /** The single in-flight request; null when idle. */
  public readonly pending: Signal<IStepperRequest | null> = this.pendingState.asReadonly();
  /** Whether a final action has succeeded since reset. */
  public readonly finished: Signal<boolean> = this.finishedState.asReadonly();

  private controller: AbortController | null = null;

  constructor() {
    inject(DestroyRef).onDestroy(() => this.cancel());
  }

  /**
   * Resolves explicit and internal completion, invalidating completion when a form becomes invalid.
   * @param step - Current metadata, read rather than a stale validation snapshot.
   */
  public isComplete(step: IStepDefinition): boolean {
    return (step.completed ?? this.completedState().has(step.id)) && isStepValid(step);
  }

  /**
   * Resolves an explicit skipped override before internal skip state.
   * @param step - Current metadata.
   */
  public isSkipped(step: IStepDefinition): boolean {
    return step.skipped ?? this.skippedState().has(step.id);
  }

  /** Cancels pending work without discarding previously accepted progress. */
  public cancel(): void {
    this.controller?.abort();
    this.controller = null;
    this.pendingState.set(null);
  }

  /** Clears workflow progress and aborts pending work; application-owned form values are preserved. */
  public reset(): void {
    this.cancel();
    this.completedState.set(new Set());
    this.skippedState.set(new Set());
    this.attemptedState.set(new Set());
    this.finishedState.set(false);
  }

  /**
   * Removes state for deleted IDs so later reuse cannot resurrect old progress.
   * @param ids - IDs still registered by the owner.
   */
  public reconcile(ids: ReadonlySet<string>): void {
    for (const state of [this.completedState, this.skippedState, this.attemptedState]) {
      if ([...state()].some((id) => !ids.has(id))) state.update((value) => new Set([...value].filter((id) => ids.has(id))));
    }
  }

  /**
   * Executes validation and guards once; duplicate calls return busy and never overlap application operations.
   * @param request - Requested destination and workflow action.
   * @param read - Supplies the latest state for post-guard validation and stale-result checks.
   * @returns A typed result; failures preserve progress and release the loading lock.
   */
  public async transition(request: IStepperRequest, read: () => IStepperWorkflowState): Promise<IStepperTransition> {
    const state = read();
    const from = state.steps.find((step) => step.id === state.activeId) ?? null;
    const finishing = this.isFinishing(state, request);
    const to = finishing ? null : (state.steps.find((step) => step.id === request.id) ?? null);
    const base = { request, fromId: from?.id ?? null, toId: to?.id ?? null };

    if (this.pending()) return { ...base, outcome: 'busy' };

    if (this.finished()) return { ...base, outcome: 'rejected', reason: 'completed' };

    const failure = this.check(state, request);

    if (failure) return { ...base, ...failure };

    const controller = new AbortController();
    const context: IStepperTransitionContext = { request, from, to, signal: controller.signal };

    this.controller = controller;
    this.pendingState.set(request);

    try {
      for (const guard of [from?.canExit, to?.canEnter, state.guard]) {
        const allowed = await runStepperGuard(guard, context);

        if (controller.signal.aborted) return { ...base, outcome: 'cancelled' };

        if (!allowed) return { ...base, outcome: 'rejected', reason: 'guard' };
      }

      const current = read();

      if (current.activeId !== state.activeId || current.steps !== state.steps) return { ...base, outcome: 'cancelled' };

      const updatedFailure = this.check(current, request);

      if (updatedFailure) return { ...base, ...updatedFailure };

      const forward = finishing || request.index > state.steps.findIndex((step) => step.id === state.activeId);

      if (from && forward) {
        if (request.action === 'skip') {
          this.skippedState.update((ids) => new Set([...ids, from.id]));
          this.completedState.update((ids) => new Set([...ids].filter((id) => id !== from.id)));
        } else {
          this.completedState.update((ids) => new Set([...ids, from.id]));
          this.skippedState.update((ids) => new Set([...ids].filter((id) => id !== from.id)));
        }
      }

      if (finishing) this.finishedState.set(true);

      return { ...base, outcome: 'accepted' };
    } catch (error: unknown) {
      return controller.signal.aborted ? { ...base, outcome: 'cancelled' } : { ...base, outcome: 'error', error };
    } finally {
      if (this.controller === controller) {
        this.controller = null;
        this.pendingState.set(null);
      }
    }
  }

  //#region Helpers

  private isFinishing(state: IStepperWorkflowState, request: IStepperRequest): boolean {
    return request.action === 'finish' || (request.action === 'skip' && request.id === state.activeId);
  }

  private check(state: IStepperWorkflowState, request: IStepperRequest): Pick<IStepperTransition, 'outcome' | 'reason'> | null {
    const fromIndex = state.steps.findIndex((step) => step.id === state.activeId);
    const from = state.steps[fromIndex];
    const finishing = this.isFinishing(state, request);
    const to = finishing ? null : state.steps.find((step) => step.id === request.id);
    const forward = finishing || request.index > fromIndex;

    if (!from || (!finishing && (!to || to.disabled || (this.isComplete(to) && to.editable === false)))) return { outcome: 'rejected', reason: 'unavailable' };

    if (request.action === 'skip' && !from.optional) return { outcome: 'rejected', reason: 'unavailable' };

    if (forward && (isStepPending(from) || (request.action !== 'skip' && !isStepValid(from)))) {
      this.attemptedState.update((ids) => new Set([...ids, from.id]));

      if (from.validation?.markAllAsTouched) from.validation.markAllAsTouched();
      else from.validation?.markAsTouched?.();

      return { outcome: 'invalid', reason: 'validation' };
    }

    if (forward && (state.linear || finishing)) {
      const before = state.steps.slice(0, finishing ? state.steps.length : request.index);
      const blocked = before.some((step) => {
        if (step.disabled || step.optional) return false;

        if (step.id === from.id) return step.completed === false || !isStepValid(step);

        return !this.isComplete(step);
      });

      if (blocked) return { outcome: 'rejected', reason: 'linear' };
    }

    return null;
  }

  //#endregion
}
