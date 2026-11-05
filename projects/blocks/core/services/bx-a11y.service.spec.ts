import { TestBed } from '@angular/core/testing';

import { BxA11yService } from './bx-a11y.service';

describe('BxA11yService', () => {
  let service: BxA11yService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BxA11yService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
