import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePanelLayout } from './side-panel-layout';

describe('SidePanelLayout', () => {
  let component: SidePanelLayout;
  let fixture: ComponentFixture<SidePanelLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [SidePanelLayout] }).compileComponents();

    fixture = TestBed.createComponent(SidePanelLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
