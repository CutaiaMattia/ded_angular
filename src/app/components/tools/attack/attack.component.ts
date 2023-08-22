import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { attackModel, listMultiAttackIsPresent } from 'src/app/models/attackModel';

@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.css']
})
export class AttackComponent implements OnInit, AfterContentChecked {
constructor(){

}







  ngAfterContentChecked(): void {
    this.listAttack = JSON.parse(localStorage.getItem("attacks")!)
    console.log(this.listAttack)

  }

  ngOnInit(): void {

   console.log(localStorage.getItem("attacks"))
   this.listAttack = JSON.parse(localStorage.getItem("attacks")!)
    this.countId = JSON.parse(localStorage.getItem("attacks")!) ?JSON.parse(localStorage.getItem("attacks")!).length+1:1
console.log(this.countId)
  }

  countId :number = 1;
  valore: number
  rollResult: number
  listAttack : attackModel[]
  attack : attackModel
  textRoll: string
  storyText: string[] = []
  idToUpdate : any
  modTXC:number = 0
  bonusTXC:number = 0
  bab: number = 0
  nDadi: number = 1
  tipoDado:number = 6
  bonusDanni:number = 0
  modDanni:number = 0



  deleteStoryText(){
    this.storyText = []
  }


   play() {
    document.querySelector("#offcanvasBTN")!.className = "btn btn-primary  ";
    requestAnimationFrame((time) => {
      requestAnimationFrame((time) => {
        document.querySelector("#offcanvasBTN")!.className = " btn btn-primary animated tada";
      });
    });
  }












  //roll txc and damage

  rollDanniByAttack(attackToRoll:attackModel, i:number){
    this.textRoll = "DANNI -> attacco " +(i+1)+" :"
    this.storyText.push(this.textRoll)
  
   this.valore =  0
   for (let i = 1; i <= attackToRoll.nDadi; i++){
    this.rollResult = Math.floor(Math.random() * attackToRoll.tipoDado) + 1;
    this.valore = this.valore + Number(attackToRoll.totDanni) + this.rollResult
  
    this.storyText.push("    tiro "+ i +" : dado -> " + this.rollResult + " + " + attackToRoll.totDanni )
   }
  
    this.textRoll = "totale = "+  this.valore
     this.storyText.push(this.textRoll)
  
     this.storyText.push("\n")
  
  }


  rollTXCByAttack(attackToRoll:attackModel, i:number){

    this.textRoll = "TXC -> attacco " +(i+1)+" :"
    this.storyText.push(this.textRoll)


   this.valore =  Number(attackToRoll.modTXC) + Number(attackToRoll.bonusTXC) + Number(attackToRoll.bab);
    this.rollResult = Math.floor(Math.random() * 20) + 1;
    this.valore = this.valore + this.rollResult


    this.textRoll = "   dado = "+this.rollResult + " totale = "+  this.valore
     this.storyText.push(this.textRoll)

     this.storyText.push("\n")

 }

//   ----------------------------



//CRUD method 

  delete(i:number){
    this.listAttack.splice(i,1)
    if(this.listAttack.length === 0){
      localStorage.removeItem("attacks")
    } else{
    localStorage.setItem("attacks",JSON.stringify(this.listAttack))
    }

  }

  getAttackById(n:number):attackModel{
    for(let single of this.listAttack){
      if(single.id == n){
        return single
      }
    }
    return new attackModel(9999,0,0,0,0,0,0,0,new listMultiAttackIsPresent)
  }

  updateAttackById(ngForm : NgForm){


    let attackFromNgForm = ngForm.form.value
    let attackToUpdate = this.listAttack[this.idToUpdate]


    attackToUpdate.bab = attackFromNgForm.bab    
    attackToUpdate.bonusDanni = attackFromNgForm.bonusDanni
    attackToUpdate.bonusTXC = attackFromNgForm.bonusTXC 
    attackToUpdate.modDanni = attackFromNgForm.modDanni 
    attackToUpdate.modTXC = attackFromNgForm.modTXC 
    attackToUpdate.tipoDado = attackFromNgForm.tipoDado 
    attackToUpdate.nDadi = attackFromNgForm.nDadi 
    attackToUpdate.totDanni = 
    Number(attackFromNgForm.bonusDanni) + Number(attackFromNgForm.modDanni)
    attackToUpdate.totTXC = 
    Number(attackFromNgForm.modTXC ) + Number(attackFromNgForm.bonusTXC ) + Number(attackFromNgForm.bab)


     this.listAttack[this.idToUpdate] = attackToUpdate
     localStorage.setItem("attacks",JSON.stringify(this.listAttack))
      this.idToUpdate = null;
      this.modTXC = 0
      this.bonusTXC = 0
      this.bab = 0
      this.nDadi = 1
      this.tipoDado = 6
      this.bonusDanni = 0
      this.modDanni = 0


  }

  saveIdToUpdate(i:number){

    this.idToUpdate = i;

    this.modTXC = this.listAttack[i].modTXC
    this.bonusTXC = this.listAttack[i].bonusTXC
    this.bab = this.listAttack[i].bab
    this.nDadi = this.listAttack[i].nDadi
    this.tipoDado = this.listAttack[i].tipoDado
    this.bonusDanni = this.listAttack[i].bonusDanni
    this.modDanni = this.listAttack[i].modDanni


    
  }

