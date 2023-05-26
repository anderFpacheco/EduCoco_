import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnabLicTurismoPage } from './unab-lic-turismo.page';

const routes: Routes = [
  {
    path: '',
    component: UnabLicTurismoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnabLicTurismoPageRoutingModule {}
