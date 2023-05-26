import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnabLicComunicacionPage } from './unab-lic-comunicacion.page';

const routes: Routes = [
  {
    path: '',
    component: UnabLicComunicacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnabLicComunicacionPageRoutingModule {}
