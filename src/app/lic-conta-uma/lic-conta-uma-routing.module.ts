import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicContaUmaPage } from './lic-conta-uma.page';

const routes: Routes = [
  {
    path: '',
    component: LicContaUmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicContaUmaPageRoutingModule {}
