function validarDatosCompletados() {
    return (selectCancha.value !== "Cancha" && selectDia.value !== "Día" && selectHorario.value !== "Horario")
}

function reservarCancha() {
    if (validarDatosCompletados() === true) {
        const nuevaReserva = new Reserva(selectCancha.value, selectDia.value, selectHorario.value)
        nuevaReserva.procesarReserva()

    } else {
        alert("Debe seleccionar Cancha, Día y Horario")
    }
}

botonBuscar.addEventListener("click", reservarCancha)
