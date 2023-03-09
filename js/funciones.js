function reservar() {
    do {
        cancha = prompt(seleccionarCancha).trim();
        if (cancha !== "1" && cancha !== "2" && cancha !== "3" && cancha !== "4") {
        alert("Debe ingresar un codigo valido, intente nuevamente")
        }
    } while (
        cancha !== "1" &&
        cancha !== "2" &&
        cancha !== "3" &&
        cancha !== "4"
    )
    do {
        dia = prompt(seleccionarDia).trim()
        if (dia !== "1" && dia !== "2" && dia !== "3") {
        alert("Debe ingresar un codigo valido, intente nuevamente")
        }
    } while (
        dia !== "1" &&
        dia !== "2" &&
        dia !== "3"
    )
    do {
        horario = prompt(seleccionarHorario).trim()
        if (horario !== "1" && horario !== "2" && horario !== "3" && horario !== "4" && horario !== "5" && horario !== "6" && horario !== "7") {
        alert("Debe ingresar un codigo valido, intente nuevamente")
        }
    } while (
        horario !== "1" &&
        horario !== "2" &&
        horario !== "3" &&
        horario !== "4" &&
        horario !== "5" &&
        horario !== "6" &&
        horario !== "7"
    )
    if(cancha == "1") {
        confirmarReserva = confirm ("La cancha de futbol 5 está disponible, el precio es de $6.000. ¿Desea confirmar su reserva?")
        if(confirmarReserva == true) {
            alert ("Muchas gracias por su reserva, los esperamos!")
        }
        else {
            reservaCancelada = confirm ("¿Desea realizar otra reserva?")
            if (reservaCancelada == true) {
                reservar()
            }
            else {
                alert ("Muchas gracias por su tiempo, que tenga buen dia")
            }
        }
    }
    if(cancha == "2") {
        confirmarReserva = confirm ("La cancha de futbol 7 está disponible, el precio es de $8.400. ¿Desea confirmar su reserva?")
        if(confirmarReserva == true) {
            alert ("Muchas gracias por su reserva, los esperamos!")
        }
        else {
            reservaCancelada = confirm ("¿Desea realizar otra reserva?")
            if (reservaCancelada == true) {
                reservar()
            }
            else {
                alert ("Muchas gracias por su tiempo, que tenga buen dia")
            }
        }
    }
    if(cancha == "3") {
        confirmarReserva = confirm ("La cancha de futbol 9 está disponible, el precio es de $10.800. ¿Desea confirmar su reserva?")
        if(confirmarReserva == true) {
            alert ("Muchas gracias por su reserva, los esperamos!")
        }
        else {
            reservaCancelada = confirm ("¿Desea realizar otra reserva?")
            if (reservaCancelada == true) {
                reservar()
            }
            else {
                alert ("Muchas gracias por su tiempo, que tenga buen dia")
            }
        }
    }
    if(cancha == "4") {
        confirmarReserva = confirm ("La cancha de futbol 11 está disponible, el precio es de $13.200. ¿Desea confirmar su reserva?")
        if(confirmarReserva == true) {
            alert ("Muchas gracias por su reserva, los esperamos!")
        }
        else {
            reservaCancelada = confirm ("¿Desea realizar otra reserva?")
            if (reservaCancelada == true) {
                reservar()
            }
            else {
                alert ("Muchas gracias por su tiempo, que tenga buen dia")
            }
        }
    }
}