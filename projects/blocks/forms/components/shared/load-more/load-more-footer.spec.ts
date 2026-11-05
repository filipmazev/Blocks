import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadMoreFooter } from './load-more-footer';

describe('LoadMoreFooter', () => {
  let component: LoadMoreFooter;
  let fixture: ComponentFixture<LoadMoreFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadMoreFooter]
    }).compileComponents();

    fixture = TestBed.createComponent(LoadMoreFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
