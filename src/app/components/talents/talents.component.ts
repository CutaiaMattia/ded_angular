import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ExtractJsonService } from 'src/app/services/extract-json.service';

@Component({
  selector: 'app-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.css']
})
export class TalentsComponent implements OnInit {
constructor( private json : ExtractJsonService, private pg:DataService){

}
link = "/"+ this.pg.pg.classe;

talents:any
  ngOnInit(): void {
   this.talents = this.json.objTalents;

  }





}
