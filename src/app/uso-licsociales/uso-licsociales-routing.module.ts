import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsoLicsocialesPage } from './uso-licsociales.page';

const routes: Routes = [
  {
    path: '',
    component: UsoLicsocialesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsoLicsocialesPageRoutingModule {}
