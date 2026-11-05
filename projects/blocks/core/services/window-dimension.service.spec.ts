import { TestBed } from '@angular/core/testing';

import { WindowDimensionsService } from './window-dimension.service';

describe('WindowDimensionsService', () => {
  let service: WindowDimensionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowDimensionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
