import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsfePage } from './esfe.page';

const routes: Routes = [
  {
    path: '',
    component: EsfePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsfePageRoutingModule {}
