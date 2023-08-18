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








  saveAttack(ngForm : NgForm){
    let val = ngForm.form.value;
    this.attack = new attackModel(this.countId,val.mod, val.bonus,val.bab, new listMultiAttackIsPresent)
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

  };




  rollById(n:number){
    let attackToRoll =  this.getAttackById(n)
   this.valore =  Number(attackToRoll.mod) + Number(attackToRoll.bonus) + Number(attackToRoll.bab);

    this.rollResult = Math.floor(Math.random() * (20 - 1)) + 1;
    this.valore = this.valore + this.rollResult


    this.textRoll = "attacco " +(n)+":   dado="+this.rollResult + " totale="+  this.valore
     this.storyText.push(this.textRoll)



 }


     roll(n:number){
     let attackToRoll =  this.getAttackById(this.listAttack[n].id)
    this.valore =  Number(attackToRoll.mod) + Number(attackToRoll.bonus) + Number(attackToRoll.bab);

     this.rollResult = Math.floor(Math.random() * (20 - 1)) + 1;
     this.valore = this.valore + this.rollResult


     this.textRoll = "attacco " +(attackToRoll.id)+":   dado="+this.rollResult + " totale="+  this.valore
      this.storyText.push(this.textRoll)



  }


  delete(i:number){
    console.log(JSON.stringify(this.listAttack[i]) )
    this.listAttack.splice(i,1)


    if(this.listAttack.length === 0){
      localStorage.removeItem("attacks")
    } else{
    localStorage.setItem("attacks",JSON.stringify(this.listAttack))
    }

  }


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



  getAttackById(n:number):attackModel{
    for(let single of this.listAttack){
      if(single.id == n){
        return single
      }
    }
    return new attackModel(9999,0,0,0,new listMultiAttackIsPresent)
  }



  rollMultiAttack1() : void{
    this.textRoll = "   --- multi attack 1 --- "
    this.storyText.push(this.textRoll)
    for(let single of this.listAttack) {
      if(single.listMultiAttackIsPresent.multiAttack1){
        this.rollById(single.id)
      }
    }

    this.textRoll = "\n "
    this.storyText.push(this.textRoll)
  }


  rollMultiAttack2() : void{

    this.textRoll = "   --- multi attack 2 --- "
    this.storyText.push(this.textRoll)
    for(let single of this.listAttack) {
      if(single.listMultiAttackIsPresent.multiAttack2){
        this.rollById(single.id)
      }
    }

    this.textRoll = "\n"
    this.storyText.push(this.textRoll)
  }

  rollMultiAttack3() : void{

    this.textRoll = "   --- multi attack 3 --- "
    this.storyText.push(this.textRoll)
    for(let single of this.listAttack) {
      if(single.listMultiAttackIsPresent.multiAttack3){
        this.rollById(single.id)
      }
    }


    this.textRoll = "\n "
    this.storyText.push(this.textRoll)
  }


  rollMultiAttack4() : void{
    this.textRoll = "   ---multi attack 4 --- "
    this.storyText.push(this.textRoll)
    for(let single of this.listAttack) {
      if(single.listMultiAttackIsPresent.multiAttack4){
        this.rollById(single.id)
      }
    }

    this.textRoll = "\n "
    this.storyText.push(this.textRoll)
  }
  }





