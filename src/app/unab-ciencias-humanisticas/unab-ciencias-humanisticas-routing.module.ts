import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnabCienciasHumanisticasPage } from './unab-ciencias-humanisticas.page';

const routes: Routes = [
  {
    path: '',
    component: UnabCienciasHumanisticasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnabCienciasHumanisticasPageRoutingModule {}
