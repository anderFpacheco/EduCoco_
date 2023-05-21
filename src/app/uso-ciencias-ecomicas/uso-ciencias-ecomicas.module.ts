import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsoCienciasEcomicasPageRoutingModule } from './uso-ciencias-ecomicas-routing.module';

import { UsoCienciasEcomicasPage } from './uso-ciencias-ecomicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsoCienciasEcomicasPageRoutingModule
  ],
  declarations: [UsoCienciasEcomicasPage]
})
export class UsoCienciasEcomicasPageModule {}
