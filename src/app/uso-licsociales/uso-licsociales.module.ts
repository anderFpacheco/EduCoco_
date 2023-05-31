import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsoLicsocialesPageRoutingModule } from './uso-licsociales-routing.module';

import { UsoLicsocialesPage } from './uso-licsociales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsoLicsocialesPageRoutingModule
  ],
  declarations: [UsoLicsocialesPage]
})
export class UsoLicsocialesPageModule {}
