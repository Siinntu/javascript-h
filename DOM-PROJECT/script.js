const button=document.getElementById('btn');
const colorText=document.querySelector('.color')
const hex=[
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    'a',
    'b',
    'c',
    'd',
]
//add event listener on the button
button.addEventListener('click',() =>{
   // alert('click')
    //hex color

    const hexColor=generatehexcolor();
    document.body.style.backgroundColor=hexColor;
    
})
//function to generate hex color

const generatehexcolor=() => {
    let hexColor='#';
    for(let i=0; i<6; i++){
        hexColor +=hex[generateRandomNumber()]
    }
    //alert(hexColor)
    return hexColor;
}
const generateRandomNumber=()=>{
    return Math.floor(Math.random() * hex.length)
}