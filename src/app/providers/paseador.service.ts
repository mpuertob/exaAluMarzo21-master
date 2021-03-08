import { Stepcounter } from '@ionic-native/stepcounter/ngx';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaseadorService {

  constructor(private stepcounter:Stepcounter) { 
    console.log(this.stepcounter);
    
  }
}
