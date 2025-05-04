let elContador = 0;
const contadorC = document.querySelector("#puntos");
const elPremio = document.querySelector("#premio");

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

const persoI = document.querySelector("#perso_i");
let valorPerso;
persoI.addEventListener("keyup", (event) =>{
    valorPerso = persoI.value;
    const laMuestra = document.querySelector("#perso_m");
    laMuestra.innerHTML = guion + valorPerso + guion;
    comprobarValorPerso();
});

const luzI = document.querySelector("#luz_i");
let valorLuz;
luzI.addEventListener("keyup", (event) =>{
    valorLuz = luzI.value;
    const laMuestra = document.querySelector("#luz_m");
    laMuestra.innerHTML = guion + valorLuz + guion;
    comprobarValorLuz();
});

//Cabio de colores

const elColor = "Turquesa";
const colorP = document.querySelector("#color_p");

const cara = "☻";
const caraColor = document.querySelector ("#color_d");
const caraSigno = document.querySelector ("#signo_d");
const caraEstacion = document.querySelector ("#estacion_d");
const caraPerso = document.querySelector ("#perso_d");
const caraLuz = document.querySelector ("#luz_d");


function comprobarValorColor() {
    if ( valorColor === elColor ) {
        colorP.classList.remove("incorrecto");
        colorP.classList.add("correcto");
        caraColor.innerHTML = cara;
        elContador = elContador + 1;
        colorI.disabled = true;
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
        elContador = elContador + 1;
        signoI.disabled = true;
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
        elContador = elContador + 1;
        estacionI.disabled = true;
    } else {
        estacionP.classList.remove("correcto");
        estacionP.classList.add("incorrecto");
    }
};

const laPerso = "Siete";
const persoP = document.querySelector("#perso_p");

function comprobarValorPerso(){
    if ( valorPerso === laPerso ) {
        persoP.classList.remove("incorrecto");
        persoP.classList.add("correcto");
        caraPerso.innerHTML = cara;
        elContador = elContador + 1;
        persoI.disabled = true;
    } else {
        persoP.classList.remove("correcto");
        persoP.classList.add("incorrecto");
    }
};

const laLuz = "Rodilla";
const luzP = document.querySelector("#luz_p");

function comprobarValorLuz(){
    if ( valorLuz === laLuz ) {
        luzP.classList.remove("incorrecto");
        luzP.classList.add("correcto");
        caraLuz.innerHTML = cara;
        elContador = elContador + 1;
        luzI.disabled = true;
    } else {
        luzP.classList.remove("correcto");
        luzP.classList.add("incorrecto");
    }
};


const elFin = document.querySelector ("#fin");
const elTiempo = setTimeout (() => {
    elFin.classList.remove ('off');
    elFin.classList.add ('on');
}, 2*60*1000);

document.addEventListener("keyup", (event) =>{
    contadorC.innerHTML = elContador;
    if ( elContador === 5 ) {
        clearTimeout (elTiempo);
        console.log ('Todo correcto');
        elPremio.classList.remove ('off');
        elPremio.classList.add ('on2');
    }
});