import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnabCienciasEconomicasPage } from './unab-ciencias-economicas.page';

const routes: Routes = [
  {
    path: '',
    component: UnabCienciasEconomicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnabCienciasEconomicasPageRoutingModule {}
