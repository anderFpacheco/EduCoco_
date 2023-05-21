import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnabCienciasEconomicasPageRoutingModule } from './unab-ciencias-economicas-routing.module';

import { UnabCienciasEconomicasPage } from './unab-ciencias-economicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnabCienciasEconomicasPageRoutingModule
  ],
  declarations: [UnabCienciasEconomicasPage]
})
export class UnabCienciasEconomicasPageModule {}
