import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaAtraccionPageRoutingModule } from './nueva-atraccion-routing.module';

import { NuevaAtraccionPage } from './nueva-atraccion.page';
import { PipePipe } from './pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaAtraccionPageRoutingModule
  ],
  declarations: [NuevaAtraccionPage, PipePipe]
})
export class NuevaAtraccionPageModule {}
