import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsoLicempresaPageRoutingModule } from './uso-licempresa-routing.module';

import { UsoLicempresaPage } from './uso-licempresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsoLicempresaPageRoutingModule
  ],
  declarations: [UsoLicempresaPage]
})
export class UsoLicempresaPageModule {}
