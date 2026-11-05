import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavExamples } from './side-nav-examples';

describe('SideNavExamples', () => {
  let component: SideNavExamples;
  let fixture: ComponentFixture<SideNavExamples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNavExamples]
    }).compileComponents();

    fixture = TestBed.createComponent(SideNavExamples);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
