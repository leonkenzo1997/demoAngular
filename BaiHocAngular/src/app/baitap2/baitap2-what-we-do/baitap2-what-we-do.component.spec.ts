import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap2WhatWeDoComponent } from './baitap2-what-we-do.component';

describe('Baitap2WhatWeDoComponent', () => {
  let component: Baitap2WhatWeDoComponent;
  let fixture: ComponentFixture<Baitap2WhatWeDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap2WhatWeDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap2WhatWeDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
