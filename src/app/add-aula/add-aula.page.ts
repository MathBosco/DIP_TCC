import { Aulas } from './../interfaces/aulas';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-aula',
  templateUrl: './add-aula.page.html',
  styleUrls: ['./add-aula.page.scss'],
})
export class AddAulaPage implements OnInit {
  private aulas : Aulas = {};


  constructor() { }

  ngOnInit() {
  }

}
