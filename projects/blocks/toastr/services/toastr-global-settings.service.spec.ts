import { TestBed } from '@angular/core/testing';

import { ToastrGlobalSettingsService } from './toastr-global-settings.service';

describe('ToastrGlobalSettingsService', () => {
  let service: ToastrGlobalSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastrGlobalSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
