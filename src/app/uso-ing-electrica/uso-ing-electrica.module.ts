import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsoIngElectricaPageRoutingModule } from './uso-ing-electrica-routing.module';

import { UsoIngElectricaPage } from './uso-ing-electrica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsoIngElectricaPageRoutingModule
  ],
  declarations: [UsoIngElectricaPage]
})
export class UsoIngElectricaPageModule {}
