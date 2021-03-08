import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepetirPageRoutingModule } from './repetir-routing.module';

import { RepetirPage } from './repetir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepetirPageRoutingModule
  ],
  declarations: [RepetirPage]
})
export class RepetirPageModule {}
