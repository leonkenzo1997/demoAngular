import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap1HeaderComponent } from './baitap1-header.component';

describe('Baitap1HeaderComponent', () => {
  let component: Baitap1HeaderComponent;
  let fixture: ComponentFixture<Baitap1HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap1HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap1HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
