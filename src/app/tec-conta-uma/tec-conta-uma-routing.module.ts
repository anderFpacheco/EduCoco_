import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecContaUmaPage } from './tec-conta-uma.page';

const routes: Routes = [
  {
    path: '',
    component: TecContaUmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecContaUmaPageRoutingModule {}
