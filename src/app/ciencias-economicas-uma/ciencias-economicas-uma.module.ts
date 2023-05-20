import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CienciasEconomicasUMAPageRoutingModule } from './ciencias-economicas-uma-routing.module';

import { CienciasEconomicasUMAPage } from './ciencias-economicas-uma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CienciasEconomicasUMAPageRoutingModule
  ],
  declarations: [CienciasEconomicasUMAPage]
})
export class CienciasEconomicasUMAPageModule {}
