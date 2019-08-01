import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap3FooterComponent } from './baitap3-footer.component';

describe('Baitap3FooterComponent', () => {
  let component: Baitap3FooterComponent;
  let fixture: ComponentFixture<Baitap3FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap3FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap3FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
