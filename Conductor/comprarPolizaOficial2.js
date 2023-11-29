//INICIO DE COSAS QUE NO SE DEBEN DE TOCAR
var dato = localStorage.getItem('datoEnviado');
var datoModelo = localStorage.getItem('dato2Enviado');

document.getElementById('infoAuto').innerText = 'Marca del vehículo: ' + dato + '\n';
document.getElementById('infoAuto').innerText += 'Modelo del vehículo: ' + datoModelo;
localStorage.removeItem('datoEnviado');
localStorage.removeItem('dato2Enviado');

function formatearNumero(input) {
    // Obtener el valor actual del input
    var valor = input.value;

    // Eliminar cualquier carácter no numérico
    valor = valor.replace(/\D/g, '');

    // Aplicar el formato deseado (4 dígitos + espacio + 5 dígitos + espacio + 6 dígitos)
    if (valor.length > 4 && valor.length <= 9) {
        valor = valor.substring(0, 4) + ' ' + valor.substring(4, 9);
    } else if (valor.length > 9) {
        valor = valor.substring(0, 4) + ' ' + valor.substring(4, 9) + ' ' + valor.substring(9, 15);
    }

    // Asignar el valor formateado al input
    input.value = valor;
}
function validarNumero(input) {
    // Obtener el valor actual del campo
    let valor = input.value;

    // Eliminar cualquier caracter que no sea un dígito
    valor = valor.replace(/\D/g, '');

    // Limitar la longitud a 3 dígitos
    valor = valor.slice(0, 3);

    // Asignar el valor modificado al campo
    input.value = valor;
  }

  function btnRedireccionar(){
    window.location.href = 'comprarPolizaOficial1.html'
  }

  function manejarInput1(input){
    formatearNumero(input);
    mostrarPalomita(input);
  }

  function manejarInput3(input){
    validarNumero(input);
    mostrarPalomita(input);
  }

  function mostrarPalomita(input) {
    var checkmark = input.nextElementSibling;

    if (input.value.trim() !== '') {
      checkmark.classList.add('show-checkmark');
      input.classList.add('completed');
    } else {
      checkmark.classList.remove('show-checkmark');
      input.classList.remove('completed');
    }
  }

  //FIN DE COSAS QUE NO SE DEBEN DE TOCAR

//SE TIENE QUE REVISAR PORQUE NO DESHABILITA LOS BOTONES
document.addEventListener('DOMContentLoaded', function() {
  var formulario = document.getElementById('miFormulario');

  formulario.addEventListener('submit', function(event) {
    // Detén el comportamiento predeterminado del formulario (evita que se recargue la página)
    event.preventDefault();

    // Recupera la información de los campos del formulario
    var mensaje = document.getElementById('mensaje').value;
    var mesAnio = document.getElementById('mesAnio').value;
    var numero = document.getElementById('numero').value;
    var tarjeta = document.getElementById('tarjeta').value;
    var banco = document.getElementById('banco').value;

    // Verifica si hay campos vacíos
    if (mensaje.trim() === '' || mensaje.length !== 17 || mesAnio.trim()==='' || numero.trim()==='' || tarjeta.trim()==='' || banco.trim()===''  ) {
      // Realiza alguna acción en lugar de mostrar el modal (puedes agregar un mensaje de error, por ejemplo)
      console.log('Campos faltantes. Favor de revisar');
    } else {
      // Si no hay campos vacíos, puedes continuar con otras acciones
      // Por ejemplo, realizar alguna operación o mostrar la información en la consola
      console.log('Información del formulario:', {
        mensaje: mensaje
      });
      // Redirige a la página "home.html"
      window.location.href = "comprarPolizaOficial3.html";
    }
  });
});
  