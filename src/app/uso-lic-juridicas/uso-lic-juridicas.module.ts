import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsoLicJuridicasPageRoutingModule } from './uso-lic-juridicas-routing.module';

import { UsoLicJuridicasPage } from './uso-lic-juridicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsoLicJuridicasPageRoutingModule
  ],
  declarations: [UsoLicJuridicasPage]
})
export class UsoLicJuridicasPageModule {}
