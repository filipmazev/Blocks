import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchExamples } from './search-examples';

describe('SearchExamples', () => {
  let component: SearchExamples;
  let fixture: ComponentFixture<SearchExamples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchExamples]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchExamples);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
