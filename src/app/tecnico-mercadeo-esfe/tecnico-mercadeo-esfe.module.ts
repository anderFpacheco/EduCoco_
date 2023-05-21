import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecnicoMercadeoESFEPageRoutingModule } from './tecnico-mercadeo-esfe-routing.module';

import { TecnicoMercadeoESFEPage } from './tecnico-mercadeo-esfe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecnicoMercadeoESFEPageRoutingModule
  ],
  declarations: [TecnicoMercadeoESFEPage]
})
export class TecnicoMercadeoESFEPageModule {}
