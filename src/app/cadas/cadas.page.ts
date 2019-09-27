import { AuthService } from './../services/auth.service';
import { User } from './../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-cadas',
  templateUrl: './cadas.page.html',
  styleUrls: ['./cadas.page.scss'],
})

export class CadasPage implements OnInit {
  userRegister: User = {};
  private loading: any;


  constructor(private loadingCTRL: LoadingController, private toastCTRL: ToastController, private authService: AuthService) { }


  ngOnInit() { }


  //Método de Registro
  async Register(){

    await this.presentLoading();

    try {
      await this.authService.Register(this.userRegister);
    } catch (error) {
      let message: string;

      //Switch para Erro

        switch(error.code){

          case 'auth/email-already-in-use' : 
          message = 'E-mail Já Cadastrado!';
          break; 

          case 'auth/invalid-email' : 
          message = 'E-mail Inválido!';
          break; 

          case 'auth/weak-password' : 
          message = 'Senha Inválida, Deverá conter no Mínimo 6 caracteres!';
          break; 
          
        }

      this.presentToast(message);

    }finally {
      this.loading.dismiss()
    }
  }

  //Tela de Carregamento
  async presentLoading() {
    this.loading = await this.loadingCTRL.create({ message: 'Aguarde um segundo...' });
    return this.loading.present();
  }

  //Criação do Toast
  async presentToast(message: string) {
    const toast = await this.toastCTRL.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}
