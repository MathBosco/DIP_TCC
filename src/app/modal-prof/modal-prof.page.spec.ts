import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProfPage } from './modal-prof.page';

describe('ModalProfPage', () => {
  let component: ModalProfPage;
  let fixture: ComponentFixture<ModalProfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalProfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
