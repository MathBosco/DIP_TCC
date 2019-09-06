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




  constructor(  private loadingCTRL: LoadingController, private toastCTRL: ToastController, private authService: AuthService) { }

  ngOnInit() { }

  async Login() {
    await this.presentLoading();
    await this.authService.Login(this.userLogin);
    
  }


  async presentLoading() {
    this.loading = await this.loadingCTRL.create({ message: 'Aguarde um segundo...' });
    return this.loading.present();
  }
}







