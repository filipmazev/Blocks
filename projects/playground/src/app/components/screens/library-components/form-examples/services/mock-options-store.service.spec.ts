import { TestBed } from '@angular/core/testing';

import { MockOptionsStore } from './mock-options-store.service';

describe('MockOptionsStore', () => {
  let service: MockOptionsStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockOptionsStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
