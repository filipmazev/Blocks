import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Collapsible } from './collapsible';

describe('Collapsible', () => {
  let component: Collapsible;
  let fixture: ComponentFixture<Collapsible>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Collapsible]
    }).compileComponents();

    fixture = TestBed.createComponent(Collapsible);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
