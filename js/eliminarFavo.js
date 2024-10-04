function eliminarFavorito(id_favo) {
    param = {
        "id_favo": id_favo
    };

    $.ajax({
        data: param,
        url: 'ctroUser.php',
        dataType: 'html',
        method: 'GET',
        success: function (respuesta) {
            console.log("Respuesta del servidor: " + respuesta.trim()); // Asegúrate de usar trim()

            // Usa trim() para evitar problemas con espacios adicionales
            if (respuesta.trim() === "1") {
                Swal.fire({
                    icon: "success",
                    title: "Eliminado correctamente",
                    text: "El producto ha sido eliminado de favoritos."
                }).then(() => {
                    window.location.reload(); // Recargar la página
                });
            }else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Ocurrió un error al eliminar el producto."
                });
            }
        },
        error: function (xhr, status, error) {
            console.log("Error en la solicitud AJAX: " + error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Hubo un error en la solicitud al servidor."
            });
        }
    });
}
