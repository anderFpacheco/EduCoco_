import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UmaPageRoutingModule } from './uma-routing.module';

import { UmaPage } from './uma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UmaPageRoutingModule
  ],
  declarations: [UmaPage]
})
export class UmaPageModule {}
