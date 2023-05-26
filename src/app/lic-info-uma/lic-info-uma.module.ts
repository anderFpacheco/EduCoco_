import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LicInfoUmaPageRoutingModule } from './lic-info-uma-routing.module';

import { LicInfoUmaPage } from './lic-info-uma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LicInfoUmaPageRoutingModule
  ],
  declarations: [LicInfoUmaPage]
})
export class LicInfoUmaPageModule {}
