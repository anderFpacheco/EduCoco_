import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CienciasYHumanidadesUMAPageRoutingModule } from './ciencias-y-humanidades-uma-routing.module';

import { CienciasYHumanidadesUMAPage } from './ciencias-y-humanidades-uma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CienciasYHumanidadesUMAPageRoutingModule
  ],
  declarations: [CienciasYHumanidadesUMAPage]
})
export class CienciasYHumanidadesUMAPageModule {}
