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