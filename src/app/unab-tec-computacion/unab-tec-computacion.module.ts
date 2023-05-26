import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnabTecComputacionPageRoutingModule } from './unab-tec-computacion-routing.module';

import { UnabTecComputacionPage } from './unab-tec-computacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnabTecComputacionPageRoutingModule
  ],
  declarations: [UnabTecComputacionPage]
})
export class UnabTecComputacionPageModule {}
