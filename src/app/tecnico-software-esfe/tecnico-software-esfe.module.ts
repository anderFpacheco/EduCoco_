import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecnicoSoftwareESFEPageRoutingModule } from './tecnico-software-esfe-routing.module';

import { TecnicoSoftwareESFEPage } from './tecnico-software-esfe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecnicoSoftwareESFEPageRoutingModule
  ],
  declarations: [TecnicoSoftwareESFEPage]
})
export class TecnicoSoftwareESFEPageModule {}
