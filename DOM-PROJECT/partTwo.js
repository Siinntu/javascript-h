// let arr=[2,3,4]

// arr.forEach(function(element, index, arr){
//     console.log(index,element,arr);
// });
// arr.forEach((element, index, arr)=>{
//     console.log(index,element,arr);
// })

// const heros=['naagraj','doga','sintu','rishi','sikku']
//console.log(heros.join(""))
// heros.forEach((el)=>{console.log(el.toUpperCase())})

// arr.map(function(element,index,arr){
//     console.log(element,index,arr);
// });

// heros.map((h)=>console.log(h.toUpperCase()))

//filter
// console.log(heros);
// const herosWithRaj=heros.filter((h)=>{
//    return h.endsWith('raj')
// })
// console.log(herosWithRaj);

//shopping cart
//const cartbill=[20,30,50]
// const sumofcartbill=cartbill.reduce((prev,curr)=>prev+curr,0)
// console.log(sumofcartbill)


const gamescore=[200,300,310,250,150]

//check if all values are numbers
//console.log(typeof gamescore[1]);
const gamescorecheck =gamescore.every((v)=>typeof v==='number')
console.log('check:',gamescorecheck);
const above200=gamescore.find((Score)=>Score>200)
//console.log(above200)

