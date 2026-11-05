import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInfo } from './component-info';

describe('ComponentInfo', () => {
  let component: ComponentInfo;
  let fixture: ComponentFixture<ComponentInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentInfo]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
