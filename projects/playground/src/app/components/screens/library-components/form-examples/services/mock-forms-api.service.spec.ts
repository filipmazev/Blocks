import { TestBed } from '@angular/core/testing';

import { MockFormsApi } from './mock-forms-api.service';

describe('MockFormsApi', () => {
  let service: MockFormsApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockFormsApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
