// let nums=[10,20,30]

// //arry destructuring
// const [a,b,c]=nums
// console.log(a);
// console.log(b)
// console.log(c)

// console.log('hello')
// let [firstname,surname]='sintu roy'.split(' ');
// console.log(firstname,surname)

// let nums=[10,20,30,40,50,60]
// let [a,,c,,e]=nums
// console.log(a)
// console.log(c)
// console.log(e)

// let [a,b,c]='sinturoy';
// console.log(a)
// console.log(c)


// let setData=new set([1,2,1,3,2,4,3,5,4,6,5]);
// console.log(setData);


// let [a,b,c,d]=new set([1,2,1,3,2,4,3,5,4,6,5])
// console.log(a,b,c,d)

// let user={};
// [user.name,user.surname] ='john pete'.split(' ')
// console.log(user.name)
// console.log(user.surname)

// let firstname='john';
// let surname='pete';
// console.log([firstname,surname])
// [surname,firstname]=[firstname,surname];
// console.log(surname);
// console.log(firstname);

//OBJECT DESTRUCTURING
// const user={
//     username:'sintu',
//     email:'sintu@gmail.com',
// }
// let {username,email}=user
// console.log(username);
// console.log(email)

// let employee={
//     empid:8,
//     username1:'johndoe'
// }
// const {empid:id,username1:nameofuser,depart='sintu',post='ceo'}=employee
// console.log(empid)
// console.log(username1)
// console.log(depart)

// console.log(id)
// console.log(nameofuser)
// console.log(depart)
// console.log(post)

// const user1={
//     name:'sintu', 
//     age:22,
//     city:'begusarai',
//     occupation:'software engineer',
//     hobbies:['coding','music','travel']
// }
// const {name,age,occupation,hobbies}=user1
// console.log(name,age,occupation,hobbies)


// const user1={
//         name:'sintu',
//         age:22,
//         city:'begusarai',
//         occupation:'software engineer',
//         hobbies:['coding','music','travel'],
//         comments:{
//             id:'9199054163',
//             post:'sintu is here ',
//             date:'2021'
//         }
//      }
//     function specialfunc({occupation,name,age}){
//         console.log('name: ${name}')
//         console.log('occupation')
//         console.log('age')
//     }
//     specialfunc(user1)
//     const{name,age,id,occupation,hobbies,comments:{id:commentid,post,date}}=user1
//     console.log(name)
//     console.log(commentid,post,date)


//lec-180 SPREAD AND REST OPERATOR
//NEW ARRAY
// let nums=[10,20,30,40];
// let newArr=[...nums]
// console.log(newArr)
// newArr[2]=20000
// console.log(newArr)
// console.log(nums)

//adding value
// let arr=[10,20,50,60,80]
// let newArr=[...arr,40,10000000000]
// console.log(newArr)

// let obj={
//     name:'pw skill',
//     course:'full stack web development'
// }
// let newobj={...obj,rate:8.9}
// console.log(newobj)

// concatenate two array
// let arr1=[1,2,3,4];
// let arr2=[9,8,7,6,5];
// let concArr=[...arr1,...arr2];
// console.log(concArr)

// spread an array of arguments as indivisual params
//let nums=[10,20,30,40]
//function calculateMax(num1,num2,num3,num4){
//     return Math.max(num1,num2,num3,num4)
// }
// console.log(calculateMax(...nums))

//can be uses with strings
// let name ='pw skill';
// let arrayofcharacters=[...name];
// console.log(arrayofcharacters)

//spread operator with objects
// let obj1={
//     name:'pw skills',
//     course:'sintu stack'
// }
// let obj2={
//     name:'sintu',
//     rate:5,
//     review:2000000000
// }
// let newobj={...obj1,...obj2}
// console.log(newobj)

//rest operator
//collecting all remaining parameter in a function]
// function sumofallnumbers(...numbers){
//console.log(numbers)
// return numbers.reduce((acc,curr)=>acc+curr,0)
// }
// console.log(sumofallnumbers(1,2,3,4,20.9009999945675))


//destructuring
//let arr=['html','css','ml','ht']
//let [a,b,c,...remainingelement]=arr
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(remainingelement)


//lecture:iife(imidietly invoke function expression)

// (async function(){
// console.log('our code')
// })();
// (()=>{
//     console.log('this is self invoking function')
// })();

//avoid pollution of global namesspace
// const greet='global variable';
// const greeting=()=>{
//     return 'hello sintu ji';
// }
// (()=>{
//     const greet='global variable';
//     const greeting=()=>{
//         return 'hello sintu ji';
//     }  
//     console.log(greet)
//     console.log(greeting())
// })()

//data privacy
// (()=>{
//     let password=91990954163
//     const showpassword=()=>{
//         console.log('password',password)
//     }
//     showpassword()
// })();
//module
// const point=(()=>{
//     let count=0;
//     return{
//         balance:()=>{
//          return count
//         },
//         increment:()=>{
//             count++;
//         },
//         reset:()=>{
//             count=0;
//         }
//     }
// })()
// point.increment()
// point.increment()
// console.log(point.balance())
// point.reset()
// console.log(point.balance())

//pure function

// function add(x,y){
//     return x+y
// }
// console.log(add(10,20))


// impure function
// let sum=2;
// function sumup(price){
//     return(sum+=price);
// }
// console.log(sumup(40))

//currying
// function volume(length){
//     return function(width){
//         return function(height){
//             return length*width*height
//         }
//     }
// }
// let output=volume(3)(4)(5)
// console.log(output)

// function Area(length){
//     return function(width){
//         return length*width
//     }
// }

// let input=Area(20)(30)
// console.log(input)


//closures
// function outerfunction(num){
//     return function innerfunction(){
//         console.log(num)
//     }
// }
// outerfunction(10)()
// let newfunc=outerfunction(10)
// newfunc()

// closure=>function+lexical enviroment




console.log(3>4 || false);
console.log(3<4 && false)