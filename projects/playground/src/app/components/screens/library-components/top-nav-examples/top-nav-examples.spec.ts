import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavExamples } from './top-nav-examples';

describe('TopNavExamples', () => {
  let component: TopNavExamples;
  let fixture: ComponentFixture<TopNavExamples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopNavExamples]
    }).compileComponents();

    fixture = TestBed.createComponent(TopNavExamples);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
