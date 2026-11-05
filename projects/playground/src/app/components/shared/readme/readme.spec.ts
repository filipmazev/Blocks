import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Readme } from './readme';

describe('Readme', () => {
  let component: Readme;
  let fixture: ComponentFixture<Readme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Readme]
    }).compileComponents();

    fixture = TestBed.createComponent(Readme);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
