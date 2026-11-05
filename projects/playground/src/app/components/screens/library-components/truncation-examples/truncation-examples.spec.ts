import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruncationExamples } from './truncation-examples';

describe('TruncationExamples', () => {
  let component: TruncationExamples;
  let fixture: ComponentFixture<TruncationExamples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TruncationExamples]
    }).compileComponents();

    fixture = TestBed.createComponent(TruncationExamples);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
