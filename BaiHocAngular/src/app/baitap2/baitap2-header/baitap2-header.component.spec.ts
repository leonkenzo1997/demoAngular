import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap2HeaderComponent } from './baitap2-header.component';

describe('Baitap2HeaderComponent', () => {
  let component: Baitap2HeaderComponent;
  let fixture: ComponentFixture<Baitap2HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap2HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap2HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
