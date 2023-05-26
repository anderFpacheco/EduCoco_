import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecSoftUmaPage } from './tec-soft-uma.page';

const routes: Routes = [
  {
    path: '',
    component: TecSoftUmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecSoftUmaPageRoutingModule {}
