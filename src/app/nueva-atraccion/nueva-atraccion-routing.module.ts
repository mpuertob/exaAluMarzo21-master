import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaAtraccionPage } from './nueva-atraccion.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaAtraccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaAtraccionPageRoutingModule {}
