// function func(name,age){
//     this.name=name
//     this.age=age;
    
// }

// func.prototype.printHuman=function(){
//     console.log(this.name)
//  }
 
// let human1 = new func('Dipanshu',26)
// let human2 = new func('Shanaya',23)
// let human3 = new func('Aditi',33)

// *****************************         *****************************

function animal(name,property){
    this.name=name;
    this.property=property;
    
}

animal.prototype.canEat=function(){
    console.log(this.name+' can eat food')
}

const animaL1= new animal("Lion", "roar");
const animaL2= new animal("Dog", "bark");
const animaL3= new animal("Turtle", "swim");
