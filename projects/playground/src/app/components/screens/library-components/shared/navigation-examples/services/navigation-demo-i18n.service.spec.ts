import { TestBed } from '@angular/core/testing';

import { NavigationDemoI18nService } from './navigation-demo-i18n.service';

describe('NavigationDemoI18nService', () => {
  let service: NavigationDemoI18nService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationDemoI18nService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
