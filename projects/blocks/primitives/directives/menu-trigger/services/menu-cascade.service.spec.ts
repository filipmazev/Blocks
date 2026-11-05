import { TestBed } from '@angular/core/testing';

import { MenuCascadeService } from './menu-cascade.service';

describe('MenuCascadeService', () => {
  let service: MenuCascadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuCascadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
