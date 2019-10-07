import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' ,  },
  { path: 'lg-prof', loadChildren: './lg-prof/lg-prof.module#LgProfPageModule' },
  { path: 'lg-alun', loadChildren: './lg-alun/lg-alun.module#LgAlunPageModule' , canActivate: [LoginGuard]},
  { path: 'cadas', loadChildren: './cadas/cadas.module#CadasPageModule' },
  { path: 'home-prof', loadChildren: './home-prof/home-prof.module#HomeProfPageModule' },
  { path: 'planeja-prof', loadChildren: './planeja-prof/planeja-prof.module#PlanejaProfPageModule' },
  { path: 'home-alun', loadChildren: './home-alun/home-alun.module#HomeAlunPageModule' , canActivate: [AuthGuard]},
  { path: 'aula-alu', loadChildren: './aula-alu/aula-alu.module#AulaAluPageModule' },
  { path: 'plan-prof', loadChildren: './plan-prof/plan-prof.module#PlanProfPageModule' },
  { path: 'edit-prof', loadChildren: './edit-prof/edit-prof.module#EditProfPageModule' },
  { path: 'modal-prof', loadChildren: './modal-prof/modal-prof.module#ModalProfPageModule' },
  { path: 'aulas-bebe-prof', loadChildren: './aulas-bebe-prof/aulas-bebe-prof.module#AulasBebeProfPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
