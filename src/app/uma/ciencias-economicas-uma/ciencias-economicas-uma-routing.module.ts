import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CienciasEconomicasUmaPage } from './ciencias-economicas-uma.page';

const routes: Routes = [
  {
    path: '',
    component: CienciasEconomicasUmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CienciasEconomicasUmaPageRoutingModule {}
