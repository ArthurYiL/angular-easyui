import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRowsComponent } from './footer-rows.component';

describe('FooterRowsComponent', () => {
  let component: FooterRowsComponent;
  let fixture: ComponentFixture<FooterRowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterRowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
