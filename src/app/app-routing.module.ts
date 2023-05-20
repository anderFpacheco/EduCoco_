import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'uso',
    loadChildren: () => import('./uso/uso.module').then( m => m.UsoPageModule)
  },
  {
    path: 'unab',
    loadChildren: () => import('./unab/unab.module').then( m => m.UNABPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'esfe',
    loadChildren: () => import('./esfe/esfe.module').then( m => m.EsfePageModule)
  },
  {
    path: 'uma',
    loadChildren: () => import('./uma/uma.module').then( m => m.UmaPageModule)
  },
  {
    path: 'ciencias-economicas-uma',
    loadChildren: () => import('./ciencias-economicas-uma/ciencias-economicas-uma.module').then( m => m.CienciasEconomicasUmaPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
