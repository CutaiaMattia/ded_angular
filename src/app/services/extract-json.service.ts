import { Injectable } from '@angular/core';
import talents from '../json/talenti.json';
import skillsWizard from '../json/competenzeMago.json';
import skillsWarrior from '../json/competenzeGuerriero.json';
import spellsLvl0 from '../json/magieMagoEStregoneLVL0.json';
import spellsLvl1 from '../json/magieMagoEStregoneLVL1.json';
import spellsLvl2 from '../json/magieMagoEStregoneLVL2.json';
import spellsLvl3 from '../json/magieMagoEStregoneLVL3.json';
import spellsLvl4 from '../json/magieMagoEStregoneLVL4.json';
import spellsLvl5 from '../json/magieMagoEStregoneLVL5.json';
import spellsLvl6 from '../json/magieMagoEStregoneLVL6.json';
import spellsLvl7 from '../json/magieMagoEStregoneLVL7.json';
import spellsLvl8 from '../json/magieMagoEStregoneLVL8.json';
import spellsLvl9 from '../json/magieMagoEStregoneLVL9.json';
import manualLinks from '../json/manualLinks.json';

@Injectable({
  providedIn: 'root',
})
export class ExtractJsonService {
  constructor() {}

  objSkillsWizard: {
    competenza: string;
    descrizione: string[];
  }[] = skillsWizard;

  objSkillsWarrior: {
    competenza: string;
    descrizione: string[];
  }[] = skillsWarrior;

  objTalents: {
    titolo: string;
    prerequisito: string[];
    beneficio: string;
  }[] = talents;

   objSpells: {
    nome: string;
    descrizione: string;
    scuola: string;
  }[]


  objManualLinks :{
    name: string;
    url: string;
  }[] = manualLinks;

 selectSpellLvl(lvl:number) {
    switch(lvl){
      case 0:{
       return  spellsLvl0
      }
      case 1:{
        return spellsLvl1     }
      case 2:{
        return  spellsLvl2
      }
      case 3:{
        return  spellsLvl3
      }
      case 4:{
        return spellsLvl4
      }
      case 5:{
        return spellsLvl5
      }
      case 6:{
        return  spellsLvl6
      }
      case 7:{
        return spellsLvl7
      }
      case 8:{
        return  spellsLvl8
      }
      case 9:{
        return  spellsLvl9
      }

      default: return null;
    }

  }
}
