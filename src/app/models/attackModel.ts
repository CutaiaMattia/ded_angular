export class attackModel {



  constructor(
  public id:number,
  public mod:number,
  public bonus:number,
  public bab: number,
  public listMultiAttackIsPresent : listMultiAttackIsPresent
  ) {}
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
