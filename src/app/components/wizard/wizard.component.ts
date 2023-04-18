import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ExtractJsonService } from 'src/app/services/extract-json.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit{
  constructor(private route: ActivatedRoute,
     private lvl:ExtractJsonService,
     private routeNavigate : Router,
     private data : DataService){

  }

  pg = this.data.pg;

  ca :number =Math.trunc(( Number(this.pg.destrezza)-10 )/2 +10 )
  iniziativa : number = Math.trunc((Number(this.pg.destrezza)-10)/2)
  spells:any;
  lvlPage:number;
  isSpellsPage: boolean;
  lvlPG:number
  spellsForDay: any = [
    [],
    [3,1],
    [4,2],
    [4,2,1],
    [4,3,2],
    [4,3,2,1],
    [4,3,3,2],
    [4,4,3,2,1],
    [4,4,3,3,2],
    [4,4,4,3,2,1],
    [4,4,4,3,3,2],
    [4,4,4,4,3,2,1],
    [4,4,4,4,3,3,2],
    [4,4,4,4,4,3,2,1],
    [4,4,4,4,4,3,3,2],
    [4,4,4,4,4,4,3,2,1],
    [4,4,4,4,4,4,3,3,2],
    [4,4,4,4,4,4,4,3,2,1],
    [4,4,4,4,4,4,4,3,3,2],
    [4,4,4,4,4,4,4,4,3,3],
    [4,4,4,4,4,4,4,4,4,4]
  ];

  Bab: any = [
    [],
    [0],
    [1],
    [1],
    [2],
    [2],
    [3],
    [3],
    [4],
    [4],
    [5],
    [5],
    [6,1],
    [6,1],
    [7,2],
    [7,2],
    [8,3],
    [8,3],
    [9,4],
    [9,4],
    [10,5]
  ]

  ts: any = [
    [],
    [0,0,2],
    [0,0,3],
    [1,1,3],
    [1,1,4],
    [1,1,4],
    [2,2,5],
    [2,2,5],
    [2,2,6],
    [3,3,6],
    [3,3,7],
    [3,3,7],
    [4,4,8],
    [4,4,8],
    [4,4,9],
    [5,5,9],
    [5,5,10],
    [5,5,10],
    [6,6,11],
    [6,6,11],
    [6,6,12]
  ]


  ngOnInit(): void {
   this.isSpellsPage = this.route.snapshot.paramMap.get("lvl")?true:false;
   console.log(this.route.snapshot.paramMap.get("lvl")?false:true)
   console.log(this.route.snapshot.paramMap.get("lvl"))
   this.lvlPG =this.data.pg.livello

   if(this.isSpellsPage){
    if(this.lvl.selectSpellLvl(Number(this.route.snapshot.paramMap.get("lvl")))!=null){
      this.lvlPage = Number(this.route.snapshot.paramMap.get("lvl"));
      this.spells = this.lvl.selectSpellLvl(Number(this.route.snapshot.paramMap.get("lvl")))
    } else{
      this.routeNavigate.navigate(["/wizard"])
    }

   }

  }
}
