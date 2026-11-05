import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationLevel } from './navigation-level';

describe('NavigationLevel', () => {
  let component: NavigationLevel;
  let fixture: ComponentFixture<NavigationLevel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationLevel]
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationLevel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
