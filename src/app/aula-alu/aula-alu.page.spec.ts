import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AulaAluPage } from './aula-alu.page';

describe('AulaAluPage', () => {
  let component: AulaAluPage;
  let fixture: ComponentFixture<AulaAluPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AulaAluPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AulaAluPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
