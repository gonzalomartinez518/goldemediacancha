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


