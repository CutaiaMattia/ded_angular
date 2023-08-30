import { ElementSchemaRegistry } from '@angular/compiler';
import { Component } from '@angular/core';
import { attackModel } from 'src/app/models/attackModel';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  constructor() {}

  errFormato: boolean = false
  errCorrupt: boolean = false


isPossibleDownload():boolean{
  if(localStorage.length == 0){
    return false;
  }
  return true
}

  downloadFile(){
      const link = document.createElement("a");
      const content = localStorage.getItem("attacks")!;
      const file = new Blob([content], { type: 'text/plain' });
      link.href = URL.createObjectURL(file);
      link.download = "data_ded_angual.txt";
      link.click();
      URL.revokeObjectURL(link.href);

  }

  uploadFile(e:any){
      this.readThis(e.target);
    }
  


    readThis(inputValue: any) : void {
      try{
      var file:File = inputValue.files[0]; 
      var myReader:FileReader = new FileReader();
      var testo

      myReader.onload =  function(e) { 
        if(file.name.match(".txt")!== null){
          try{
          JSON.parse(<string>myReader.result)

          localStorage.setItem("attacks", <any>myReader.result);
          }catch(err){
            alert("Il file .txt è errato o corrotto")
          }
        } else{       
            alert("Formato non supportato, il file ha l'estensione .txt")
        }     
      }
      myReader.readAsText(file);
      console.log("result dopo onloadend" + myReader.result)
    } catch(err){
      console.log(err)
        console.error("nessun file selezionato")
      }
    }
  

 
  }







