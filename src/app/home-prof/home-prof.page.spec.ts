import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProfPage } from './home-prof.page';

describe('HomeProfPage', () => {
  let component: HomeProfPage;
  let fixture: ComponentFixture<HomeProfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeProfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
