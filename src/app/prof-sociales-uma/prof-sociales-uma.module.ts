import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfSocialesUmaPageRoutingModule } from './prof-sociales-uma-routing.module';

import { ProfSocialesUmaPage } from './prof-sociales-uma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfSocialesUmaPageRoutingModule
  ],
  declarations: [ProfSocialesUmaPage]
})
export class ProfSocialesUmaPageModule {}
