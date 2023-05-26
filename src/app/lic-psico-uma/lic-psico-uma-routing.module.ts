import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicPsicoUmaPage } from './lic-psico-uma.page';

const routes: Routes = [
  {
    path: '',
    component: LicPsicoUmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicPsicoUmaPageRoutingModule {}
