import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LicInglesUmaPageRoutingModule } from './lic-ingles-uma-routing.module';

import { LicInglesUmaPage } from './lic-ingles-uma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LicInglesUmaPageRoutingModule
  ],
  declarations: [LicInglesUmaPage]
})
export class LicInglesUmaPageModule {}
