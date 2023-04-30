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

function reservarCancha() {
    if (validarDatosCompletados() === true) {
        const canchaSeleccionada = canchas.find(cancha => cancha.tipo === selectCancha.value);
        const precioCancha = canchaSeleccionada.precio;
        const nuevaReserva = new Reserva(generarId(), selectCancha.value, precioCancha, selectDia.value, selectHorario.value);
        nuevaReserva.procesarReserva();
        cargarCarrito(carrito)
    } else {
        alertaCompletarInformacion()
    }
}

function alertaCompletarInformacion () {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debe seleccionar cancha, día y horario para avanzar con la reserva',
    })
}

function generarId() {
    return Math.floor(Math.random() * 10000);
}  

function crearCarrito(carrito) {
    return `<tr>
                <td class="text-center" >${carrito.id}</td>
                <td class="text-center" >${carrito.tipo}</td>
                <td class="text-center" >${carrito.dia}</td>
                <td class="text-center" >${carrito.horario}</td>
                <td class="text-center" >${carrito.precio}</td>
                <td class="text-center" ><button id="${carrito.id}" type="button" class="confirmar btn btn-success">Confirmar</button></td>
                <td class="text-center" ><button type="button" class="cancelar btn btn-danger">Cancelar</button></td>
            </tr>`
}

function cargarCarrito(reserva){
    tablaReservasPendientes.innerHTML = "";
    if (carrito.length > 0) {
        reserva.forEach(element => {
        tablaReservasPendientes.innerHTML += crearCarrito(element)
        activarBotonesCancelar()
        activarBotonesConfirmar()
    })
}
}

cargarCarrito(carrito)

botonBuscar.addEventListener("click", reservarCancha)

function activarBotonesCancelar() {
    const botonCancelar = document.querySelectorAll(".cancelar");
    for (let boton of botonCancelar) {
    boton.addEventListener("click", (e)=> {
        let indice = carrito.findIndex(tipo => tipo.id === parseInt(e.target.id));
        Swal.fire({
            title: '¿Quieres cancelar tu reserva?',
            text: "No podrás revertirlo!",
            icon: 'warning',
            showCancelButton: false,
            confirmButtonColor: '#d33',
            confirmButtonText: 'Si, cancelar reserva'
            }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                'Su reserva fue cancelada',
                'Vuelva a reservar con nosotros pronto',
                'success'
            )
            carrito.splice(indice, 1);
            cargarCarrito(carrito);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            }
            })
        })
    }
}

function activarBotonesConfirmar() {
    const botonConfirmar = document.querySelectorAll(".confirmar")
    for (boton of botonConfirmar) {
        boton.addEventListener("click", (e)=> {
            let indice = carrito.find(tipo => tipo.id === parseInt(e.target.id))
            Swal.fire({
                title: '¿Quieres confirmar tu reserva?',
                text: "Serás re-direccionado a la web de pago",
                icon: 'warning',
                showCancelButton: false,
                confirmButtonColor: '#198754',
                confirmButtonText: 'Si, proceder con el pago'
                }).then((result) => {
                if (result.isConfirmed) {
                    carritoCheckout.push(indice); 
                    localStorage.setItem('carritoCheckout', JSON.stringify(carritoCheckout));
                    carrito.splice(indice, 1);
                    cargarCarrito(carrito);
                    localStorage.setItem('carrito', JSON.stringify(carrito));
                    window.location.href = 'pages/checkout.html';
                }
                })
        } )
    }
}

function limpiarCarritoCheckout() {
    localStorage.removeItem("carritoCheckout");
    carritoCheckout = []
}

limpiarCarritoCheckout()

function crearReservasConfirmadas(reservaConfirmada) {
    return `<tr>
                <td class="text-center" >${reservaConfirmada.id}</td>
                <td class="text-center" >${reservaConfirmada.tipo}</td>
                <td class="text-center" >${reservaConfirmada.dia}</td>
                <td class="text-center" >${reservaConfirmada.horario}</td>
                <td class="text-center" >${reservaConfirmada.precio}</td>
                <td class="text-center" ><b>Confirmado</b></td>
            </tr>`
}

function cargarReservasConfirmadas(reserva){
    tablaReservasConfirmadas.innerHTML = "";
    if (carrito.length > 0) {
        reserva.forEach(element => {
        tablaReservasConfirmadas.innerHTML += crearReservasConfirmadas(element)
    })
}
}

cargarReservasConfirmadas(reservaConfirmada)


