import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaestriaUmaPageRoutingModule } from './maestria-uma-routing.module';

import { MaestriaUmaPage } from './maestria-uma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaestriaUmaPageRoutingModule
  ],
  declarations: [MaestriaUmaPage]
})
export class MaestriaUmaPageModule {}
