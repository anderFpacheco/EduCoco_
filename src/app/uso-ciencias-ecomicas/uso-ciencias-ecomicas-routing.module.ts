import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsoCienciasEcomicasPage } from './uso-ciencias-ecomicas.page';

const routes: Routes = [
  {
    path: '',
    component: UsoCienciasEcomicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsoCienciasEcomicasPageRoutingModule {}
