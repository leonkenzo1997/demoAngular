import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap1FooterComponent } from './baitap1-footer.component';

describe('Baitap1FooterComponent', () => {
  let component: Baitap1FooterComponent;
  let fixture: ComponentFixture<Baitap1FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap1FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap1FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
