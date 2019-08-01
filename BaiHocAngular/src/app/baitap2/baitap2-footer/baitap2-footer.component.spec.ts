import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap2FooterComponent } from './baitap2-footer.component';

describe('Baitap2FooterComponent', () => {
  let component: Baitap2FooterComponent;
  let fixture: ComponentFixture<Baitap2FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap2FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap2FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
