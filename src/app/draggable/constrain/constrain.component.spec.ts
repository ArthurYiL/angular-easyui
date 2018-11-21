import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstrainComponent } from './constrain.component';

describe('ConstrainComponent', () => {
  let component: ConstrainComponent;
  let fixture: ComponentFixture<ConstrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
