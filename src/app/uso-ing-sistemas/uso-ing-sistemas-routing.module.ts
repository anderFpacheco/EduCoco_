import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsoIngSistemasPage } from './uso-ing-sistemas.page';

const routes: Routes = [
  {
    path: '',
    component: UsoIngSistemasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsoIngSistemasPageRoutingModule {}
