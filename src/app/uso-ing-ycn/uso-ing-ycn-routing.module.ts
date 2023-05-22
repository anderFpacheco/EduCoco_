import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsoIngYcnPage } from './uso-ing-ycn.page';

const routes: Routes = [
  {
    path: '',
    component: UsoIngYcnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsoIngYcnPageRoutingModule {}
