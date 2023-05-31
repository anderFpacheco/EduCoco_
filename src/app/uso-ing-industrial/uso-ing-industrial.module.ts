import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsoIngIndustrialPageRoutingModule } from './uso-ing-industrial-routing.module';

import { UsoIngIndustrialPage } from './uso-ing-industrial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsoIngIndustrialPageRoutingModule
  ],
  declarations: [UsoIngIndustrialPage]
})
export class UsoIngIndustrialPageModule {}
