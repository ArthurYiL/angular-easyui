import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationLayoutComponent } from './pagination-layout.component';

describe('PaginationLayoutComponent', () => {
  let component: PaginationLayoutComponent;
  let fixture: ComponentFixture<PaginationLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
