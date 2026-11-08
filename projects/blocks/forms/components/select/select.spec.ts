import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Select } from './select';

describe('Select', () => {
  let component: Select<unknown>;
  let fixture: ComponentFixture<Select<unknown>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Select]
    }).compileComponents();

    fixture = TestBed.createComponent(Select);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('options', []);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
