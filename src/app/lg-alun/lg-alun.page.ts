import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AuthProvider } from '../providers/auth';




@Component({
  selector: 'app-lg-alun',
  templateUrl: './lg-alun.page.html',
  styleUrls: ['./lg-alun.page.scss'],
})
export class LgAlunPage implements OnInit {

  loginForm ={
    email: '',
    password: '',
  }
  constructor(
    private authProvider: AuthProvider
  ) {}

 fazerLogin(){
   this.authProvider.login(this.loginForm)
   .then((res) => {
     console.log("DEU CERTO PORRA");
   })
   .catch((err)=>{
     console.log(err);
       })
 }

  ngOnInit() {
  }

}
