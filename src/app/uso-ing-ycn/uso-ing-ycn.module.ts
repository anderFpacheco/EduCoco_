import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsoIngYcnPageRoutingModule } from './uso-ing-ycn-routing.module';

import { UsoIngYcnPage } from './uso-ing-ycn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsoIngYcnPageRoutingModule
  ],
  declarations: [UsoIngYcnPage]
})
export class UsoIngYcnPageModule {}
