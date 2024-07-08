function person(name){
    this.name
}
person.prototype.greet=function(){
    console.log('hello,my name is ${this.name} ')

}

function employee(name,empolyid){
    this.name=name
    this.empolyid=empolyid
}
employee.prototype=object.create(person.prototype)
// employee.prototype.constructor=employee

employee.prototype.showempdetails=function(){
    console.log('hello,empid ${this.empolyid}');
}

let pw=new employee('sintu','sintusudh')
pw.greet()