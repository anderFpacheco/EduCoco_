import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfSocialesUmaPage } from './prof-sociales-uma.page';

const routes: Routes = [
  {
    path: '',
    component: ProfSocialesUmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfSocialesUmaPageRoutingModule {}
