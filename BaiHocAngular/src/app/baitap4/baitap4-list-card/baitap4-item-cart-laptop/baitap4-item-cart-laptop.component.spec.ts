import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4ItemCartLaptopComponent } from './baitap4-item-cart-laptop.component';

describe('Baitap4ItemCartLaptopComponent', () => {
  let component: Baitap4ItemCartLaptopComponent;
  let fixture: ComponentFixture<Baitap4ItemCartLaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4ItemCartLaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4ItemCartLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
