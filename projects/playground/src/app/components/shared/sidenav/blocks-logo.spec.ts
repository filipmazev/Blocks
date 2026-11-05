import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksLogo } from './blocks-logo';

describe('BlocksLogo', () => {
  let component: BlocksLogo;
  let fixture: ComponentFixture<BlocksLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocksLogo]
    }).compileComponents();

    fixture = TestBed.createComponent(BlocksLogo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
