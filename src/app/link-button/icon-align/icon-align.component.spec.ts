import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconAlignComponent } from './icon-align.component';

describe('IconAlignComponent', () => {
  let component: IconAlignComponent;
  let fixture: ComponentFixture<IconAlignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconAlignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconAlignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
