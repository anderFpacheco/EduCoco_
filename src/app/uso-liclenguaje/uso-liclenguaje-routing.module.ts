import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsoLiclenguajePage } from './uso-liclenguaje.page';

const routes: Routes = [
  {
    path: '',
    component: UsoLiclenguajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsoLiclenguajePageRoutingModule {}
