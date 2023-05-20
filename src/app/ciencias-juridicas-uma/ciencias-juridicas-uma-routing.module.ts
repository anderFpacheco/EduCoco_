import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CienciasJuridicasUMAPage } from './ciencias-juridicas-uma.page';

const routes: Routes = [
  {
    path: '',
    component: CienciasJuridicasUMAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CienciasJuridicasUMAPageRoutingModule {}
