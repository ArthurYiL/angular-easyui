import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoBorderComponent } from './no-border.component';

describe('NoBorderComponent', () => {
  let component: NoBorderComponent;
  let fixture: ComponentFixture<NoBorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoBorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
