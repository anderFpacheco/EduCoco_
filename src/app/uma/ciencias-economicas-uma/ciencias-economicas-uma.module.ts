import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CienciasEconomicasUmaPageRoutingModule } from './ciencias-economicas-uma-routing.module';

import { CienciasEconomicasUmaPage } from './ciencias-economicas-uma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CienciasEconomicasUmaPageRoutingModule
  ],
  declarations: [CienciasEconomicasUmaPage]
})
export class CienciasEconomicasUmaPageModule {}
