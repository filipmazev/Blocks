import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualCollectionExamples } from './virtual-collection-examples';

describe('VirtualCollectionExamples', () => {
  let component: VirtualCollectionExamples;
  let fixture: ComponentFixture<VirtualCollectionExamples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [VirtualCollectionExamples] }).compileComponents();

    fixture = TestBed.createComponent(VirtualCollectionExamples);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
