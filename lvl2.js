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
const preferenciasCheck = {};
const preferenciasBien = {
  cafe: 'sicafe',
  bebe: 'cerveza',
  pan: 'corteza',
  luz: 'calida',
  music: 'punk',
};

const equipoCheck = {};
const equipoBien = [
  lexa,
  hiedra,
  claire,
  spiderman,
  stitch,
];

const equipoCromos = document.querySelector(".equipo_cromos");
const equipoNuevo = document.querySelectorAll(".equipo_check");
equipoNuevo.addEventListener("change", (ev)=> {
  equipoCromos.innerHTML = equipoNuevo.value;
  console.log("Nuevo cromo de equipo"); 
});


// // Seleccionamos todos los checkboxes de personajes
// const checkboxes = document.querySelectorAll('.equipo_check');
// // Contenedor donde se mostrarán los cromos
// const contenedorCromos = document.querySelector('.equipo_cromos');

// checkboxes.forEach((checkbox) => {
//   checkbox.addEventListener('change', () => {
//     const personaje = checkbox.parentElement.textContent.trim();
//     const id = `cromo-${checkbox.value}`;

//     if (checkbox.checked) {
//       // Crear el cromo si está marcado
//       const cromo = document.createElement('div');
//       cromo.id = id;
//       cromo.classList.add('cromo');
//       cromo.textContent = personaje;
//       contenedorCromos.appendChild(cromo);
//     } else {
//       // Eliminar el cromo si se desmarca
//       const cromo = document.getElementById(id);
//       if (cromo) cromo.remove();
//     }
//   });
// });
