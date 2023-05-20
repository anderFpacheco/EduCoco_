import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CienciasJuridicasUMAPageRoutingModule } from './ciencias-juridicas-uma-routing.module';

import { CienciasJuridicasUMAPage } from './ciencias-juridicas-uma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CienciasJuridicasUMAPageRoutingModule
  ],
  declarations: [CienciasJuridicasUMAPage]
})
export class CienciasJuridicasUMAPageModule {}
