import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LicContaUmaPageRoutingModule } from './lic-conta-uma-routing.module';

import { LicContaUmaPage } from './lic-conta-uma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LicContaUmaPageRoutingModule
  ],
  declarations: [LicContaUmaPage]
})
export class LicContaUmaPageModule {}
