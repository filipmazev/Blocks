import { TestBed } from '@angular/core/testing';

import { FormSettingsService } from './form-settings.service';

describe('FormSettingsService', () => {
  let service: FormSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
