import { AuthProvider } from './../providers/auth';
import { User } from './../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from './../services/auth.service';





@Component({
  selector: 'app-lg-alun',
  templateUrl: './lg-alun.page.html',
  styleUrls: ['./lg-alun.page.scss'],
})
export class LgAlunPage implements OnInit {
  userLogin: User = {};
  private loading: any;

  constructor(private loadingCTRL: LoadingController, private toastCTRL: ToastController, private authService: AuthService) { }

  ngOnInit() { }

  //Função do Login
  async Login() {
    await this.presentLoading();

    try {

    await this.authService.Login(this.userLogin);
      } catch (error) {
        let message: string;
        
        //Erros 
        switch(error.code){

          case 'auth/user-not-found' : 
          message = 'Usuário Não Cadastrado!';
          break; 
        }

        this.presentToast(error.message);

      } finally {
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
