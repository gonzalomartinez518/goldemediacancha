const botonConfirmar = document.querySelector("#botonConfirmar")

const botonCancelar = document.querySelector("#botonCancelar")

function confirmarPago() {
    const tarjetaNombre = document.querySelector("#tarjetaNombre").value;
    const tarjetaNumero = document.querySelector("#tarjetaNumero").value;
    const tarjetaVencimiento = document.querySelector("#tarjetaVencimiento").value;
    const tarjetaCVV = document.querySelector("#tarjetaCVV").value;
    if (tarjetaNombre.trim() === "" || tarjetaNumero.trim() === "" || tarjetaVencimiento.trim() === "" || tarjetaCVV.trim() === "") {
        Swal.fire({
            icon: "warning",
            title: "Campos incompletos",
            text: "Por favor completa todos los campos de la tarjeta de crédito para continuar."
        });
        return;
    }    
    let timerInterval
    Swal.fire({
        title: 'Estamos procesando tu pago',
        html: 'aguarde un momento por favor...',
        allowOutsideClick: false,
        timer: 3000,
        timerProgressBar: false,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire(
                'Pago aprobado',
                'Recibirá un correo de confirmación',
                'success'
            )
            .then(() => {
                actualizarReservasConfirmadas()
                window.location.href = '../index.html';
            }) 
        }
    })
}

function cancelarPago() {
    Swal.fire({
        title: '¿Quieres cancelar tu pago?',
        text: "Serás re-direccionado al menú principal",
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#d33',
        confirmButtonText: 'Si, cancelar'
        }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = '../index.html';
        }
        })
}

botonConfirmar.addEventListener("click", confirmarPago)

botonCancelar.addEventListener("click", cancelarPago)

function actualizarReservasConfirmadas() {
let reservasConfirmadas = JSON.parse(localStorage.getItem('ReservaConfirmada')) || [];
let carritoCheckoutNuevo = JSON.parse(localStorage.getItem('carritoCheckout'));
let arrayUnificado = reservasConfirmadas.concat(carritoCheckoutNuevo);
localStorage.setItem('ReservaConfirmada', JSON.stringify(arrayUnificado));
}

const precioFinal = document.querySelector('#precioFinal');
precioFinal.innerHTML = `<fieldset disabled>
                        <div class="mb-3 col-md-6">
                            <input type="text" id="precioFinal" class="form-control" value="Total a pagar: $${carritoCheckout[0].precio}">
                        </div>`;


