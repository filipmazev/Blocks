import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDialog } from './component-dialog';

describe('ComponentDialog', () => {
  let component: ComponentDialog;
  let fixture: ComponentFixture<ComponentDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentDialog]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
