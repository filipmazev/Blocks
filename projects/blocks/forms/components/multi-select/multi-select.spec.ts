import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelect } from './multi-select';

describe('MultiSelect', () => {
  let component: MultiSelect<unknown>;
  let fixture: ComponentFixture<MultiSelect<unknown>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSelect]
    }).compileComponents();

    fixture = TestBed.createComponent(MultiSelect);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('options', []);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
