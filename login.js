function validatePassword() {
    var password = document.getElementById("password").value;

    // Comprueba que la contraseña tenga al menos un número
    if (!/\d/.test(password)) {
        alert("La contraseña debe contener al menos un número.");
        return false;
    }

    // Comprueba que la contraseña tenga al menos un símbolo
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
        alert("La contraseña debe contener al menos un símbolo.");
        return false;
    }

    // Comprueba que la contraseña tenga al menos una letra mayúscula
    if (!/[A-Z]/.test(password)) {
        alert("La contraseña debe contener al menos una letra mayúscula.");
        return false;
    }

    // Comprueba que la contraseña tenga al menos una letra minúscula
    if (!/[a-z]/.test(password)) {
        alert("La contraseña debe contener al menos una letra minúscula.");
        return false;
    }

    return true;
}

function btnRedireccionar(){
    window.location.href = '../Conductor/registroConductor.html';
}