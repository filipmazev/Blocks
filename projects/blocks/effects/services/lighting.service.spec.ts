import { TestBed } from '@angular/core/testing';

import { BxGlassLightingService } from './lighting.service';

describe('BxGlassLightingService', () => {
  let service: BxGlassLightingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BxGlassLightingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
