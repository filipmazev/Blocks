import { TestBed } from '@angular/core/testing';

import { MockSearchStore } from './mock-search-store.service';

describe('MockSearchStore', () => {
  let service: MockSearchStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockSearchStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
