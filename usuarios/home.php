<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Saludo de Bienvenida</title>
    <link rel="stylesheet" type="text/css" href="../css/saludo.css">
</head>
<body>

<h1 id="saludo"></h1> <!-- Aquí se mostrará el saludo -->

<form id="formu-busqueda" class="d-flex ms-auto">
    <input id="nombrePro" class="form-control me-2" type="search" placeholder="producto" aria-label="Search">
    <button id="enviar" class="btn btn-outline-success" type="button" onclick="buscador()">
        <i class="fas fa-search" style="color: #7ED0D8; font-size: 24px;"></i>
    </button>
</form>

<div id="mostrarPro"></div>
<?php 
    echo Productos::mostrarPro();
?>


<script src="../js/saludo.js"></script>
<script>
    // Llama a la función de PHP para obtener el saludo
    const mensaje = "<?php 
    include_once("../method/saludo.php");
    echo obtenerSaludoBienvenida(); ?>"; // Llama a la función PHP

    // Asegúrate de que el mensaje se haya obtenido
    console.log(mensaje); // Esto ayudará a depurar

    mostrarSaludoEnIdiomas(mensaje); // Llama a la función de JavaScript
</script>
</body>
</html>
