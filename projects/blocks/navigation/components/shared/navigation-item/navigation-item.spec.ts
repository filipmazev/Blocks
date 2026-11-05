import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationItem } from './navigation-item';

describe('NavigationItem', () => {
  let component: NavigationItem;
  let fixture: ComponentFixture<NavigationItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationItem]
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
