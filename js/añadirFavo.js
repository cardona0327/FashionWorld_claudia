function agregarFavo(idProducto, nombreProducto) {
    param = {
        "idPro": idProducto,
        "nombreProducto": nombreProducto
    };

    $.ajax({
        data: param,
        url: 'ctroUser.php',
        dataType: 'html',
        method: 'GET',
        success: function (respuesta) {
            console.log("Respuesta del servidor: " + respuesta);

            if (respuesta.trim() === "1") {
                Swal.fire({
                    icon: "success",
                    title: "Producto agregado",
                    text: "El producto se ha agregado a favoritos correctamente."
                });
            } else if (respuesta.trim() === "2") {
                Swal.fire({
                    icon: "info",
                    title: "Ya en favoritos",
                    text: "Este producto ya está en tu lista de favoritos."
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Hubo un error al intentar agregar el producto a favoritos."
                });
            }
        },
        error: function (xhr, status, error) {
            console.error("Error en la solicitud AJAX: " + error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Hubo un error en la solicitud al servidor."
            });
        }
    });
}
