import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsoCienJuridicasPageRoutingModule } from './uso-cien-juridicas-routing.module';

import { UsoCienJuridicasPage } from './uso-cien-juridicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsoCienJuridicasPageRoutingModule
  ],
  declarations: [UsoCienJuridicasPage]
})
export class UsoCienJuridicasPageModule {}
