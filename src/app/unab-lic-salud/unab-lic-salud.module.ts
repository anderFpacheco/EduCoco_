import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnabLicSaludPageRoutingModule } from './unab-lic-salud-routing.module';

import { UnabLicSaludPage } from './unab-lic-salud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnabLicSaludPageRoutingModule
  ],
  declarations: [UnabLicSaludPage]
})
export class UnabLicSaludPageModule {}
