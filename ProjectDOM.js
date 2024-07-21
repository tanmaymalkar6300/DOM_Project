const button = document.getElementById('btn');
const colorText =document.querySelector('.color')
const hex =[
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
];
// add eventListener on the button

button.addEventListener('click', () =>{
    //alert('clicked')
    const hexColor = generateHexcolor();
    document.body.style.backgroundColor= hexColor;
    colorText.textContent = hexColor;

});

// function to generate hex color

const generateHexcolor = ()=>{
let hexColor ='#';

for(let i=0; i<6; i++){
    hexColor += hex[generateRandomNubmer()];
}
return hexColor;
}

const generateRandomNubmer = () => {
    return Math.floor(Math.random()* hex.length)
}