import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecnicoTurismoESFEPage } from './tecnico-turismo-esfe.page';

const routes: Routes = [
  {
    path: '',
    component: TecnicoTurismoESFEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnicoTurismoESFEPageRoutingModule {}
