import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecContaUmaPageRoutingModule } from './tec-conta-uma-routing.module';

import { TecContaUmaPage } from './tec-conta-uma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecContaUmaPageRoutingModule
  ],
  declarations: [TecContaUmaPage]
})
export class TecContaUmaPageModule {}
