import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4HeaderComponent } from './baitap4-header.component';

describe('Baitap4HeaderComponent', () => {
  let component: Baitap4HeaderComponent;
  let fixture: ComponentFixture<Baitap4HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
