import { ArmazenamentoAula } from './../model/armazenamento-aula';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AulasStorageService } from './../providers/aulas/aulas-storage.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-aulas-bebe-prof',
  templateUrl: './aulas-bebe-prof.page.html',
  styleUrls: ['./aulas-bebe-prof.page.scss'],
})
export class AulasBebeProfPage implements OnInit {
  listaAulas: ArmazenamentoAula[];

  constructor(
    private AulasStorageService: AulasStorageService,
    private rota: Router,
    private toast: ToastController
  ) { }

  ngOnInit() { }


  //Atualiza a Lista de Aulas
  public atualizarListaAulas() {
    this.AulasStorageService.listarAulas().then(lista => {
      this.listaAulas = lista;
    });
  }

  //Roda na Transição de Pagina
  ionViewDidEnter() {
    this.atualizarListaAulas();
  }


  //Inserir Contato
  inserirAulas() {
    const navigationExtras: NavigationExtras = {
      state: {
        operacao: 'inserir'
      }
    };

    //Redirecionamento com navigationExtras por parâmetro
    this.rota.navigate(['add-aula'], navigationExtras);
  }
}
