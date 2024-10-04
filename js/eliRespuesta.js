function eliminarRespuesta(id_respuesta) {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "No podrás deshacer esta acción.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarlo'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: 'ctroUser.php',
                method: 'POST',
                data: {
                    accion: 'eliminarRespuesta',
                    id_respuesta: id_respuesta
                },
                success: function(response) {
                    if (response.includes("Error")) {
                        Swal.fire('Error', 'Hubo un problema al eliminar el comentario.', 'error');
                    } else {
                        $('#foro-container').html(response);  // Actualiza el foro
                        Swal.fire('Eliminado', 'El comentario ha sido eliminado.', 'success');
                    }
                },
                error: function() {
                    Swal.fire('Error', 'No se pudo eliminar el comentario.', 'error');
                }
            });
        }
    });
}
