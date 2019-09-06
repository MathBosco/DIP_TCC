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

  async Register() {
    await this.presentLoading();

    try {
      await this.authService.Register(this.userRegister);

    } catch (error) {
      let message: string;


      switch (error.code) {
        case 'auth/email-already-in-use':
          message = 'Email já Cadastrado!'
          break;

      }
      

      this.presentToast(message);
    } finally {
      this.loading.dismiss();


    }
  }

  async presentLoading() {
    this.loading = await this.loadingCTRL.create({ message: 'Aguarde um segundo...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCTRL.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}
