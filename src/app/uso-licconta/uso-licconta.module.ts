import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsoLiccontaPageRoutingModule } from './uso-licconta-routing.module';

import { UsoLiccontaPage } from './uso-licconta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsoLiccontaPageRoutingModule
  ],
  declarations: [UsoLiccontaPage]
})
export class UsoLiccontaPageModule {}
