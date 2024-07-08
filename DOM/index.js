//let a=10;
//let b=20;

//console.log(a+b);

//let a=10;
//let b=20;

//parameter
// function add(a,b){
    
//    console.log(a+b);
// }

// add(10,20) //function calling
// add(5,3)

//arguments

// let sum = function add(a,b){
    
//    console.log(a+b);
// }
// sum(10,20)

// function x(callback) {
//   console.log('hello');
// }
// function y(params) {
//   console.log('bye')
  
// }
// x(y)
// y(x)

//first last citizens


// function add(a,b){
//     //block of code
//    return a + b;
// }

// let sum = add(10,20) //function calling
// console.log(sum);

//function with a single parameter

// function greet(name='sintu'){
//   console.log('hello name!')
  
// }
// greet("john");
// greet("peter");
//  greet();

//function with default parameter

//function greet(name = 'guest'){
 // console.log('hello ${name}!')
  
//}
//greet("john");
//greet("peter");
//greet();

// function calculatesum(num1,num2,num3,num4){
//  return num1 + num2 +num3 +num4;
// }
// let sum=calculatesum(10,20,30,40)

//  console.log(sum);   

//const nums =[1,2,3,4,5];

//function printarrayelement(arr){
  //console.log(arr)
//for (let i=0; i<arr.length; i++){
 // console.log(arr[i])
//}

//}
//printarrayelement(nums)

// function greetings(name,city){
//  console.log('hello ${name} from city ${city}')
// }
// greetings("john","delhi")

//USING ARGUMENTS OBJECT
// function sumwitharguments(){
//   console.log(arguments)
//   //argument convert into array
//   const argsArray=Array.from(arguments)
//   console.log(argsArray)
//   let sum=argsArray.reduce(function(acc,curr){
//     return acc+curr
//   },0)
// return sum
  
// }



// console.log(sumwitharguments(1,2,3))
// console.log(sumwitharguments(1,2,3,4,5))

//REST PARAMETER ...
// function sumwitharguments(...numbers){
//   console.log(numbers)
//   let sum=numbers.reduce(function(acc,curr){
//     return acc+curr
//   })
//   return sum
// }
// console.log(sumwitharguments(1,2,3))
// console.log(sumwitharguments(1,2,3,4,5))


//function add(a,b){
  //return a+b;
//}

//let result = add(10,20);
//console.log(result)

//let add =(a,b)=> {
 // return a+b;
//}

//let result=add(10,20)
//console.log(result)

//let printnum=a=>console.log(a);
//printnum(10)


// function add(){
//   console.log{arguments}
// }
// let add1=()=>console.log(arguments)
// add(10,20,30,40,50)
// add1(10,20,30,40,50)

// function add(a,b){
//   return a+b;

// }
// let result=add(10,20);
// console.log(result)

// let add=(a,b)=> a+b;
// let result=add(10,20);
// console.log(result)

// let printnum=a=>console.log(a);
// printnum(10)

//binding of this
// const person={
//   name:'john',
//   greet:function(){
//     console.log('greet',this)
//     console.log('hello,my name is $(this.name)')
//   },
//   greettwo: ()=>{
//     console.log('greetTwo',this)
//     console.log('hello,my name is $(this.name)')
//   }
// }
// person.greet();
// person.greettwo();

// USE FOR NEW KEYWORD
// function regularfunction(name){
//   this.name=name;

// }
// const regularobj=new regularfunction('john')
// console.log(regularobj)

//using square bracket

// let numbersarray=[];
// console.log(array.isarray(numbersarray))

// let numbersarray=[10,20,30,40];

// console.log(numbersarray);

//using array constructor
//let fruits = new Array("apple","oranges");
//console.log(fruits);

//let fruits=new Array(5);
//console.log(fruits.length)

//USING ARRAY LITERAL

//let mixedarray=['apples',true,10,{name:'john'}];
//console.log(mixedarray);

//acees the array
// let nums=[10,20,30,40,50]
// console.log(nums[0]);
// console.log(nums[-1])

// nums[2]=true
// console.log(nums)
// delete nums[1]
// console.log(nums)

//  let numbers=[10,20,30,40]
//at the end of the array add
//push and pop

// numbers.push(50)
//  numbers.push(60)
// console.log(numbers)
// let poppeditem=numbers.pop()
// let poppeditem2=numbers.pop()
// console.log(poppeditem2)
//   console.log(numbers)

