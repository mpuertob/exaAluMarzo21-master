import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepetirPage } from './repetir.page';

const routes: Routes = [
  {
    path: '',
    component: RepetirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepetirPageRoutingModule {}
