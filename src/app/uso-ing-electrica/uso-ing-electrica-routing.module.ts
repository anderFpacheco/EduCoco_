import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsoIngElectricaPage } from './uso-ing-electrica.page';

const routes: Routes = [
  {
    path: '',
    component: UsoIngElectricaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsoIngElectricaPageRoutingModule {}
