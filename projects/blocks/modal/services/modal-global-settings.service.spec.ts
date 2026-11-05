import { TestBed } from '@angular/core/testing';

import { ModalGlobalSettingsService } from './modal-global-settings.service';

describe('ModalGlobalSettingsService', () => {
  let service: ModalGlobalSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalGlobalSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
