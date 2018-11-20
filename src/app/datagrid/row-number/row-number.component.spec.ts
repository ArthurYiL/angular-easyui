import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowNumberComponent } from './row-number.component';

describe('RowNumberComponent', () => {
  let component: RowNumberComponent;
  let fixture: ComponentFixture<RowNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
