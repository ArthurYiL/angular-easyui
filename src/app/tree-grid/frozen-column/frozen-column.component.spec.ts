import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrozenColumnComponent } from './frozen-column.component';

describe('FrozenColumnComponent', () => {
  let component: FrozenColumnComponent;
  let fixture: ComponentFixture<FrozenColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrozenColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrozenColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
