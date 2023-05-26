import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfParvulaUmaPage } from './prof-parvula-uma.page';

const routes: Routes = [
  {
    path: '',
    component: ProfParvulaUmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfParvulaUmaPageRoutingModule {}
