import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsoLicmatePageRoutingModule } from './uso-licmate-routing.module';

import { UsoLicmatePage } from './uso-licmate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsoLicmatePageRoutingModule
  ],
  declarations: [UsoLicmatePage]
})
export class UsoLicmatePageModule {}
