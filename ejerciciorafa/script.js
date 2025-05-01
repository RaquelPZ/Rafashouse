// Escribir a la par

const guion = " · ";
const colorI = document.querySelector("#color_i");
let valorColor;
colorI.addEventListener("keyup", (event) =>{
    valorColor = colorI.value;
    const laMuestra = document.querySelector("#color_m");
    laMuestra.innerHTML = guion + valorColor + guion;
    comprobarValorColor();
});

const signoI = document.querySelector("#signo_i");
let valorSigno;
signoI.addEventListener("keyup", (event) =>{
    valorSigno = signoI.value;
    const laMuestra = document.querySelector("#signo_m");
    laMuestra.innerHTML = guion + valorSigno + guion;
    comprobarValorSigno();
});

const estacionI = document.querySelector("#estacion_i");
let valorEstacion;
estacionI.addEventListener("keyup", (event) =>{
    valorEstacion = estacionI.value;
    const laMuestra = document.querySelector("#estacion_m");
    laMuestra.innerHTML = guion + valorEstacion + guion;
    comprobarValorEstacion();
});

//Cabio de colores

const elColor = "Turquesa";
const colorP = document.querySelector("#color_p");


function comprobarValorColor() {
    if ( valorColor === elColor ) {
        colorP.classList.remove("incorrecto");
        colorP.classList.add("correcto");
        caraColor.innerHTML = cara;
    } else {
        colorP.classList.remove("correcto");
        colorP.classList.add("incorrecto");
    }
};

const elSigno = "Cáncer";
const signoP = document.querySelector("#signo_p");

function comprobarValorSigno(){
    if ( valorSigno === elSigno ) {
        signoP.classList.remove("incorrecto");
        signoP.classList.add("correcto");
        caraSigno.innerHTML = cara;
    } else {
        signoP.classList.remove("correcto");
        signoP.classList.add("incorrecto");
    }
};

const laEstacion = "Verano";
const estacionP = document.querySelector("#estacion_p");

function comprobarValorEstacion(){
    if ( valorEstacion === laEstacion ) {
        estacionP.classList.remove("incorrecto");
        estacionP.classList.add("correcto");
        caraEstacion.innerHTML = cara;
    } else {
        estacionP.classList.remove("correcto");
        estacionP.classList.add("incorrecto");
    }
};

const cara = "☻";
const caraColor = document.querySelector ("#color_d");
const caraSigno = document.querySelector ("#signo_d");
const caraEstacion = document.querySelector ("#estacion_d");

