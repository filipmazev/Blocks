import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppearancePreview } from './appearance-preview';

describe('AppearancePreview', () => {
  let component: AppearancePreview;
  let fixture: ComponentFixture<AppearancePreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppearancePreview]
    }).compileComponents();

    fixture = TestBed.createComponent(AppearancePreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
