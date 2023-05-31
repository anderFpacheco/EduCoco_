import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsoIngAgroPageRoutingModule } from './uso-ing-agro-routing.module';

import { UsoIngAgroPage } from './uso-ing-agro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsoIngAgroPageRoutingModule
  ],
  declarations: [UsoIngAgroPage]
})
export class UsoIngAgroPageModule {}
