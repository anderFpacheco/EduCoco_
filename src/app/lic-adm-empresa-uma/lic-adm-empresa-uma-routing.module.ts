import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicAdmEmpresaUmaPage } from './lic-adm-empresa-uma.page';

const routes: Routes = [
  {
    path: '',
    component: LicAdmEmpresaUmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicAdmEmpresaUmaPageRoutingModule {}
