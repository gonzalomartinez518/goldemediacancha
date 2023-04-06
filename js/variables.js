const canchas = [{codigo: 1, tipo: 'futbol 5', precio: '$6000'},
                {codigo: 2, tipo: 'futbol 7', precio: '$8400'},
                {codigo: 3, tipo: 'futbol 9', precio: '$10800'},
                {codigo: 4, tipo: 'futbol 11', precio: '$13200'},]

const dias = [{codigo: 1, dia: 'hoy'},
                {codigo: 2, dia: 'mañana'},
                {codigo: 3, dia: 'pasado mañana'},]

const horarios = [{codigo: 1, horario: '17:00'},
                {codigo: 2, horario: '18:00'},
                {codigo: 3, horario: '19:00'},
                {codigo: 4, horario: '20:00'},
                {codigo: 5, horario: '21:00'},
                {codigo: 6, horario: '22:00'},
                {codigo: 7, horario: '23:00'},]

const reserva = []

const selectCancha = document.querySelector("#cancha")

const selectDia = document.querySelector("#dia")

const selectHorario= document.querySelector("#horario")

const botonBuscar = document.querySelector("#boton")