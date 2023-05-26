import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicInglesUmaPage } from './lic-ingles-uma.page';

const routes: Routes = [
  {
    path: '',
    component: LicInglesUmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicInglesUmaPageRoutingModule {}
