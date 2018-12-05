class House {
  constructor(doors=1, windows=2){
    //initialization
    this.roof = true
    this.ceiling = true
    this.doors = doors//2
    this.windows = windows//3
  }


  accomodate(){
    console.log('accomodating some people')
  }

  detail(){
    /*if (this.roof && this.ceiling && this.doors && this.windows){
      console.log('Has roof, a ceiling, '
      +this.doors+' doors'+', '+this.windows+' windows')
    }*/
    return (this.roof && this.ceiling && this.doors && this.windows) ? (
      console.log('Has roof, a ceiling, '
      +this.doors+' doors'+', '+this.windows+' windows')
    ) : console.log('Strange House')
  }
}

//var MyHouse = new House(20, 30)
//MyHouse.accomodate()
//console.log(MyHouse.roof)
//MyHouse.detail()

class Building extends House {
  constructor(d, w){
    super(d, w)
    this.levels = 5
  }
}

var myBuilding = new Building(60, 170)
myBuilding.detail()
console.log(myBuilding.levels)
