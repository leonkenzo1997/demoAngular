import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4ListCardComponent } from './baitap4-list-card.component';

describe('Baitap4ListCardComponent', () => {
  let component: Baitap4ListCardComponent;
  let fixture: ComponentFixture<Baitap4ListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4ListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4ListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
