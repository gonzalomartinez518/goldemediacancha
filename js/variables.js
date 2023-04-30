const canchas = []

const URL = 'js/canchas.json'

const dias = ['hoy', 'mañana', 'pasado mañana']

const horarios = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']

let carrito = localStorage.getItem('carrito') ? JSON.parse(localStorage.getItem('carrito')) : [];

const selectCancha = document.querySelector("#cancha")

const selectDia = document.querySelector("#dia")

const selectHorario= document.querySelector("#horario")

const botonBuscar = document.querySelector("#boton")

const tablaReservasPendientes = document.querySelector("#tablaReservaPendiente")

const tablaReservasConfirmadas = document.querySelector("#tablaReservaConfirmada")

let reservaConfirmada = localStorage.getItem('ReservaConfirmada') ? JSON.parse(localStorage.getItem('ReservaConfirmada')) : [];

let carritoCheckout = localStorage.getItem('carritoCheckout') ? JSON.parse(localStorage.getItem('carritoCheckout')) : [];








