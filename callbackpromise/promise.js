function createpromise(){
    return new promise (function exec(resolve,reject){
        setTimeout(function f(){
            console.log("timer done");
        },3000);
    })
}
console.log("start")
let x=createpromise();
console.log("got a new promise");
x.then(function f(){
    console.log("promise done");
});
console.log("end")