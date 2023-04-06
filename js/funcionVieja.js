function reservarCancha() {
    let reservaActual = {};
    let codigoCanchaIngresado = parseInt(prompt(mensajes.canchas).trim());
    let codigoCanchaEncontrado = canchas.find(cancha => cancha.codigo == codigoCanchaIngresado);
    if(codigoCanchaEncontrado) {
        reservaActual.cancha = codigoCanchaEncontrado;
        let codigoDiaIngresado = parseInt(prompt(mensajes.dias).trim());
        let codigoDiaEncontrado = dias.find(dia => dia.codigo == codigoDiaIngresado);
        if(codigoDiaEncontrado) {
            reservaActual.dia = codigoDiaEncontrado;
            let codigoHorarioIngresado = parseInt(prompt(mensajes.horarios).trim());
            let codigoHorarioEncontrado = horarios.find(horario => horario.codigo == codigoHorarioIngresado);
            if(codigoHorarioEncontrado) {
                reservaActual.horario = codigoHorarioEncontrado;
                let confirmarReserva = confirm(`La cancha de ${reservaActual.cancha.tipo} está disponible, el precio es de ${reservaActual.cancha.precio}. ¿Desea confirmar su reserva para ${reservaActual.dia.dia} a las ${reservaActual.horario.horario} horas?`);
                if(confirmarReserva == true) {
                    reserva.push(reservaActual);
                    alert("Muchas gracias por su reserva, los esperamos!")
                }
                else {
                    let reservaCancelada = confirm("¿Desea realizar otra reserva?");
                    if (reservaCancelada == true) {
                        reservarCancha();
                    }
                    else {
                        alert("Muchas gracias por su tiempo, que tenga buen día")
                    }
                }
            }
            else {
                alert("Debe ingresar un código válido, intente nuevamente");
                reservarCancha();
            }
        }
        else {
            alert("Debe ingresar un código válido, intente nuevamente");
            reservarCancha();
        }
    }
    else {
        alert("Debe ingresar un código válido, intente nuevamente");
        reservarCancha();
    }
}