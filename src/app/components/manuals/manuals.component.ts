import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ManualLinks } from 'src/app/models/manualLink';

import { ExtractJsonService } from 'src/app/services/extract-json.service';

@Component({
  selector: 'app-manuals',
  templateUrl: './manuals.component.html',
  styleUrls: ['./manuals.component.css']
})
export class ManualsComponent implements OnInit{

  manualLink : ManualLinks
  listManualLink: ManualLinks[] = []
  constructor(private json : ExtractJsonService){}


  manualLinks: any;

  ngOnInit(): void {
    this.manualLinks = this.json.objManualLinks;
  }
  

search(ngForm :NgForm){
  if(ngForm.form.value.keyword == '' || this.listManualLink){
    this.ngOnInit();
  } 
  this.listManualLink = []
  for(let nome of this.manualLinks){
    
    if( String(nome.name).toLowerCase().indexOf( String(ngForm.form.value.keyword).trim().toLowerCase()) > -1){
     this.listManualLink.push(new ManualLinks(nome.name,nome.url))
     }
  }
 this.manualLinks = this.listManualLink;
}

}
