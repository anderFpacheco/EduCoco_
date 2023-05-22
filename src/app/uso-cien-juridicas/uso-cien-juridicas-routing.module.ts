import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsoCienJuridicasPage } from './uso-cien-juridicas.page';

const routes: Routes = [
  {
    path: '',
    component: UsoCienJuridicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsoCienJuridicasPageRoutingModule {}
