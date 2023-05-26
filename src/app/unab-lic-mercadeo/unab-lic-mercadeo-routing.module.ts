import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnabLicMercadeoPage } from './unab-lic-mercadeo.page';

const routes: Routes = [
  {
    path: '',
    component: UnabLicMercadeoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnabLicMercadeoPageRoutingModule {}
