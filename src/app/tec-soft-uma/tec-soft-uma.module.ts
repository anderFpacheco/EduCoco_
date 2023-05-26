import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecSoftUmaPageRoutingModule } from './tec-soft-uma-routing.module';

import { TecSoftUmaPage } from './tec-soft-uma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecSoftUmaPageRoutingModule
  ],
  declarations: [TecSoftUmaPage]
})
export class TecSoftUmaPageModule {}
