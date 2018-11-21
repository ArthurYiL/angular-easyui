import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrggableResizableComponent } from './drggable-resizable.component';

describe('DrggableResizableComponent', () => {
  let component: DrggableResizableComponent;
  let fixture: ComponentFixture<DrggableResizableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrggableResizableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrggableResizableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
