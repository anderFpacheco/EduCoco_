import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UNABPageRoutingModule } from './unab-routing.module';

import { UNABPage } from './unab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UNABPageRoutingModule
  ],
  declarations: [UNABPage]
})
export class UNABPageModule {}
