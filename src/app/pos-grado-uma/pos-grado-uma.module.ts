import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PosGradoUMAPageRoutingModule } from './pos-grado-uma-routing.module';

import { PosGradoUMAPage } from './pos-grado-uma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PosGradoUMAPageRoutingModule
  ],
  declarations: [PosGradoUMAPage]
})
export class PosGradoUMAPageModule {}
