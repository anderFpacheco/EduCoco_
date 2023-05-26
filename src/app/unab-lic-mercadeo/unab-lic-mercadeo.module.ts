import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnabLicMercadeoPageRoutingModule } from './unab-lic-mercadeo-routing.module';

import { UnabLicMercadeoPage } from './unab-lic-mercadeo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnabLicMercadeoPageRoutingModule
  ],
  declarations: [UnabLicMercadeoPage]
})
export class UnabLicMercadeoPageModule {}