// let numbers=[10,20,30,40]
//beginning of the array
//shift and unshift

// numbers.unshift(50)
// numbers.unshift(60)
// console.log(numbers)
// let poppeditem=numbers.shift()
// console.log(poppeditem)
// console.log(numbers)

// let arr=["i","love","javascript"]
//slice
//syntax arr.slice(startindex,endindex) not including endindex



// let arr =['t','e','s','t']

// console.log(arr.slice(-2))
// console.log(arr.slice(2))
// console.log(arr.slice(3))
// //console.log(arr.slice(-3))
// console.log(arr.slice(0,3))

// let nums=[10,20,30,40]
// let copynums=nums.slice()

// nums[0]=100
// console.log(copynums)
// console.log(nums)

//splice
//swiss knife
//this method is add, delete, replace
//syntax
//arr.splice(startindex,deletecount,arg1,arg2....,argN)

// let arr=['i','study','programming'];
// // arr.splice(1,2)
// arr.splice(1,1)
// console.log(arr)


// let arr=['i','study','programing','right','now']
// arr.splice(0,3,'listen','music')
//  console.log(arr)
//  arr.splice(1,2)
//  conole.log(arr)
// let removedElement=arr.splice(0,3,'listen','music')
// console.log(removedElement)
// console.log(arr)

// let arr=['i','study','programing']
// arr.splice(2,0,'complex','skill')
// console.log(arr)

// let arr=[1,2,10]
// arr.splice(-1,0,3,4)
// console.log(arr)

//concat
//let arr=[10,20]
// console.log(arr.concat([30,40]))
// console.log(arr.concat([30,40],[50,60]))
// console.log(arr.concat([30,40],50,60))

//iterate
//[10,20,30].forEach(function(item,index,array)){

 // console.log('{item} is at index {index} in {array}')
//}
//searching in array
//let arr=[1,0,false]
// //console.log(arr.indexof(0))
// console.log(arr.indexof(false))
// console.log(arr.indexof(null))
// console.log(arr.indexof(100))

// console.log(arr.includes(0))
// console.log(arr.includes(false))
// console.log(arr.includes(null))
// console.log(arr.includes(100))

// let users=[
//   {id:1,name:"raj"},
//   {id:2,name:"peter"},
//   {id:3,name:"sahil"},
// ]
// let user=users.find(function(user){
//   console.log(user)

//invoke function
// (function sintu(){
//   console.log('rishi')
// })();
// (function (x){
//   console.log(x+x)
// })(3);

  
// let nums=[10,20,30,40,50]
// nums.reverse()
// console.log(nums)

//split and join
// let names='john,peter,sahil'
// let arr=names.split(',')
// for (let name of arr){
//  console.log('send message to ${name}')
// }
// console.log(arr)
// let names='john,peter,sahil'
// let namesarray=names.split(', ')
// let str=namesarray.join(";")
// console.log(str)

//LEC -141 CALL APPLY BIND METHOD

//  function printname(name){
//  return 'Hi name'
// }
// let value=printname;
// console.log(value)
//printname.city="delhi";
//printname("john")
//console.log(printname.city)

//method of function object version 
//they are used to control the context of this 
//call 
// const user1={
//   name:"john",
//   greeting:function(){
//     console.log('hello, ${this.sintu}')
//   }
// }


// function greetings(city,age){
//   console.log('hello, ${this.name}')
// }
// const user2={
//   name:"peter",

// }

//call method
//function borrowing
//user1.greetings()
//user1.greetings.call(user2)
// greetings.call(user1,'delhi',30)
// greetings.call(user2,'mumbai',40)
//apply method
// greetings.apply(user1,['delhi',30])
// greetings.apply(user2,['mumbai',40])

//bind method
// const person={
//   name :'sintu',
//   sAyHi:function(city,age){
//     console.log('hello, ${this.name} from ${city} of age ${age}')
//   }

// }
// const anotherperson={
//   name:'peter'
// }
// const boundfunction=person.sAyHi.bind(anotherperson,'delhi',40)
// boundfunction()





//LECTURE142 OBJECT
//object method
// var emp={
//   name:"john",
//   age:30,
//   salary:50000
// }
// let keys = object.keys(emp).forEach((key) => console.log(key))
//console.log(keys)
//method chaining
// console.log(Object.values(emp))
// console.log(Object.keys(emp))
// const keyvaluepairs=Object.entries(emp)
// console.log(keyvaluepairs)

