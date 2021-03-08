import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class AtraccionesService {
  constructor(private Storage: Storage) {
    console.log(this.Storage.length);
    
  }
}
