import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnabTecSaludPageRoutingModule } from './unab-tec-salud-routing.module';

import { UnabTecSaludPage } from './unab-tec-salud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnabTecSaludPageRoutingModule
  ],
  declarations: [UnabTecSaludPage]
})
export class UnabTecSaludPageModule {}
