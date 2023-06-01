import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsoProfEduBPage } from './uso-prof-edu-b.page';

const routes: Routes = [
  {
    path: '',
    component: UsoProfEduBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsoProfEduBPageRoutingModule {}
