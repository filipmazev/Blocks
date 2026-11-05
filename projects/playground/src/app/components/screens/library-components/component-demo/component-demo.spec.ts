import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDemo } from './component-demo';

describe('ComponentDemo', () => {
  let component: ComponentDemo;
  let fixture: ComponentFixture<ComponentDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentDemo]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
