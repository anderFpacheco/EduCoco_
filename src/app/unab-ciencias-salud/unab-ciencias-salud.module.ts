import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnabCienciasSaludPageRoutingModule } from './unab-ciencias-salud-routing.module';

import { UnabCienciasSaludPage } from './unab-ciencias-salud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnabCienciasSaludPageRoutingModule
  ],
  declarations: [UnabCienciasSaludPage]
})
export class UnabCienciasSaludPageModule {}
