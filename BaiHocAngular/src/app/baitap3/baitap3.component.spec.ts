import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap3Component } from './baitap3.component';

describe('Baitap3Component', () => {
  let component: Baitap3Component;
  let fixture: ComponentFixture<Baitap3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
