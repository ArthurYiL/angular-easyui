import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualScrollLazyLoadComponent } from './virtual-scroll-lazy-load.component';

describe('VirtualScrollLazyLoadComponent', () => {
  let component: VirtualScrollLazyLoadComponent;
  let fixture: ComponentFixture<VirtualScrollLazyLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualScrollLazyLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualScrollLazyLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
