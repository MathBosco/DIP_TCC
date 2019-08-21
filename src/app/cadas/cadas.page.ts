import { Component, OnInit } from '@angular/core';
import { AuthProvider } from '../providers/auth';
@Component({
  selector: 'app-cadas',
  templateUrl: './cadas.page.html',
  styleUrls: ['./cadas.page.scss'],
})
export class CadasPage implements OnInit {
 
cadastroForm ={
  email:'',
  password:'',
  nome:'',
  ra: '',
  
}


  constructor(
    private authProvider: AuthProvider
  ) { }

  criarNovaConta(){
    this.authProvider.register(this.cadastroForm)
    .then((res) =>{
      let uid = res.user.uid;
      console.log(res.user.uid);
      }
    )}
    
        
    

  ngOnInit() {
  }

}
