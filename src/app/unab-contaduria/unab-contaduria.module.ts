import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnabContaduriaPageRoutingModule } from './unab-contaduria-routing.module';

import { UnabContaduriaPage } from './unab-contaduria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnabContaduriaPageRoutingModule
  ],
  declarations: [UnabContaduriaPage]
})
export class UnabContaduriaPageModule {}
