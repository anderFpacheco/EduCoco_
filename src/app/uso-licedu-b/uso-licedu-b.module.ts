import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsoLiceduBPageRoutingModule } from './uso-licedu-b-routing.module';

import { UsoLiceduBPage } from './uso-licedu-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsoLiceduBPageRoutingModule
  ],
  declarations: [UsoLiceduBPage]
})
export class UsoLiceduBPageModule {}
