import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagExamples } from './tag-examples';

describe('TagExamples', () => {
  let component: TagExamples;
  let fixture: ComponentFixture<TagExamples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagExamples]
    }).compileComponents();

    fixture = TestBed.createComponent(TagExamples);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
