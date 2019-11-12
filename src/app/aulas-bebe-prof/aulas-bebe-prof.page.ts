import { AulasService } from './../services/aulas.service';
import { Aulas } from './../interfaces/aulas';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-aulas-bebe-prof',
  templateUrl: './aulas-bebe-prof.page.html',
  styleUrls: ['./aulas-bebe-prof.page.scss'],
})
export class AulasBebeProfPage implements OnInit {
  public aulas = new Array<Aulas>();
  private aulasSubscription: Subscription;

  constructor(private aulasService : AulasService) { 
    this.aulasSubscription = this.aulasService.getAulas().subscribe(data => {
      this.aulas = data;
    })
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.aulasSubscription.unsubscribe();
  }
}
