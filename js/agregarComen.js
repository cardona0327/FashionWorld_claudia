function enviarComentario() {
    var mensaje = document.getElementById('mensaje').value;
    
    if (mensaje.trim() === "") {
        alert("Por favor escribe un comentario antes de enviar.");
        return;
    }

    $.ajax({
        url: 'ctroUser.php',
        method: 'POST',
        data: {
            accion: 'agregarComentario',
            mensaje: mensaje
        },
        success: function(response) {
            $('#foro-container').html(response);
            document.getElementById('mensaje').value = '';  // Limpiar el campo de texto
        }
    });
}
