import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuShortcutExamples } from './menu-shortcut-examples';

describe('MenuShortcutExamples', () => {
  let component: MenuShortcutExamples;
  let fixture: ComponentFixture<MenuShortcutExamples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuShortcutExamples]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuShortcutExamples);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
