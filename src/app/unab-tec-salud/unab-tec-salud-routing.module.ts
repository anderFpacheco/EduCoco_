import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnabTecSaludPage } from './unab-tec-salud.page';

const routes: Routes = [
  {
    path: '',
    component: UnabTecSaludPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnabTecSaludPageRoutingModule {}
