import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LicAdmEmpresaUmaPageRoutingModule } from './lic-adm-empresa-uma-routing.module';

import { LicAdmEmpresaUmaPage } from './lic-adm-empresa-uma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LicAdmEmpresaUmaPageRoutingModule
  ],
  declarations: [LicAdmEmpresaUmaPage]
})
export class LicAdmEmpresaUmaPageModule {}
