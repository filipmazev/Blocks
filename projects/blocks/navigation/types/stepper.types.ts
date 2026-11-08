import type { Observable } from 'rxjs';

import type { IStepperTransitionContext } from '@navigation/interfaces/istepper-transition-context.interface';

export type StepperMode = 'indicator' | 'navigation' | 'wizard';
export type StepperVariant = 'steps' | 'segments' | 'dots' | 'progress' | 'cards';
export type StepperSize = 'sm' | 'md' | 'lg';
export type StepperOrientation = 'horizontal' | 'vertical';
export type StepperResponsive = 'scroll' | 'vertical' | 'compact';
export type StepperProgressFormat = 'percentage' | 'fraction';
export type StepperContentPolicy = 'eager' | 'retained' | 'active';
export type StepperSelectionMode = 'internal' | 'controlled';
export type StepperSource = 'pointer' | 'keyboard' | 'programmatic' | 'controls';
export type StepperAction = 'select' | 'next' | 'previous' | 'skip' | 'finish';
export type StepperOutcome = 'accepted' | 'rejected' | 'invalid' | 'error' | 'cancelled' | 'busy';
export type StepperStatus = 'pending' | 'active' | 'completed' | 'skipped' | 'error' | 'loading' | 'disabled';
export type StepperGuard = (context: IStepperTransitionContext) => boolean | Promise<boolean> | Observable<boolean>;
