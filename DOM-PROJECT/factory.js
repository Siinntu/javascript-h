function person(name,age){
    this.name=name;
    this.age=age;
    this.greet=function(){
        console.log('hello,my name is'+this.name+'and i am'+this.age+'years old');

    }

}

let john=person('john',21)
let rahul=new person('Rahul',22)
rahul.greet()

function createperson(name,age){
    return{
        name:name,
        age:age,
        greet:function(){
            console.log('hello,my name is'+this.name+'and i am'+this.age
            +'years old');
        }
    }
}

let sintu=createperson('Sintu',22)
let rishi=createperson('chutiya',55)
sintu.greet()
rishi.greet()