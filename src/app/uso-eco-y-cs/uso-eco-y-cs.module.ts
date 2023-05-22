import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsoEcoYCsPageRoutingModule } from './uso-eco-y-cs-routing.module';

import { UsoEcoYCsPage } from './uso-eco-y-cs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsoEcoYCsPageRoutingModule
  ],
  declarations: [UsoEcoYCsPage]
})
export class UsoEcoYCsPageModule {}
