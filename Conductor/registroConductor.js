document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('miFormulario');
    var botonSubmit = formulario.querySelector('button[type="submit"]');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe normalmente

        var nombre = document.getElementById('nombre').value;
        var apePaterno = document.getElementById('apePaterno').value;
        var apeMaterno = document.getElementById('apeMaterno').value;
        var numLicencia = document.getElementById('numLicencia').value;
        var celular = document.getElementById('celular').value;
        var password = document.getElementById('password').value;

        var dia = parseInt(document.getElementById('dia').value, 10);
        var mes = parseInt(document.getElementById('mes').value, 10);
        var anio = parseInt(document.getElementById('anio').value, 10);

        var fechaIngresada = new Date(anio, mes - 1, dia); // Meses en JavaScript van de 0 a 11
        var fechaActual = new Date();

        var camposCompletos = nombre.trim() !== '' || apePaterno.trim() !== '' || apeMaterno.trim() !== '' || numLicencia.trim() !== '' || celular.trim() !== '' || password.trim() !== '';
        var fechaValida = fechaIngresada <= fechaActual;

        var licenciaValida = numLicencia.length === 10;
        var celularValido = celular.length === 10;

        var formatoValido = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(nombre) && /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(apePaterno) && /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(apeMaterno);

        if (!camposCompletos) {
            alert('Por favor, completa todos los campos.');
        } else if (!fechaValida) {
            alert('La fecha de nacimiento no puede ser en el futuro.');
        } else if(!licenciaValida){
            alert('La licencia debe contener 10 carácteres');
        } else if(!formatoValido){
            alert('Por favor, ingresa solo texto en los campos de nombre, apellido paterno y apellido materno.');
        } else if(!celularValido){
            alert('El número de celular debe contener 10 digitos');
        }else {
            // Procesar el formulario o redirigir a otra página
            // En este ejemplo, simplemente muestra un mensaje de éxito
            alert('Registro creado exitosamente!');
            window.location.href = '../login.html';
        }
    });

    // Obtener el año actual y establecerlo como el valor máximo permitido
    var anioActual = new Date().getFullYear();
    document.getElementById('anio').max = anioActual;

    formulario.addEventListener('input', function () {
        var nombre = document.getElementById('nombre').value;
        var apePaterno = document.getElementById('apePaterno').value;
        var apeMaterno = document.getElementById('apeMaterno').value;
        var numLicencia = document.getElementById('numLicencia').value;
        var celular = document.getElementById('celular').value;
        var password = document.getElementById('password').value;

        var camposCompletos = nombre.trim() !== '' || apePaterno.trim() !== '' || apeMaterno.trim() !== '' || numLicencia.trim() !== '' || celular.trim() !== '' || password.trim() !== '';
        botonSubmit.disabled = !camposCompletos;
    });
});