  saveAttack(ngForm : NgForm){
    let val = ngForm.form.value;
    console.log(ngForm
      )
    this.attack = new attackModel(this.countId,val.modTXC, val.bonusTXC,val.bab,val.nDadi,val.tipoDado,val.bonusDanni, val.modDanni, new listMultiAttackIsPresent)
    this.countId++;
    if(this.listAttack){
      this.listAttack.push(this.attack)
    } else{
      this.listAttack = new Array
      this.listAttack.push(this.attack)
    }


    if(!localStorage.getItem("attacks")){
      console.log(JSON.stringify(this.attack))
      console.log(this.attack)

      console.log(this.listAttack)
      localStorage.setItem("attacks", "[" + JSON.stringify(this.attack) + "]")
    } else{
      localStorage.setItem("attacks", localStorage.getItem("attacks")!.replace("]","") + "," + JSON.stringify(this.attack) +"]")
    }

    this.modTXC = 0
    this.bonusTXC = 0
    this.bab = 0
    this.nDadi = 1
    this.tipoDado = 6
    this.bonusDanni = 0
    this.modDanni = 0
  };


// save single attack into multi attack n  (each method for many multi attack) 
//TODO => replace with 1 method

  saveAttackIntoMultiAttack1(n:number){
    if(this.getAttackById(this.listAttack[n].id).id != 9999 ){
        if(!this.listAttack[n].listMultiAttackIsPresent.multiAttack1){
        this.listAttack[n].listMultiAttackIsPresent.multiAttack1 = true
          localStorage.setItem("attacks" , JSON.stringify(this.listAttack))
      console.log("pushed")
      }else{
      this.listAttack[n].listMultiAttackIsPresent.multiAttack1 = false
          localStorage.setItem("attacks" , JSON.stringify(this.listAttack))
      }
    }
  }


  saveAttackIntoMultiAttack2(n:number){


    if(this.getAttackById(this.listAttack[n].id).id != 9999 ){
        if(!this.listAttack[n].listMultiAttackIsPresent.multiAttack2){
        this.listAttack[n].listMultiAttackIsPresent.multiAttack2 = true
          localStorage.setItem("attacks" , JSON.stringify(this.listAttack))
      console.log("pushed")
      }else{
      this.listAttack[n].listMultiAttackIsPresent.multiAttack2 = false
          localStorage.setItem("attacks" , JSON.stringify(this.listAttack))
      }
    }
  }


  saveAttackIntoMultiAttack3(n:number){
    if(this.getAttackById(this.listAttack[n].id).id != 9999 ){
        if(!this.listAttack[n].listMultiAttackIsPresent.multiAttack3){
        this.listAttack[n].listMultiAttackIsPresent.multiAttack3 = true
          localStorage.setItem("attacks" , JSON.stringify(this.listAttack))
      console.log("pushed")
      }else{
      this.listAttack[n].listMultiAttackIsPresent.multiAttack3 = false
          localStorage.setItem("attacks" , JSON.stringify(this.listAttack))
      }
    }
  }


  saveAttackIntoMultiAttack4(n:number){
    if(this.getAttackById(this.listAttack[n].id).id != 9999 ){
        if(!this.listAttack[n].listMultiAttackIsPresent.multiAttack4){
        this.listAttack[n].listMultiAttackIsPresent.multiAttack4 = true
          localStorage.setItem("attacks" , JSON.stringify(this.listAttack))
      console.log("pushed")
      }else{
      this.listAttack[n].listMultiAttackIsPresent.multiAttack4= false
          localStorage.setItem("attacks" , JSON.stringify(this.listAttack))
      }
    }
  }

//   ----------------------------










// roll multi attack n  (each method for many multi attack) 
//TODO => replace with 1 method

  rollMultiAttack1() : void{
    this.textRoll = "   --- multi attack 1 --- "
    this.storyText.push(this.textRoll)
    let i = 0
    for(let single of this.listAttack) {
      if(single.listMultiAttackIsPresent.multiAttack1){
        this.rollTXCByAttack(single,i)
        this.rollDanniByAttack(single,i)
        this.storyText.push("--------------")
      }
      i++;
    }

    this.textRoll = "\n "
    this.storyText.push(this.textRoll)
  }


  rollMultiAttack2() : void{

    this.textRoll = "   --- multi attack 2 --- "
    this.storyText.push(this.textRoll)
    let i = 0
    for(let single of this.listAttack) {
      if(single.listMultiAttackIsPresent.multiAttack2){
        this.rollTXCByAttack(single,i)
        this.rollDanniByAttack(single,i)
        this.storyText.push("--------------")
      }
      i++;
    }

    this.textRoll = "\n"
    this.storyText.push(this.textRoll)
  }

  rollMultiAttack3() : void{

    this.textRoll = "   --- multi attack 3 --- "
    this.storyText.push(this.textRoll)
    let i = 0
    for(let single of this.listAttack) {
      if(single.listMultiAttackIsPresent.multiAttack3){
        this.rollTXCByAttack(single,i)
        this.rollDanniByAttack(single,i)
        this.storyText.push("--------------")
      }
      i++;
    }


    this.textRoll = "\n "
    this.storyText.push(this.textRoll)
  }


  rollMultiAttack4() : void{
    this.textRoll = "   ---multi attack 4 --- "
    this.storyText.push(this.textRoll)
    let i = 0
    for(let single of this.listAttack) {
      if(single.listMultiAttackIsPresent.multiAttack4){
        this.rollTXCByAttack(single,i)
        this.rollDanniByAttack(single,i)
        this.storyText.push("--------------")
      }
      i++
    }

    this.textRoll = "\n "
    this.storyText.push(this.textRoll)
  }


//   ----------------------------


  


  }





