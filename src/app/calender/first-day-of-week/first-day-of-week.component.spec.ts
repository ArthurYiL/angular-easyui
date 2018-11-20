import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDayOfWeekComponent } from './first-day-of-week.component';

describe('FirstDayOfWeekComponent', () => {
  let component: FirstDayOfWeekComponent;
  let fixture: ComponentFixture<FirstDayOfWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstDayOfWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstDayOfWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
