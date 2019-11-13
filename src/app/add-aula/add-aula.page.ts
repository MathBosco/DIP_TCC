import { AulasService } from './../services/aulas.service';
import { Subscription } from 'rxjs';
import { AuthService } from './../services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Aulas } from './../interfaces/aulas';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-aula',
  templateUrl: './add-aula.page.html',
  styleUrls: ['./add-aula.page.scss'],
})
export class AddAulaPage implements OnInit {
  public aulas: Aulas = {};
  private loading: any;
  private aulasId: string = null;
  private aulaSubscription: Subscription;

  constructor(
    private loadingCTRL: LoadingController,
    private toastCTRL: ToastController,
    private authService: AuthService,
    private activateRoute: ActivatedRoute,
    private aulaService: AulasService) {

    this.aulasId = this.activateRoute.snapshot.params['id'];

    if (this.aulasId) this.loadAula();
  }


  ngOnInit() { }

  //Carregar Aulas

  loadAula() {

    this.aulaSubscription = this.aulaService.getAula(this.aulasId).subscribe(data => {
      this.aulas = data;
    })

  }

  //Salvar as Aulas
  async salvarAula() {
    await this.presentLoading();

    this.aulas.userId = this.authService.getAuth().currentUser.uid;

    if (this.aulasId) {

    } else {

      this.aulas.createdAt = new Date().getTime()
      try {
        await this.aulaService.addAula(this.aulas);
        await this.loading.dismiss();

        
      } catch (error) {

        this.presentToast('Erro ao Tentar Salvar');
        this.loading.dismiss();

      }
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
