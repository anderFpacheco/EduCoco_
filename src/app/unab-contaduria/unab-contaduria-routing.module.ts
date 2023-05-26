import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnabContaduriaPage } from './unab-contaduria.page';

const routes: Routes = [
  {
    path: '',
    component: UnabContaduriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnabContaduriaPageRoutingModule {}
