// class person{
//     constructor(name,age){
//         this.name=name
//         this.age=age

//     }
//     organization='tata'
//     greet(){
//         console.log('hello, my name is ${this.name} and my age is ${this.age}');
//     }
// }

// const sintu=new person('Sintu',22)
// sintu.greet()
// console.log(sintu.organization);

function Newperson(name,age){
    this.name=name
    this.age=age
}
Newperson.prototype.greet=function(){
    console.log('hello,my name is ${this.name} and my age is ${this.age} ');
}

const sintu=new Newperson('Sintu',22)
sintu.greet()


// class Animal{
//    constructor (name){
//     this.name
//    }
// }

// class dog extends Animal{
//     constructor(name,breed){
//         super(name)
//         this.breed=breed
//     }
// }