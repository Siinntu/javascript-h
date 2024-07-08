function person(name,age){
    this.name=name
    this.age=age
}

person.prototype.greet=function(){
    console.log('hello,my name is ${this.name} and my age is ${this.age}')
}
let rahul=new person('sintu',22)
rahul.greet()
console.log(person.prototype);
console.log(person.prototype.constructor);
