function createpromise(){
    return new promise (function exec(resolve,reject){
        //your code goes here
        setTimeout(() => {
            console.log('sintu done');
            resolve(10);
        },3000);
    });
}
console.log('start');
let x=createpromise();
console.log('got a new promise');
x.then(function f(value){
    console.log('sintu ji done',value);

}).catch(function g(value){
    console.log('handled',value);
}).finally(function fn(){
    console.log('finally');
})
console.log('end');
for(let i=0; i<1000000; i++){
    //some code
}