import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsoLicempresaPage } from './uso-licempresa.page';

const routes: Routes = [
  {
    path: '',
    component: UsoLicempresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsoLicempresaPageRoutingModule {}
