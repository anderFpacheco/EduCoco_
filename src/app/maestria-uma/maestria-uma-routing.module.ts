import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaestriaUmaPage } from './maestria-uma.page';

const routes: Routes = [
  {
    path: '',
    component: MaestriaUmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaestriaUmaPageRoutingModule {}
