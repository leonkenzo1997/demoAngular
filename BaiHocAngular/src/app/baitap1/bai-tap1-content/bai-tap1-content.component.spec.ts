import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap1ContentComponent } from './bai-tap1-content.component';

describe('BaiTap1ContentComponent', () => {
  let component: BaiTap1ContentComponent;
  let fixture: ComponentFixture<BaiTap1ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTap1ContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap1ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
