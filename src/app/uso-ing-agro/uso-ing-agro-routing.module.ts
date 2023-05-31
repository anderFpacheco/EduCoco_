import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsoIngAgroPage } from './uso-ing-agro.page';

const routes: Routes = [
  {
    path: '',
    component: UsoIngAgroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsoIngAgroPageRoutingModule {}
