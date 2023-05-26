import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnabTecMercadeoPageRoutingModule } from './unab-tec-mercadeo-routing.module';

import { UnabTecMercadeoPage } from './unab-tec-mercadeo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnabTecMercadeoPageRoutingModule
  ],
  declarations: [UnabTecMercadeoPage]
})
export class UnabTecMercadeoPageModule {}
