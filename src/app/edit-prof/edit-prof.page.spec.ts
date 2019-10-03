import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfPage } from './edit-prof.page';

describe('EditProfPage', () => {
  let component: EditProfPage;
  let fixture: ComponentFixture<EditProfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
