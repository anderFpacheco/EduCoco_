import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsoLiclenguajePageRoutingModule } from './uso-liclenguaje-routing.module';

import { UsoLiclenguajePage } from './uso-liclenguaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsoLiclenguajePageRoutingModule
  ],
  declarations: [UsoLiclenguajePage]
})
export class UsoLiclenguajePageModule {}
