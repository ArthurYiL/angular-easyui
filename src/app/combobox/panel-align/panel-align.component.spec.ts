import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAlignComponent } from './panel-align.component';

describe('PanelAlignComponent', () => {
  let component: PanelAlignComponent;
  let fixture: ComponentFixture<PanelAlignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelAlignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelAlignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
