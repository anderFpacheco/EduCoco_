import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LicPsicoUmaPageRoutingModule } from './lic-psico-uma-routing.module';

import { LicPsicoUmaPage } from './lic-psico-uma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LicPsicoUmaPageRoutingModule
  ],
  declarations: [LicPsicoUmaPage]
})
export class LicPsicoUmaPageModule {}
