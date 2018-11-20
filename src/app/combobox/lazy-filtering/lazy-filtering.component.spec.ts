import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyFilteringComponent } from './lazy-filtering.component';

describe('LazyFilteringComponent', () => {
  let component: LazyFilteringComponent;
  let fixture: ComponentFixture<LazyFilteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyFilteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
