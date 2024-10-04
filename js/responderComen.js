function responderComentario(idComentario) {
    Swal.fire({
        title: 'Responder Comentario',
        input: 'textarea',
        inputPlaceholder: 'Escribe tu respuesta...',
        showCancelButton: true,
        confirmButtonText: 'Enviar',
        cancelButtonText: 'Cancelar',
        preConfirm: (mensaje) => {
            if (mensaje.trim() === "") {
                Swal.showValidationMessage("Por favor escribe una respuesta.");
                return false;
            }
            return mensaje;
        }
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: 'ctroUser.php',
                method: 'POST',
                data: {
                    accion: 'responderComentario',
                    mensaje: result.value,
                    idComentario: idComentario
                },
                success: function(response) {
                    $('#foro-container').html(response);  // Actualiza el foro
                }
            });
        }
    });
}
