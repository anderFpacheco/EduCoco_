import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UNABPage } from './unab.page';

const routes: Routes = [
  {
    path: '',
    component: UNABPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UNABPageRoutingModule {}
