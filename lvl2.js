// Tiempo------------->
const elFin = document.querySelector ("#fin");
const elTiempo = setTimeout (() => {
    elFin.classList.remove ('off');
    elFin.classList.add ('on');
}, 1*60*100000);

document.addEventListener("keyup", (event) =>{
    contadorC.innerHTML = elContador;
    if ( elContador === 5 ) {
        clearTimeout (elTiempo);
        console.log ('Todo correcto');
        elPremio.classList.remove ('off');
        elPremio.classList.add ('on2');
    }
});

// Pregunta B----------->

const preferenciasBien = {
  cafe: 'sicafe',
  bebe: 'cerveza',
  pan: 'corteza',
  luz: 'calida',
  music: 'punk',
};

const equipoBien = [
  lexa,
  hiedra,
  claire,
  spiderman,
  stitch,
];





// const respuestasCorrectas = {
//   lexa: true,
//   hiedra: true,
//   claire: true,
//   spiderman: true,
//   stitch: true
// };

// const respuestasMarcadas = {};

// const equipoCheck = document.querySelectorAll('.equipo_check');

// const btnBienB = document.querySelector ("#btn_2B");

// equipoCheck.forEach((checkbox) => {
//   checkbox.addEventListener('change', () => {
//     const personaje = checkbox.value;

//     if (checkbox.checked) {
//       // Si se marca, lo añadimos al objeto
//       respuestasMarcadas[personaje] = true;
//     } else {
//       // Si se desmarca, lo eliminamos del objeto
//       delete respuestasMarcadas[personaje];
//     }

//     console.log(seleccion); // Para ver cómo se va actualizando
//   });
// });


// btnBienB.addEventListener("click", (event) =>{
// if ( respuestasCorrectas === respuestasMarcadas ) {
//   console.log ('Respuestas correctas B');
//   // laMuestra.innerHTML = guion + valorPerso + guion;
// }
// });
 






// document.getElementById('btn_2B').addEventListener('click', function (event) {
//   event.preventDefault();

//   // Obtener los seleccionados
//   const seleccionados = Array.from(document.querySelectorAll('input[name="pregunta0"]:checked'))
//     .map(input => input.value);

//   if (seleccionados.length !== 5) {
//     alert('Por favor, selecciona exactamente 5 personajes.');
//     return;
//   }

//   let aciertos = 0;

//   // Usamos el objeto para comprobar si el personaje está marcado como correcto
//   seleccionados.forEach(valor => {
//     if (respuestasCorrectas[valor]) {
//       aciertos++;
//     }
//   });

//   // Mostrar resultado
//   const resultado = document.getElementById('cromos_2B');
//   resultado.textContent = Has acertado ${aciertos} de 5 personajes.;

//   // Bloquear inputs y botón
// document.querySelectorAll('input[name="pregunta0"]').forEach(input => input.disabled = true);
//   document.getElementById('btn_2B').disabled = true;
// });

// const laIgualdad = valorColor === elColor && valorSigno === elSigno &&  valorEstacion === laEstacion && valorLuz === laLuz && valorPerso === laPerso;

// Respuestas correctas2A (ajústalas como prefieras)
// const respuestasCorrectas = {
//     pregunta1: 'sicafe',
//     pregunta2: 'cerveza',
//     pregunta3: 'corteza',
//     pregunta4: 'calida',
//     pregunta5: 'punk'
//   };
  
//   function comprobarRespuestas() {
//     let puntos = 0;
  
//     for (let i = 1; i <= 5; i++) {
//       const seleccion = document.querySelector(`input[name="preguntai"]:checked`);
//       if (seleccion        seleccion.value === respuestasCorrectas[`pregunta{i}`]) {
//         puntos++;
//       }
//     }
  
//     alert(`¡Has acertado ${puntos} de 5 preferencias de Rei!`);
//   }
  
//   document.getElementById('btn_2A').addEventListener('click', function (e) {
//     e.preventDefault();
//     comprobarRespuestas();
//   });


// const formulario2B = document.getElementById('preferencias');
// // const resultado = document.getElementById('resultado');

// formulario2B.addEventListener('submit', function(event) {
//   event.preventDefault();

//   // Obtener el radio seleccionado
//   const seleccionada = document.querySelector('input[name="capital"]:checked');

//   if (!seleccionada) {
//     resultado.textContent = 'Por favor, selecciona una opción.';
//     return;
//   }
//   const respuesta = seleccionada.value;

//   if (respuesta === 'sicafe') {
//     // resultado.textContent = '✅ ¡Correcto! París es la capital de Francia.';
//     console.log ('Correcta 2B')
//   } else {
//     // resultado.textContent = '❌ Incorrecto. La capital de Francia es París.';
//   }
// });


// // const colorBueno = "#0AE6CC";
// // const colorElegido = document.getElementById('colorFavorito').value; // Esto devolverá un valor hexadecimal, como "#ff0000"
// // const btnAceptar = document.querySelector ("#btn_22");

// // btnAceptar.addEventListener("click", (event) =>{
// //     if ( colorBueno === colorElegido ) {
// //         // clearTimeout (elTiempo);
// //         btnAceptar.classList.add("correcto");
// //     } else {
// //         btnAceptar.classList.add("incorrecto");
// //     }
// // });