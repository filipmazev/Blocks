import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightOrb } from './light-orb';

describe('LightOrb', () => {
  let component: LightOrb;
  let fixture: ComponentFixture<LightOrb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightOrb]
    }).compileComponents();

    fixture = TestBed.createComponent(LightOrb);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
