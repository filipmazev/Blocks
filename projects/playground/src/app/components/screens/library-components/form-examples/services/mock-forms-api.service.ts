import { Injectable } from '@angular/core';
import { IBxSelectOption } from '@filip.mazev/blocks/forms';
import { IPageResult } from '../interfaces/ipage-result.interface';
import { IRegistrationData } from '../interfaces/iregistration-data.interface';
import { DEMO_DESTINATIONS } from '../constants/form-examples.constants';
import { delay } from '../helpers/delay.helpers';

@Injectable({ providedIn: 'root' })
export class MockFormsApi {
  public async options(query: string, offset: number, pageSize: number, fail: boolean, signal: AbortSignal): Promise<IPageResult<IBxSelectOption<string>>> {
    await delay(800, signal);

    if (fail) throw new Error('The mock request failed. Retry to load this page.');

    const all = DEMO_DESTINATIONS;
    const filtered = all.filter((item) => String(item.label).toLocaleLowerCase().includes(query.toLocaleLowerCase()));
    const items = filtered.slice(offset, offset + pageSize);

    return { items, hasMore: offset + items.length < filtered.length, total: filtered.length };
  }

  public async available(name: string, signal: AbortSignal): Promise<boolean> {
    await delay(650, signal);

    return !['blocks', 'taken', 'admin'].includes(name.trim().toLocaleLowerCase());
  }

  public async save(data: IRegistrationData): Promise<boolean> {
    await delay(900);

    return !data.email.includes('server-error');
  }
}
