function createpromise(){
    return new promise (function exec(resolve,reject){
        //your code goes here
        setTimeout(() => {
            console.log('sintu done');
            resolve(10);
        },3000);
    });
}

// async function consume(){
//     return 20;
// }
// console.log(consume())

async function consume(){
    try{
        console.log('inside funbction');
        const response=await createpromise();
        const response1=await createpromise();
        console.log('response is',response);

    }catch(err){
        console.log('handled',err)
    }
}
console.log('start');
consume();
console.log('end')