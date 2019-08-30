import { CadasPage } from './../cadas/cadas.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { IonicModule } from '@ionic/angular';

import { LgAlunPage } from './lg-alun.page';

const routes: Routes = [
  {
    path: '',
    component: LgAlunPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule ,  
    RouterModule.forChild(routes)
  ],
providers: [

CadasPage

] , 

  declarations: [LgAlunPage]
})
export class LgAlunPageModule {}
