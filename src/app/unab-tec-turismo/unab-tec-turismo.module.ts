import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnabTecTurismoPageRoutingModule } from './unab-tec-turismo-routing.module';

import { UnabTecTurismoPage } from './unab-tec-turismo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnabTecTurismoPageRoutingModule
  ],
  declarations: [UnabTecTurismoPage]
})
export class UnabTecTurismoPageModule {}
