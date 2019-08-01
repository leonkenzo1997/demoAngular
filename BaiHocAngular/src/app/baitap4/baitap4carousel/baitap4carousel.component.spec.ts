import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4carouselComponent } from './baitap4carousel.component';

describe('Baitap4carouselComponent', () => {
  let component: Baitap4carouselComponent;
  let fixture: ComponentFixture<Baitap4carouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4carouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4carouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
