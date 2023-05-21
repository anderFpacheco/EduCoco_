import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnabCienciasSaludPage } from './unab-ciencias-salud.page';

const routes: Routes = [
  {
    path: '',
    component: UnabCienciasSaludPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnabCienciasSaludPageRoutingModule {}
