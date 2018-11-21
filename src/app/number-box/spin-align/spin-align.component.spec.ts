import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinAlignComponent } from './spin-align.component';

describe('SpinAlignComponent', () => {
  let component: SpinAlignComponent;
  let fixture: ComponentFixture<SpinAlignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinAlignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinAlignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
