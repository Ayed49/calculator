const display = document.getElementById('input-box');
const buttons = document.querySelectorAll('button');
let string = '';

const buttonsArray = Array.from(buttons);
buttonsArray.forEach(btn => {
    btn.addEventListener('click', (e) => {


        
        string += e.target.innerHTML;
        display.value = string;
        console.log(e.target.innerHTML);
    })
})


