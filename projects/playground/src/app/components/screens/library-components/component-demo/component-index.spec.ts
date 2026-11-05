import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentIndex } from './component-index';

describe('ComponentIndex', () => {
  let component: ComponentIndex;
  let fixture: ComponentFixture<ComponentIndex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentIndex]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentIndex);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
