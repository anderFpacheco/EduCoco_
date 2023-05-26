import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnabLicComunicacionPageRoutingModule } from './unab-lic-comunicacion-routing.module';

import { UnabLicComunicacionPage } from './unab-lic-comunicacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnabLicComunicacionPageRoutingModule
  ],
  declarations: [UnabLicComunicacionPage]
})
export class UnabLicComunicacionPageModule {}
