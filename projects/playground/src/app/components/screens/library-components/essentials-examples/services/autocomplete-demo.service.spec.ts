import { TestBed } from '@angular/core/testing';

import { AutocompleteDemoService } from './autocomplete-demo.service';

describe('AutocompleteDemoService', () => {
  let service: AutocompleteDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutocompleteDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
