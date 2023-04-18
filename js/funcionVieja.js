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

class Reserva {
    constructor(id, cancha, precio,dia,horario) {
        this.id = id
        this.cancha = cancha
        this.precio = precio
        this.dia = dia
        this.horario = horario
    }
    procesarReserva() {
        let confirmarReserva = confirm(`La cancha de ${this.cancha} está disponible, el precio de la reserva es de ${this.precio}. ¿Desea confirmar su reserva para ${this.dia} a las ${this.horario} horas?`);
        if(confirmarReserva == true) {
            alert('Muchas gracias, por favor revise la sección "Mis Reservas" para gestionarla y decidir método de pago')
            const nuevaReserva = {id: this.id, tipo: this.cancha, precio: this.precio, dia: this.dia, horario: this.horario}
            carrito.push(nuevaReserva)
            localStorage.setItem('carrito', JSON.stringify(carrito));            
        } else {
            alert("Vuelva a reservar con nosotros cuando lo desee")
        }      
    }
}

function crearOpcionesCancha(selectCancha, canchas) {
    if (canchas.length > 0) {
        canchas.forEach (cancha => {
            selectCancha.innerHTML += `<option>${cancha.tipo}</option>`
        })
    }
}
crearOpcionesCancha(selectCancha, canchas)

function crearOpciones(select, array) {
    if (array.length > 0) {
        array.forEach(element => {
            select.innerHTML += `<option>${element}</option>`
        })
    }
}
crearOpciones(selectDia, dias)
crearOpciones(selectHorario, horarios)

function validarDatosCompletados() {
    return (selectCancha.value !== "Cancha" && selectDia.value !== "Día" && selectHorario.value !== "Horario")
}

function generarId() {
    return Math.floor(Math.random() * 10000);
}  

function reservarCancha() {
    if (validarDatosCompletados() === true) {
        const canchaSeleccionada = canchas.find(cancha => cancha.tipo === selectCancha.value);
        const precioCancha = canchaSeleccionada.precio;
        const nuevaReserva = new Reserva(generarId(), selectCancha.value, precioCancha, selectDia.value, selectHorario.value);
        nuevaReserva.procesarReserva();
    } else {
        alert("Debe seleccionar cancha, día y horario para avanzar con la reserva")
    }
}

botonBuscar.addEventListener("click", reservarCancha)

botonCancelar.addEventListener("click", cancelarReserva);

function cancelarReserva() {
    localStorage.removeItem("carrito");
    alert("Su reserva ha sido cancelada y su carrito se ha eliminado del almacenamiento local");
}

function crearCarrito(carrito) {
    return `<tr>
                <td class="text-center" >${carrito.id}</td>
                <td class="text-center" >${carrito.tipo}</td>
                <td class="text-center" >${carrito.dia}</td>
                <td class="text-center" >${carrito.horario}</td>
                <td class="text-center" >${carrito.precio}</td>
                <td class="text-center" ><button id="${carrito.id}" type="button" class="btn btn-success">Confirmar</button></td>
                <td class="text-center" ><button type="button" class="btn btn-danger">Cancelar</button></td>
            </tr>`
}

function cargarCarrito(reserva){
    reserva.forEach(element => {
        tablaReserva.innerHTML += crearCarrito(element)
    })
}

cargarCarrito(carrito)