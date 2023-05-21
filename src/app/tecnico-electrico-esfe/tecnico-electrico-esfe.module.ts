import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecnicoElectricoESFEPageRoutingModule } from './tecnico-electrico-esfe-routing.module';

import { TecnicoElectricoESFEPage } from './tecnico-electrico-esfe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecnicoElectricoESFEPageRoutingModule
  ],
  declarations: [TecnicoElectricoESFEPage]
})
export class TecnicoElectricoESFEPageModule {}
