// Función para mostrar/ocultar la contraseña
function visibilidadcontraseña() {
    const passwordField = document.getElementById('password');
    const showPassword = document.getElementById('showPassword');
    if (showPassword.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}
