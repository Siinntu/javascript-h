// const alluser=[
//     "sintu",
//     "mithun",
//     "rishi",
//     "sikku"
// ]
// function isuserpresent(user){
//     if (alluser.includes(user)){
//         console.log('yes,${user} is valid user.')
        
//     }else{
//         console.log('no,${user} is not valid user.')
//     }
// }
// isuserpresent("mithun")
// isuserpresent("someone")
    
//     function calculatetotalcartvalue(num1,num2,num3){
//         return num1 + num2 + num3;
//     }
//    let sum= calculatetotalcartvalue(125,20,30)
//    console.log(sum)


const students=[
    {
        name:"mithun",
        marks:95,
    },
    {
        name:"prabir",
        marks:75,
    },
    {
        name:"mithu",
        marks:92,
    },
    {
        name:"mith",
        marks:70,
    },
    {
        name:"thun",
        marks:99,
    },
];
const checkresults=(name)=>{
    for (let student of students){
        if (student.name===name){
            return student.marks>90
            ?console.log(
                `Congratulations ${student.name}! You have cleared the exam.`
              )
              :console.log(`Sorry ! You have not cleared the exam.`);
        }
    }
    console.log("Invalid User !!!");
};

checkresults("mithun");