import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsoMaestriaNeuroPageRoutingModule } from './uso-maestria-neuro-routing.module';

import { UsoMaestriaNeuroPage } from './uso-maestria-neuro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsoMaestriaNeuroPageRoutingModule
  ],
  declarations: [UsoMaestriaNeuroPage]
})
export class UsoMaestriaNeuroPageModule {}
