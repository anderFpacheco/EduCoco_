import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsoProfEduBPageRoutingModule } from './uso-prof-edu-b-routing.module';

import { UsoProfEduBPage } from './uso-prof-edu-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsoProfEduBPageRoutingModule
  ],
  declarations: [UsoProfEduBPage]
})
export class UsoProfEduBPageModule {}
