import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap3HeaderComponent } from './baitap3-header.component';

describe('Baitap3HeaderComponent', () => {
  let component: Baitap3HeaderComponent;
  let fixture: ComponentFixture<Baitap3HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap3HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap3HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
