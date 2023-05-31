import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsoLicmatePage } from './uso-licmate.page';

const routes: Routes = [
  {
    path: '',
    component: UsoLicmatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsoLicmatePageRoutingModule {}
