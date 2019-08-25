import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'lg-prof', loadChildren: './lg-prof/lg-prof.module#LgProfPageModule' },  { path: 'lg-alun', loadChildren: './lg-alun/lg-alun.module#LgAlunPageModule' },
  { path: 'cadas', loadChildren: './cadas/cadas.module#CadasPageModule' },
  { path: 'home-prof', loadChildren: './home-prof/home-prof.module#HomeProfPageModule' },
  { path: 'planeja-prof', loadChildren: './planeja-prof/planeja-prof.module#PlanejaProfPageModule' },
  { path: 'home-alun', loadChildren: './home-alun/home-alun.module#HomeAlunPageModule' },
  { path: 'aula-alu', loadChildren: './aula-alu/aula-alu.module#AulaAluPageModule' },
  { path: 'plan-prof', loadChildren: './plan-prof/plan-prof.module#PlanProfPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
