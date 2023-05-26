import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnabLicAdministracionPageRoutingModule } from './unab-lic-administracion-routing.module';

import { UnabLicAdministracionPage } from './unab-lic-administracion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnabLicAdministracionPageRoutingModule
  ],
  declarations: [UnabLicAdministracionPage]
})
export class UnabLicAdministracionPageModule {}
