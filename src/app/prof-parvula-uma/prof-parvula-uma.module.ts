import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfParvulaUmaPageRoutingModule } from './prof-parvula-uma-routing.module';

import { ProfParvulaUmaPage } from './prof-parvula-uma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfParvulaUmaPageRoutingModule
  ],
  declarations: [ProfParvulaUmaPage]
})
export class ProfParvulaUmaPageModule {}
