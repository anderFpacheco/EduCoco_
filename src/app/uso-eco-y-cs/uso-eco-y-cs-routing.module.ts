import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsoEcoYCsPage } from './uso-eco-y-cs.page';

const routes: Routes = [
  {
    path: '',
    component: UsoEcoYCsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsoEcoYCsPageRoutingModule {}
