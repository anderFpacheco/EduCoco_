import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnabLicSaludPage } from './unab-lic-salud.page';

const routes: Routes = [
  {
    path: '',
    component: UnabLicSaludPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnabLicSaludPageRoutingModule {}
