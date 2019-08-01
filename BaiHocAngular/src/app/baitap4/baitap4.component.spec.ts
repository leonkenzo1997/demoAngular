import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4Component } from './baitap4.component';

describe('Baitap4Component', () => {
  let component: Baitap4Component;
  let fixture: ComponentFixture<Baitap4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
