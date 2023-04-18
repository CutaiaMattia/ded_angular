import { Injectable } from '@angular/core';
import { Personaggio } from '../models/personaggio';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  pg:Personaggio;

  createPg( nomePG: string,
    cognomePG: string,
    razza: string,
    classe: string,
    livello: number,
    forza: number,
    destrezza: number,
    costituzione: number,
    intelligenza : number,
    sagezza : number,
    carisma :number){

      this.pg = new Personaggio(nomePG,cognomePG,razza,classe,livello,forza,destrezza,costituzione,intelligenza,sagezza,carisma);
      console.log(this.pg)
  }
}
