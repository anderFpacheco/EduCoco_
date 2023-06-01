import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsoLicJuridicasPage } from './uso-lic-juridicas.page';

const routes: Routes = [
  {
    path: '',
    component: UsoLicJuridicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsoLicJuridicasPageRoutingModule {}
