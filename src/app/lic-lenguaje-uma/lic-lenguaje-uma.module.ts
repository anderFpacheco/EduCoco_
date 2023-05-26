import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LicLenguajeUmaPageRoutingModule } from './lic-lenguaje-uma-routing.module';

import { LicLenguajeUmaPage } from './lic-lenguaje-uma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LicLenguajeUmaPageRoutingModule
  ],
  declarations: [LicLenguajeUmaPage]
})
export class LicLenguajeUmaPageModule {}
