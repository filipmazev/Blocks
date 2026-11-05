import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleToast } from './simple-toast';

describe('SimpleToast', () => {
  let component: SimpleToast;
  let fixture: ComponentFixture<SimpleToast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleToast]
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleToast);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
