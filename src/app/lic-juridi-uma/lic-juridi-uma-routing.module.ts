import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicJuridiUmaPage } from './lic-juridi-uma.page';

const routes: Routes = [
  {
    path: '',
    component: LicJuridiUmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicJuridiUmaPageRoutingModule {}
