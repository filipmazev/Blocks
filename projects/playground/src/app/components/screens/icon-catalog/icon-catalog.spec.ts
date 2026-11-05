import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCatalog } from './icon-catalog';

describe('IconCatalog', () => {
  let component: IconCatalog;
  let fixture: ComponentFixture<IconCatalog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconCatalog]
    }).compileComponents();

    fixture = TestBed.createComponent(IconCatalog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
