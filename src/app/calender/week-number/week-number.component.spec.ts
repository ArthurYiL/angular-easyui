import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekNumberComponent } from './week-number.component';

describe('WeekNumberComponent', () => {
  let component: WeekNumberComponent;
  let fixture: ComponentFixture<WeekNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
