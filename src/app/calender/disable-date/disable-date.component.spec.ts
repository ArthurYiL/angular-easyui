import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableDateComponent } from './disable-date.component';

describe('DisableDateComponent', () => {
  let component: DisableDateComponent;
  let fixture: ComponentFixture<DisableDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisableDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisableDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
