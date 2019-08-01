import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap1SidebarComponent } from './bai-tap1-sidebar.component';

describe('BaiTap1SidebarComponent', () => {
  let component: BaiTap1SidebarComponent;
  let fixture: ComponentFixture<BaiTap1SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTap1SidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap1SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
