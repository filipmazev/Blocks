import { TestBed } from '@angular/core/testing';

import { IconCatalogPreferencesService } from './icon-catalog-preferences.service';

describe('IconCatalogPreferencesService', () => {
  let service: IconCatalogPreferencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [IconCatalogPreferencesService] });
    service = TestBed.inject(IconCatalogPreferencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
