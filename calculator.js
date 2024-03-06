const display = document.getElementById('input-box');
const buttons = document.querySelectorAll('button');
let string = '';

const buttonsArray = Array.from(buttons);
buttonsArray.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            display.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = '';
            display.value = string;
        } else if (e.target.innerHTML == '=') {
            string = eval(string);
            display.value = string;
        }

        else {
            string += e.target.innerHTML;
            display.value = string;

        }

    })
})







