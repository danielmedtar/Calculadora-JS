let contenedorCalc = document.querySelector('.calculadora') 
let darkMode = document.getElementById('toggle');

darkMode.addEventListener('click', () => {
    darkMode.classList.toggle('dark')
    let cambioClase = contenedorCalc.classList;
    
    if(cambioClase.contains('default')) {
        cambioClase.replace('default', 'dark');
        toggle.textContent = 'Modo Claro';

    }else {
        cambioClase.replace('dark', 'default');
        toggle.textContent = 'Modo Oscuro'
    }

})