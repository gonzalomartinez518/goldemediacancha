class Reserva {
    constructor(cancha,dia,horario) {
        this.cancha = cancha
        this.dia = dia
        this.horario = horario
    }
    procesarReserva() {
        let confirmarReserva = confirm(`La cancha de ${selectCancha.value} está disponible. ¿Desea confirmar su reserva para ${selectDia.value} a las ${selectHorario.value} horas?`);
        if(confirmarReserva == true) {
            alert("Muchas gracias por su reserva, los esperamos!")
        } else {
            alert("Vuelva a reservar con nosotros cuando lo desee")
        }      
    }
}