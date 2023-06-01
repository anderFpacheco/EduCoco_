import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsoLicPsicologiaPage } from './uso-lic-psicologia.page';

const routes: Routes = [
  {
    path: '',
    component: UsoLicPsicologiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsoLicPsicologiaPageRoutingModule {}
