export class attackModel {

totTXC:number = 0;
totDanni:number = 0;

  constructor(
  public id:number,
  public modTXC:number,
  public bonusTXC:number,
  public bab: number,
  public nDadi: number,
  public tipoDado:number,
  public bonusDanni:number,
  public modDanni:number,
  public listMultiAttackIsPresent : listMultiAttackIsPresent
  ) {
    this.totTXC =  Number(modTXC) + Number(bonusTXC) + Number(bab)
    this.totDanni = Number(bonusDanni) + Number(modDanni)
  }
  }


  export class listMultiAttackIsPresent {

    public multiAttack1: boolean
    public multiAttack2: boolean
    public multiAttack3: boolean
    public multiAttack4: boolean

    constructor(

    ) {
      this.multiAttack1 = false
      this.multiAttack2 = false
      this.multiAttack3 = false
      this.multiAttack4 = false
    }







}
