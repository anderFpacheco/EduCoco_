import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsoLiccontaPage } from './uso-licconta.page';

const routes: Routes = [
  {
    path: '',
    component: UsoLiccontaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsoLiccontaPageRoutingModule {}
