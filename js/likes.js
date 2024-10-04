function likear(element) {
    var idProducto = $(element).data('id_producto');
    var param = {
        "idProducto": idProducto
    };

    $.ajax({
        data: param,
        url: "../usuarios/ctroUser.php?like=true",
        method: "POST",
        success: function(respuesta) {
            console.log("Respuesta del servidor: ", respuesta);

            if (respuesta) {
                // Alternar el ícono de like entre vacío y relleno
                $(element).toggleClass('fas far liked');
                
                // Extraer la nueva cantidad de likes de la respuesta
                var newLikes = parseInt(respuesta.trim(), 10);
                console.log("Nueva cantidad de likes: ", newLikes);

                // Actualizar la cantidad de likes en el DOM
                var likesElement = $("strong.likes-count[data-id_producto='" + idProducto + "']");
                if (likesElement.length) {
                    likesElement.text('Likes: ' + newLikes);
                } else {
                    console.log("No se encontró el elemento de likes para actualizar.");
                }
            } else {
                console.log("Error al procesar el like.");
            }
        },
        error: function(xhr, status, error) {
            console.log("Error: " + error);
        }
    });
}







// function likear(element) {
//     var valor = $(element).data('id_producto');
//     var param = {
//        "idProducto": valor
//     };

//     $.ajax({
//         data: param,
//         url: "../usuarios/ctroUser.php?like=true",
//         dataType: "html",
//         method: "post",
//         success: function(respuesta){
//             console.log(respuesta);
//         },
//         error: function(status, xhr, error){
//             console.log("eror: "+error);
//         }
//     });
// }


// function likear(element) {
//     var valor = $(element).data('id_producto');
//     var param = {
//        "idProducto": valor
//     };

//     $.ajax({
//         data: param,
//         url: "../usuarios/ctroUser.php?like=true",
//         dataType: "html",
//         method: "post",
//         success: function(respuesta){
//             console.log(respuesta);
//         },
//         error: function(status, xhr, error){
//             console.log("eror: "+error);
//         }
//     });
// }






    // function likear(element) {
    //     var valor = $(element).data('id_producto');
    //     var param = {
    //         "idProducto": valor
    //     };
    
    //     $.ajax({
    //         data: param,
    //         url: "../usuarios/ctroUser.php?like=true",
    //         dataType: "html",
    //         method: "post",
    //         success: function(respuesta){
    //             if (respuesta == 1) {
    //                 $(element).toggleClass('liked');
    //             } else {
    //                 console.log("Error al procesar la solicitud de like.");
    //             }
    //         },
    //         error: function(status, xhr, error){
    //             console.log("Error: " + error);
    //         }
    //     });
    // }










// function likear(){
//     var valor = $(this).data('id_producto');
//     var param = {
//        "idProducto": valor
//     }

//     $.ajax({
//         data: param,
//         url: "../admi/ctroAdmi.php?like=true",
//         dataType : "html",
//         method: "post",
//         success: function(respuesta){
//             console.log(respuesta);
            
//         },
//         error: function(status,xhr,error){
//             console.log(error);
//         }
//     })
// }

