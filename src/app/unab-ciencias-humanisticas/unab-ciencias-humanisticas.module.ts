import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnabCienciasHumanisticasPageRoutingModule } from './unab-ciencias-humanisticas-routing.module';

import { UnabCienciasHumanisticasPage } from './unab-ciencias-humanisticas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnabCienciasHumanisticasPageRoutingModule
  ],
  declarations: [UnabCienciasHumanisticasPage]
})
export class UnabCienciasHumanisticasPageModule {}