//manipulation
// let converttoobject=object.fromentries(keyvaluepairs)
// console.log(converttoobject)


//object.assign method
// var emp={
//   name:"john",
//   age:30,
//   salary:50000
// }
// const newobject=object.assign({},emp);
// console.log(newobject)


//OBJECT.FREZZE
// var emp={
//      name:"john",
//     age:30,
//      salary:50000
// }

// Object.freeze(emp);
// // eemp.name="peter"
// // consol.log(emp)
// console.log(object.isfrozen(emp))

 


//OBJECT.SEAl
// var emp={
//         name:"john",
//       age:30,
//        salary:50000
// }
// emp.department='it';
// Object.seal(emp);
// emp.name='peter';
// emp.id=100;
// console.log(emp)
// console.log(Object.isSealed(emp))

//OBJECT.CREATE
// let user1={name:"alex"}
//let obj=Object.create(null)
// let user2=object.create(user1)
// user2.age=40;

// console.log(user1)
// console.log(user2.name)

//object.hasown()
// var emp={
//           name:"john",
//        age:30,
//          salary:50000
// }
//  console.log(object.hasown(emp,'age'))
//  console.log(object.getownpropertynames(emp))
// let descriptor=object.getownpropertydescriptor(emp,'name')
// console.log(descriptor)


// var emp={
  
// }
// Object.defineProperty(emp,'name',{
//   value:'john',
//   writable:false
// })
// console.log(emp.name)

// const data  ={}
// Object.defineProperties(data,{
//   username:{
//     value:"peter",
//     writable:'true'
//   },
//   email:{
//     value:"skdedtly@mail.com",
//     writable:'true'
//   }
// })



//lecture-143 object method and enumerating properties
//object literal
// let emp={
//   name:'sintu',
//   salary:50000,
//   id:10,

// }
// console.log(emp)

//new instance object constructor
// const employee= new Object()
// employee.name='sintu';
// employee.salary='50000000000000000000000000';
// console.log(employee)

// function employee(id,name,salary){
//   this.id=id;
//   this.name=name;
//   this.salary=salary;
// }
// const employee1=new employee(21,'sintu',40000)
// const employee2=new employee(22,'sikku',30000000000)
//  console.log(employee1)
// console.log(employee2)

//acess to data for use
// let emp= { id: 21, name: 'sintu', salary: 40000 };
//dot notation  //square bracket notation

// console.log(emp.name)
// console.log(emp['id'])
// console.log(emp['salary'])
//add data
// emp.city='bihar begusarai lakhanpur';
// emp['country']='india';
// console.log(emp)
// console.log('old object',emp)
// //modification in data
// emp.name='pintu';
// emp.city='begusarai';
// console.log("update object",emp)

//delete data method
// delete emp.city
// delete emp['country']
// delete emp.id
// console.log("update object",emp)

// emp['like music']='yes';
// console.log('update object',emp)

//iterating
// for(const key in emp){
//   console.log(key)
//   console.log(key,emp[key])
// }



//LECTURE144
//pass by value vs pass by reference

// let name='sintu';
// let newname=name;
// name='suman';
// console.log(newname=name);

// let num1=10
// let num2=num1;
// num1=400
// console.log(num1)
// console.log(num2)

// const user={
//   name:"john",
//   age:20
// }
// const newuser=user
// user.name='sintu'
// console.log(user)
// console.log(newuser)

// let nums=[10,20,30,40]
// let nums2=nums
// nums[1]=999
// nums2[2]=9199054163
// nums[3]='@gmail.sintu'
// console.log(nums)
// console.log(nums2)


//LECTURE145
//MATH ,String,DATe IN Js
// console.log(math.abs(-4))
// console.log(math.exp(2))
// console.log(math.trunc(5.7))
// console.log(math.sqrt(25))
// console.log(math.round(4.7)) //round nearest integer
// console.log(math.ceil(3.1))//roundup
// console.log(math.floor(3.9))//round down
// console.log(math.pI)
// console.log(math.pow(2,3))
// console.log(math.min(10,5,8))
// console.log(math.max(10,5,8))

//string
// console.log('hello world')
// console.log("hello world")
// console.log('hello world')

// console.log('${10+40}')
// console.log('${10+40}')
// console.log('${10+40}')
// console.log('hello world'.length)
// console.log('hello world'[1])

