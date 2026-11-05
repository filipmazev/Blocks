import { TestBed } from '@angular/core/testing';

import { RadioRegistry } from './radio-registry.service';

describe('RadioRegistry', () => {
  let service: RadioRegistry;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadioRegistry);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
