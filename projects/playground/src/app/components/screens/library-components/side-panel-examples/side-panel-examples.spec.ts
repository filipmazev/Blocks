import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePanelExamples } from './side-panel-examples';

describe('SidePanelExamples', () => {
  let component: SidePanelExamples;
  let fixture: ComponentFixture<SidePanelExamples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidePanelExamples]
    }).compileComponents();

    fixture = TestBed.createComponent(SidePanelExamples);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
