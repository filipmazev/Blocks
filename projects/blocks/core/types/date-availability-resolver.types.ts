import type { IDateAvailabilityRequest } from '@core/interfaces/idate-availability-request.interface';
import type { IDateAvailabilityResult } from '@core/interfaces/idate-availability-result.interface';
/**
 * Promise- or observable-based availability resolver managed by Blocks request orchestration.
 */
export type DateAvailabilityResolver = (request: IDateAvailabilityRequest) => Promise<IDateAvailabilityResult | null>;
