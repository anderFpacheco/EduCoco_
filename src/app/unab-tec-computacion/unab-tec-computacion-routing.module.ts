import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnabTecComputacionPage } from './unab-tec-computacion.page';

const routes: Routes = [
  {
    path: '',
    component: UnabTecComputacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnabTecComputacionPageRoutingModule {}
