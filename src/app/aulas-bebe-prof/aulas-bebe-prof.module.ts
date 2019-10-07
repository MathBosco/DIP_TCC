import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AulasBebeProfPage } from './aulas-bebe-prof.page';

const routes: Routes = [
  {
    path: '',
    component: AulasBebeProfPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AulasBebeProfPage]
})
export class AulasBebeProfPageModule {}
