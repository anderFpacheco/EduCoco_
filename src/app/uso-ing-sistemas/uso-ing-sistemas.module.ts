import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsoIngSistemasPageRoutingModule } from './uso-ing-sistemas-routing.module';

import { UsoIngSistemasPage } from './uso-ing-sistemas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsoIngSistemasPageRoutingModule
  ],
  declarations: [UsoIngSistemasPage]
})
export class UsoIngSistemasPageModule {}
