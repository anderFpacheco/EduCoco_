import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecnicoTurismoESFEPageRoutingModule } from './tecnico-turismo-esfe-routing.module';

import { TecnicoTurismoESFEPage } from './tecnico-turismo-esfe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecnicoTurismoESFEPageRoutingModule
  ],
  declarations: [TecnicoTurismoESFEPage]
})
export class TecnicoTurismoESFEPageModule {}
