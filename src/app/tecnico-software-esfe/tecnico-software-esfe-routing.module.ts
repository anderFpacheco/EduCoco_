import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecnicoSoftwareESFEPage } from './tecnico-software-esfe.page';

const routes: Routes = [
  {
    path: '',
    component: TecnicoSoftwareESFEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnicoSoftwareESFEPageRoutingModule {}
