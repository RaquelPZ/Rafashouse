
const colorBueno = "#0AE6CC";
const colorElegido = document.getElementById('colorFavorito').value; // Esto devolverá un valor hexadecimal, como "#ff0000"
const btnAceptar = document.querySelector ("#btn_22");

btnAceptar.addEventListener("click", (event) =>{
    if ( colorBueno === colorElegido ) {
        // clearTimeout (elTiempo);
        btnAceptar.classList.add("correcto");
    } else {
        btnAceptar.classList.add("incorrecto");
    }
});