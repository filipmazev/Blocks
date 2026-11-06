import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenCatalog } from './token-catalog';

describe('TokenCatalog', () => {
  let component: TokenCatalog;
  let fixture: ComponentFixture<TokenCatalog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TokenCatalog]
    }).compileComponents();

    fixture = TestBed.createComponent(TokenCatalog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
