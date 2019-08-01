import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap2ItemCardComponent } from './baitap2-item-card.component';

describe('Baitap2ItemCardComponent', () => {
  let component: Baitap2ItemCardComponent;
  let fixture: ComponentFixture<Baitap2ItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap2ItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap2ItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
