import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualCollection } from './virtual-collection';

describe('VirtualCollection', () => {
  let component: VirtualCollection<unknown>;
  let fixture: ComponentFixture<VirtualCollection<unknown>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [VirtualCollection] }).compileComponents();

    fixture = TestBed.createComponent(VirtualCollection<unknown>);
    fixture.componentRef.setInput('trackBy', (_item: unknown, index: number): number => index);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
