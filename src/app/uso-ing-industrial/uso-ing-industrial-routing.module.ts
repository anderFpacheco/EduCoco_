import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsoIngIndustrialPage } from './uso-ing-industrial.page';

const routes: Routes = [
  {
    path: '',
    component: UsoIngIndustrialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsoIngIndustrialPageRoutingModule {}
