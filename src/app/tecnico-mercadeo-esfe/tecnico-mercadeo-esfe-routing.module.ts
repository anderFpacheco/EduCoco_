import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecnicoMercadeoESFEPage } from './tecnico-mercadeo-esfe.page';

const routes: Routes = [
  {
    path: '',
    component: TecnicoMercadeoESFEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnicoMercadeoESFEPageRoutingModule {}
