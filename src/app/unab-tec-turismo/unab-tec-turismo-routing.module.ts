import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnabTecTurismoPage } from './unab-tec-turismo.page';

const routes: Routes = [
  {
    path: '',
    component: UnabTecTurismoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnabTecTurismoPageRoutingModule {}
