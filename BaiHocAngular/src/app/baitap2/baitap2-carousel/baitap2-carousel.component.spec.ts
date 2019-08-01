import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap2CarouselComponent } from './baitap2-carousel.component';

describe('Baitap2CarouselComponent', () => {
  let component: Baitap2CarouselComponent;
  let fixture: ComponentFixture<Baitap2CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap2CarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap2CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
