import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LicMercaUmaPageRoutingModule } from './lic-merca-uma-routing.module';

import { LicMercaUmaPage } from './lic-merca-uma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LicMercaUmaPageRoutingModule
  ],
  declarations: [LicMercaUmaPage]
})
export class LicMercaUmaPageModule {}
