import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppearanceModePreview } from './appearance-mode-preview';

describe('AppearanceModePreview', () => {
  let component: AppearanceModePreview;
  let fixture: ComponentFixture<AppearanceModePreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppearanceModePreview]
    }).compileComponents();

    fixture = TestBed.createComponent(AppearanceModePreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
