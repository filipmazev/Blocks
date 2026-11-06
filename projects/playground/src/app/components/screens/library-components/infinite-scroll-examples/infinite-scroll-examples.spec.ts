import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteScrollExamples } from './infinite-scroll-examples';

describe('InfiniteScrollExamples', () => {
  let component: InfiniteScrollExamples;
  let fixture: ComponentFixture<InfiniteScrollExamples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfiniteScrollExamples]
    }).compileComponents();

    fixture = TestBed.createComponent(InfiniteScrollExamples);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
