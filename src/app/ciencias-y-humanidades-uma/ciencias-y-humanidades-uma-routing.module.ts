import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CienciasYHumanidadesUMAPage } from './ciencias-y-humanidades-uma.page';

const routes: Routes = [
  {
    path: '',
    component: CienciasYHumanidadesUMAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CienciasYHumanidadesUMAPageRoutingModule {}
