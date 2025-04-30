// 1. coger el valor de la cajita 

// 2. Coger el div de violeta

// 3. poner en el div de violeta el valor que hemos cogido de la cajita


const elNombre = document.querySelector("input");
let elValor;
elNombre.addEventListener("keyup", (event) =>{
    elValor = elNombre.value;
    const laVio = document.querySelector(".violeta");
    laVio.innerHTML = elValor;
    comprobarValor();
});

// 1. Guardar el nombre de Fermin

// 2. Comparar fermin con elValor

// 3. si es igual: subtitulo se vulve ver (h1)

const elGato = "Fermín";
const parrafo =document.querySelector("p");
function comprobarValor() {
    if ( elValor === elGato ) {
        parrafo.classList.remove("incorrecto");
        parrafo.classList.add("correcto");
    } else {
        parrafo.classList.remove("correcto");
        parrafo.classList.add("incorrecto");
    }
};

