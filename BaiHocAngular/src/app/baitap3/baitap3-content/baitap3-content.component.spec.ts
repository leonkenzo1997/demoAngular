import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap3ContentComponent } from './baitap3-content.component';

describe('Baitap3ContentComponent', () => {
  let component: Baitap3ContentComponent;
  let fixture: ComponentFixture<Baitap3ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap3ContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap3ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
