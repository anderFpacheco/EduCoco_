import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LicJuridiUmaPageRoutingModule } from './lic-juridi-uma-routing.module';

import { LicJuridiUmaPage } from './lic-juridi-uma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LicJuridiUmaPageRoutingModule
  ],
  declarations: [LicJuridiUmaPage]
})
export class LicJuridiUmaPageModule {}
