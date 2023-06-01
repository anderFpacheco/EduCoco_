import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsoLicPsicologiaPageRoutingModule } from './uso-lic-psicologia-routing.module';

import { UsoLicPsicologiaPage } from './uso-lic-psicologia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsoLicPsicologiaPageRoutingModule
  ],
  declarations: [UsoLicPsicologiaPage]
})
export class UsoLicPsicologiaPageModule {}
