import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnabLicAdministracionPage } from './unab-lic-administracion.page';

const routes: Routes = [
  {
    path: '',
    component: UnabLicAdministracionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnabLicAdministracionPageRoutingModule {}
