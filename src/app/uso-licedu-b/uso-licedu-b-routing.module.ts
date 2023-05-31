import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsoLiceduBPage } from './uso-licedu-b.page';

const routes: Routes = [
  {
    path: '',
    component: UsoLiceduBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsoLiceduBPageRoutingModule {}
