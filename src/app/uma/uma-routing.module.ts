import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UmaPage } from './uma.page';

const routes: Routes = [
  {
    path: '',
    component: UmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UmaPageRoutingModule {}
