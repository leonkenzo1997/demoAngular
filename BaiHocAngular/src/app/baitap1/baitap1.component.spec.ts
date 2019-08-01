import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap1Component } from './baitap1.component';

describe('Baitap1Component', () => {
  let component: Baitap1Component;
  let fixture: ComponentFixture<Baitap1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
