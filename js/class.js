class Reserva {
    constructor(id, cancha, precio,dia,horario) {
        this.id = id
        this.cancha = cancha
        this.precio = precio
        this.dia = dia
        this.horario = horario
    }
    procesarReserva() {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            text: `La cancha de ${this.cancha} está disponible, el precio de la reserva es de $${this.precio}. ¿Desea completar su reserva para ${this.dia} a las ${this.horario} horas?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si completar',
            cancelButtonText: 'No completar',
            reverseButtons: true
            }).then((result) => {
            if (result.isConfirmed) {
                const nuevaReserva = {id: this.id, tipo: this.cancha, precio: this.precio, dia: this.dia, horario: this.horario};
                carrito.push(nuevaReserva); 
                cargarCarrito(carrito)
                localStorage.setItem('carrito', JSON.stringify(carrito));
                swalWithBootstrapButtons.fire(
                'Su reserva fue completada!',
                'Muchas gracias, por favor revise la sección "Mis Reservas" para gestionarla y decidir método de pago',
                'success'
                )
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                'Su reserva no fue completada!',
                'Vuelva a reservar con nosotros cuando lo desee',
                'error'
            )
            }
        })
    }
}