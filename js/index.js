let display = document.getElementById('display')
let botones = Array.from(document.getElementsByClassName('boton'))

botones.map(boton => {
    boton.addEventListener('click', (event) => {
        switch(event.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case '←':
                if(display.innerText) {
                    display.innerText = display.innerText.slice(0,-1);
                }                
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error!'
                }
                
                break;
            default:
                display.innerText += event.target.innerText
        }
    })
})

