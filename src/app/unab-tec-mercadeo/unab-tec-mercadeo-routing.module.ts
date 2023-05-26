import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnabTecMercadeoPage } from './unab-tec-mercadeo.page';

const routes: Routes = [
  {
    path: '',
    component: UnabTecMercadeoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnabTecMercadeoPageRoutingModule {}
