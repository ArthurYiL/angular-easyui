import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrozenColumnAdvancedComponent } from './frozen-column-advanced.component';

describe('FrozenColumnAdvancedComponent', () => {
  let component: FrozenColumnAdvancedComponent;
  let fixture: ComponentFixture<FrozenColumnAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrozenColumnAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrozenColumnAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
