import { TestBed } from '@angular/core/testing';

import { BxShortcutService } from './bx-shortcut.service';

describe('BxShortcutService', () => {
  let service: BxShortcutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BxShortcutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
