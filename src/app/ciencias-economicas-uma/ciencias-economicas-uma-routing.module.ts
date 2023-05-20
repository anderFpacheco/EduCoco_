import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CienciasEconomicasUMAPage } from './ciencias-economicas-uma.page';

const routes: Routes = [
  {
    path: '',
    component: CienciasEconomicasUMAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CienciasEconomicasUMAPageRoutingModule {}