//immutable
// let str='hello'
// str[0]='w'
// console.log(str)

// console.log('sintu'.at(3))
// console.log('rishu'.at(-1))
//  console.log('charAt'.charAt(3))
// console.log("hello"+""+"world")

// console.log('endswith'.endsWith("with"))
// console.log('includes'.includes('c'))
// console.log('indexof'.indexOf('o'))
// console.log('indexof'.indexOf('m'))

// console.log('padEnd'.padEnd(100,'!'))
// console.log('padstart'.padStart(50,'$'))

// console.log('sintu'.repeat(8))
// console.log('hello suman suman'.replace('suman','comingwife'))
// console.log('hello suman suman'.replaceAll('suman','comingwife'))

// console.log('hello and'.slice(5))
// console.log('hello world'.slice(4,9))
// console.log('hello'.substring(4))
// console.log('sintu'.substring(1,3))
// console.log('hello world'.startsWith('hell'))
// console.log('hello,world,hello,world'.split(","))
// console.log('hello world'.toLowerCase())
// console.log('hello world'.toUpperCase())

// console.log('  helloworld   '.trim())
// console.log('   helloworld   '.trimEnd())
// console.log('   hello world  '.trimStart())


//DATE
// let dateTime=new Date()
// console.log(dateTime)

// console.log(Date.now()) //in milliseconds
//  console.log(dateTime.getDate())
//  console.log(dateTime.getDay())
//  console.log(dateTime.getFullYear())
//  console.log(dateTime.getHours())
//  console.log(dateTime.getMinutes())
//  console.log(dateTime.getMonth())
//  console.log(dateTime.getTime())

// console.log(dateTime.setDate(20))
// console.log(dateTime.setFullYear(20000))
// console.log(dateTime.toDateString())


//lecture=145
//SET AND MAP
//unordered collection
//unique values
// const setExample=new Set();
//   setExample.add(10)
// setExample.add(20)
// setExample.add(10)
// setExample.add(20)
// setExample.add(10)
// setExample.add(20)

// setExample.add(30)
// setExample.add(40)
//  console.log(setExample)
// console.log(setExample.size)
// setExample.clear()
//setExample.delete(30)
//console.log(setExample)

// const data=new Set();
// data.add("john")
// data.add({
//   likes:'javascript'
// })
// console.log(data)
// console.log(data.entries())

// data.add(10)
// data.add(20)
// data.add(30)
// data.add(40)
// // function multiply(value1,value2){
// //   console.log('data[${value1}:data[${value2 *2}]')
// }
// data.forEach(multiply)

//console.log(data.has(20))
//const key=data.keys()
//console.log(key)
//console.log(data.value())

// let arr=[10,20,30,40,10,20,30,40,10,20,30,40,10,20,30,40]
// const set=new set(arr)
// console.log(set)
//console.log(Array.from(set))


//MAP
//keyed collection
// map allows keys of any type
// let map = new Map()
// map.set('1','stringvalue')
//  map.set(1,'numbervalue')
//  map.set(true,'booleanvalue')

// console.log(map.get(1))
// console.log(map.get('1'))
// console.log(map.get(true))
//  console.log(map)

// let user={name:"john"}
// let visitsMap=new Map()
// visitsMap.set(user,100)
// console.log(visitsMap.get(user))

// let map=new map()
// map.set('1','strvalue')
//    .set(1,'numvalue')
//    .set(true,'boolvalue')
//    console.log(map)

// let itemsMap=new Map(
//   [
//     ['tomatoes',100],
//     ['onion',400],
//     ['potatoes',500],
//   ]
// )
// console.log(itemsMap)
// console.log(itemsMap.keys())
// for (let item of itemsMap.keys()){
//   console.log(item)
// }

// for (let item of itemsMap.values()){
//   console.log(item)
// }
// for (let item of itemsMap){
//   console.log(item)
// }
// itemsMap.forEach((value,key,Map) =>{
//   console.log('${key} :${value}')
// })

// //map from object

// let user={
//   name:'john',
//   age:20
// }
// console.log(Object.entries(user))
// let map=new Map(object.entries(user))


// let itemsMap=new Map(
//   [
//     ['tomatoes',100],
//     ['onion',400],
//     ['potatoes',500],
//   ]
// )
// console.log(itemsMap.entries())
// let obj=Object.fromEntries(itemsMap.entries())
// console.log(obj)
