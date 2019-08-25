import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAlunPage } from './home-alun.page';

describe('HomeAlunPage', () => {
  let component: HomeAlunPage;
  let fixture: ComponentFixture<HomeAlunPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAlunPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAlunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
