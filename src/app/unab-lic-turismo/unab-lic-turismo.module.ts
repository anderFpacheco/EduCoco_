import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnabLicTurismoPageRoutingModule } from './unab-lic-turismo-routing.module';

import { UnabLicTurismoPage } from './unab-lic-turismo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnabLicTurismoPageRoutingModule
  ],
  declarations: [UnabLicTurismoPage]
})
export class UnabLicTurismoPageModule {}
