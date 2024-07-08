// function h(x,fn){
//     //h->is a higher order fn
//     //fn->callback
//     console.log(x*x);
//     fn();
// }
// h(20,function(){
//     console.log('sintu with callback')
// })



// setTimeout(() => {
//     console.log('time done')
// }, 3000);

console.log('end')
setTimeout(function f(){
    console.log('sintu done1')
},0)
setTimeout(function f(){
    console.log('sintu done2')
},100)
console.log('start')
for (let i=0; i<1000000; i++){}

