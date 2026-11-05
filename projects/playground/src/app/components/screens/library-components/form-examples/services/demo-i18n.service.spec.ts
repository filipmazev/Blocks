import { TestBed } from '@angular/core/testing';

import { DemoI18nService } from './demo-i18n.service';

describe('DemoI18nService', () => {
  let service: DemoI18nService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoI18nService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
