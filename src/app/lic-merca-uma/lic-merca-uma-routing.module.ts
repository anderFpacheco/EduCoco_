import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicMercaUmaPage } from './lic-merca-uma.page';

const routes: Routes = [
  {
    path: '',
    component: LicMercaUmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicMercaUmaPageRoutingModule {}
