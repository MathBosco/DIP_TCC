import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'lg-prof', loadChildren: './lg-prof/lg-prof.module#LgProfPageModule' },  { path: 'lg-alun', loadChildren: './lg-alun/lg-alun.module#LgAlunPageModule' },
  { path: 'cadas', loadChildren: './cadas/cadas.module#CadasPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
