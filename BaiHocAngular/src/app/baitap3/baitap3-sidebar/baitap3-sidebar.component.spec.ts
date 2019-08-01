import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap3SidebarComponent } from './baitap3-sidebar.component';

describe('Baitap3SidebarComponent', () => {
  let component: Baitap3SidebarComponent;
  let fixture: ComponentFixture<Baitap3SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap3SidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap3SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
