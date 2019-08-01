import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap2ListCardComponent } from './baitap2-list-card.component';

describe('Baitap2ListCardComponent', () => {
  let component: Baitap2ListCardComponent;
  let fixture: ComponentFixture<Baitap2ListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap2ListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap2ListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
