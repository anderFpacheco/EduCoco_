import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsoMaestriaNeuroPage } from './uso-maestria-neuro.page';

const routes: Routes = [
  {
    path: '',
    component: UsoMaestriaNeuroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsoMaestriaNeuroPageRoutingModule {}
