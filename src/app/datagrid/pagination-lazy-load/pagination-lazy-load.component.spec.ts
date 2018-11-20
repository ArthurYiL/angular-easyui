import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationLazyLoadComponent } from './pagination-lazy-load.component';

describe('PaginationLazyLoadComponent', () => {
  let component: PaginationLazyLoadComponent;
  let fixture: ComponentFixture<PaginationLazyLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationLazyLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationLazyLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
