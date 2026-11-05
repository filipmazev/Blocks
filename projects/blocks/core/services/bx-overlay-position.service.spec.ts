import { TestBed } from '@angular/core/testing';

import { BxOverlayPositionService } from './bx-overlay-position.service';

describe('BxOverlayPositionService', () => {
  let service: BxOverlayPositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BxOverlayPositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
