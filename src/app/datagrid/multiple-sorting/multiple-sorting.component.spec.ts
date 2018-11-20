import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSortingComponent } from './multiple-sorting.component';

describe('MultipleSortingComponent', () => {
  let component: MultipleSortingComponent;
  let fixture: ComponentFixture<MultipleSortingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleSortingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
