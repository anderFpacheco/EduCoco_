import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnabLicComputacionPageRoutingModule } from './unab-lic-computacion-routing.module';

import { UnabLicComputacionPage } from './unab-lic-computacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnabLicComputacionPageRoutingModule
  ],
  declarations: [UnabLicComputacionPage]
})
export class UnabLicComputacionPageModule {}
