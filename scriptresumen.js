document.addEventListener('DOMContentLoaded', function () {
    // Obtener el modal y el botón de cierre
    var modal = document.getElementById('modal');
    var cerrar = document.getElementsByClassName('cerrar')[0];
    var botonPagos = document.getElementById('botonpagos');

    // Función para mostrar el modal
    function mostrarModal() {
        modal.style.display = 'block';
    }

    // Función para ocultar el modal
    function ocultarModal() {
        modal.style.display = 'none';
    }

    // Evento de clic en el botón de cierre
    cerrar.onclick = ocultarModal;

    // Evento de clic en el botón de pagos para mostrar el modal
    botonPagos.onclick = mostrarModal;

    // Evento de clic fuera del modal para cerrarlo
    window.onclick = function(event) {
        if (event.target == modal) {
            ocultarModal();
        }
    };
});
