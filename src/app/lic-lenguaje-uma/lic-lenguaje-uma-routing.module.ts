import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicLenguajeUmaPage } from './lic-lenguaje-uma.page';

const routes: Routes = [
  {
    path: '',
    component: LicLenguajeUmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicLenguajeUmaPageRoutingModule {}
