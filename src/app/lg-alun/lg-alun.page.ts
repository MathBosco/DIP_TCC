import { CadasPage } from './../cadas/cadas.page';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import { wtfEnabled } from '@angular/core/src/profile/profile';
import { typeWithParameters } from '@angular/compiler/src/render3/util';



@Component({
  selector: 'app-lg-alun',
  templateUrl: './lg-alun.page.html',
  styleUrls: ['./lg-alun.page.scss'],
})
export class LgAlunPage implements OnInit {

formGrupoAlunoLogin : FormGroup;

constructor(private formConstrutor :FormBuilder, private CadasPage : CadasPage) {} 

  ngOnInit() {
    console.log(this.CadasPage.formGrupo);
    this.formGrupoAlunoLogin = this.formConstrutor.group({
      Ra_l : [''] ,
      Senha_l : ['']
      
    });
    
  }

  private LoginAluno(){

    const RA_l = this.formGrupoAlunoLogin.get('Ra_l').value;
    const Senha_l = this.formGrupoAlunoLogin.get('Senha_l').value;
    
  }
    

}
