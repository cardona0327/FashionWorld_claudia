function visibilidadcontraseñaE() {
    const passwordField = document.getElementById('input-old-password');
    const showPassword = document.getElementById('showPasswordE');
    if (showPassword.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}

function visibilidadcontraseñaN() {
    const passwordField = document.getElementById('input-new-password');
    const showPassword = document.getElementById('showPasswordN');
    if (showPassword.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}