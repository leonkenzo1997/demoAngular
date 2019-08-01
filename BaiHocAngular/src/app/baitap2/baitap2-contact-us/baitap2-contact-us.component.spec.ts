import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap2ContactUsComponent } from './baitap2-contact-us.component';

describe('Baitap2ContactUsComponent', () => {
  let component: Baitap2ContactUsComponent;
  let fixture: ComponentFixture<Baitap2ContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap2ContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap2ContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
