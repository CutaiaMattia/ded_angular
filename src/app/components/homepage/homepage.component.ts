import Swal from 'sweetalert2'
import { Component } from '@angular/core';


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
      document.getElementById('alert-success-download')?.click()
  }

  uploadFile(e:any){
      this.readThis(e.target);
    }
  


    readThis(inputValue: any) : void {  
      try{
      var file:File = inputValue.files[0]; 
      var myReader:FileReader = new FileReader();

      myReader.onload =  (e) => { 
        if(file.name.match(".txt")!== null){
          try{
          JSON.parse(<string>myReader.result)

          localStorage.setItem("attacks", <any>myReader.result);
          }catch(err){
            document.getElementById('alert-corrupt')?.click()
          //  alert("Il file .txt è errato o corrotto")
          }
        } else{   
          document.getElementById('alert-format')?.click()
            //alert("Formato non supportato, il file ha l'estensione .txt")
        } 

      }
      document.getElementById('alert-success-upload')?.click()
      myReader.readAsText(file);
      
    } catch(err){
      console.log(err)
        console.error("nessun file selezionato")
      }
    }
  

 showAlertFormat(){
  Swal.fire({
    icon: 'error',
    text: 'Formato non supportato, il file da inserire ha l\'estensione .txt',
  })
 }

 showAlertCorrupt(){
  Swal.fire({
    icon: 'error',
    text: 'Il file .txt è errato o corrotto',
  })
 }
 showAlertSuccess(testo : string){
  Swal.fire({
    icon: 'success',
    text: testo,
  })
 }


  }







