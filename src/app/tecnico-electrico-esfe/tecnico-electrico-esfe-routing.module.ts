import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecnicoElectricoESFEPage } from './tecnico-electrico-esfe.page';

const routes: Routes = [
  {
    path: '',
    component: TecnicoElectricoESFEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnicoElectricoESFEPageRoutingModule {}
