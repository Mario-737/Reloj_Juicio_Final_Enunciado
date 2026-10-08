'use strict';

dayjs.extend(dayjs_plugin_customParseFormat);
dayjs.extend(dayjs_plugin_duration);
dayjs.extend(dayjs_plugin_utc);
dayjs.extend(dayjs_plugin_timezone);
dayjs.locale('es');

// ==================================================
// PUNTO 1: EDAD EN COSAS RARAS
// ==================================================

function contarViernes13() {
  let contador = 0



  return contador
}

function calcularEdad(fechaNac) {
  mostrarEdad(fechaNac)
}

function mostrarEdad(fechaNac) {
  document.querySelector('#resultado-edad').removeAttribute('hidden')
  document.querySelector('#dias-edad').textContent=dayjs().diff(fechaNac, 'day')
  document.querySelector('#horas-edad').textContent=dayjs().diff(fechaNac, 'hour')
  document.querySelector('#segundos-edad').textContent=dayjs().diff(fechaNac, 'second')
  document.querySelector('#dia-semana').textContent=fechaNac.format('dddd')
  document.querySelector('#viernes').textContent='x'
}

function procesarFormularioEdad() {
  
  let input = document.querySelector('input')
  let fechaNac = dayjs(input.value)
  calcularEdad(fechaNac)
}

function iniciarEdad() {
  procesarFormularioEdad()
}

// ==================================================
// PUNTO 2: CUENTA ATRÁS
// ==================================================

function descomponerDuracion() {

}

function actualizarCuentaAtras() {

}

function iniciarCuentaAtras() {

}

// ==================================================
// PUNTO 3: ZONAS HORARIAS
// ==================================================

function actualizarZonasHorarias() {

}

// ==================================================
// INICIO Y ACTUALIZACIÓN COMÚN
// ==================================================

function actualizarRelojes() {
  actualizarCuentaAtras();
  actualizarZonasHorarias();
}

let boton = document.querySelector('button')
boton.addEventListener('click', e => {
  e.preventDefault()
  iniciarEdad();
})


iniciarCuentaAtras();

// Ejecutamos la función nada más empezar y creamos un intervalo
actualizarRelojes();
// Un intervalo permite ejecutar una función cada x segundos (1000ms == 1seg)
setInterval(actualizarRelojes, 1000);

