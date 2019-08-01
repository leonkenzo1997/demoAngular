import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4PromotionComponent } from './baitap4-promotion.component';

describe('Baitap4PromotionComponent', () => {
  let component: Baitap4PromotionComponent;
  let fixture: ComponentFixture<Baitap4PromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4PromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4PromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
