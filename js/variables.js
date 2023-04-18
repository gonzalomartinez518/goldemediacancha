const canchas = [{tipo: 'futbol 5', precio: '$6000'},
                {tipo: 'futbol 7', precio: '$8400'},
                {tipo: 'futbol 9', precio: '$10800'},
                {tipo: 'futbol 11', precio: '$13200'},]

const dias = ['hoy', 'mañana', 'pasado mañana']

const horarios = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']

const carrito = localStorage.getItem('carrito') ? JSON.parse(localStorage.getItem('carrito')) : [];

const selectCancha = document.querySelector("#cancha")

const selectDia = document.querySelector("#dia")

const selectHorario= document.querySelector("#horario")

const botonBuscar = document.querySelector("#boton")

const tablaReserva = document.querySelector("#tablaReserva")

const botonCancelar = document.querySelector("#cancelar");





