import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4ItemCartSmartphoneComponent } from './baitap4-item-cart-smartphone.component';

describe('Baitap4ItemCartSmartphoneComponent', () => {
  let component: Baitap4ItemCartSmartphoneComponent;
  let fixture: ComponentFixture<Baitap4ItemCartSmartphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4ItemCartSmartphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4ItemCartSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
