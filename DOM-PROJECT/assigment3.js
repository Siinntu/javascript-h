function doublearray(arr,callback){
    const doubledarr=arr.map((num)=>{
        return callback(num);
    });
    return doubledarr;
}
const originalarray=[1,2,3,4];

function callback(num){
    return num*2;
}



