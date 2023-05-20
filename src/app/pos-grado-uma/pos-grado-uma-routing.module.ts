import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PosGradoUMAPage } from './pos-grado-uma.page';

const routes: Routes = [
  {
    path: '',
    component: PosGradoUMAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosGradoUMAPageRoutingModule {}
