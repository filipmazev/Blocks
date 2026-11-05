import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssentialsExamples } from './essentials-examples';

describe('EssentialsExamples', () => {
  let component: EssentialsExamples;
  let fixture: ComponentFixture<EssentialsExamples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EssentialsExamples]
    }).compileComponents();

    fixture = TestBed.createComponent(EssentialsExamples);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
