import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicInfoUmaPage } from './lic-info-uma.page';

const routes: Routes = [
  {
    path: '',
    component: LicInfoUmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicInfoUmaPageRoutingModule {}
