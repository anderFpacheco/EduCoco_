import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnabLicComputacionPage } from './unab-lic-computacion.page';

const routes: Routes = [
  {
    path: '',
    component: UnabLicComputacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnabLicComputacionPageRoutingModule {}
