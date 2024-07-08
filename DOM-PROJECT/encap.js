//ENCAPSULATION.JS
// function person(name,age){
//     this.name=name
//     let _age=age //private
    // this.greet=function(){
    //     console.log('hello,my name is'+this.name+'and i am'+ _age
    //     +'years old');
    // }
//     this.getAge=function(){
//         return _age
//     }
//     this.setAge=function(age){
//         if (age>0) {
//             _age=age
//         }else{
//             console.log('invalid age')
//         }
//     }
    

// }
//let john=new person('john',22)
//console.log(john.name)
//console.log(john.age)
 //console.log(john.greet());
//  console.log(john.getAge())
//  console.log(john.setAge());


 //ABSTRACTION.JS

function BankAccount(accountnumber,initBalance){
    let _balance=initBalance //private

    let _isAmountvalid=function(amount){
        return typeof ammount ==='number' && amount > 0
    }
    this.deposite=function(amount){
        if (_isAmountvalid(amount)) {
            _balance=amount
            console.log('deposite success,new balance is'+_balance);
            
        }else{
            console.log('invalid amount');
        }
    }
    this.getbalance=function(){
        return _balance
    }
}


//GEETERS SEETERS

class person{
    constructor(name,age){
        this.name=name
        this._age=age;
    }
    get age(){
        return this._age+5

    }
    set age(value){
        if (value>0) {
            this._age=value
            
        }else{
            console.log('invalid age');
        }
    }
}
const john=new person('john',25)
console.log(john._age);
console.log(john.age);



//polymorphism
class Animal{
    constructor(name){
    this.name=name
    }
   makesound(){
    console.log('some sound');

    }
}
class dog extends Animal{
    constructor(name,breed){
        super(name)
        this.breed=breed
    }
    makesound(){
        console.log('woof woof');
    
        }
}
class cat extends Animal{
    constructor(name,color){
        super(name)
        this.color=color
    }
    makesound(){
        console.log('mou mou');
    
        }
}
const generic=new Animal('gen')
const ted=new dog('ted','gr')
const tom=new cat('Tom','white')

generic.makesound()
tom.makesound()
ted.makesound()