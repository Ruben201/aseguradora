// INICIO DE LAS COSAS QUE YA NO SE DEBEN DE MOVER
document.addEventListener('DOMContentLoaded', function() {
  var formulario = document.getElementById('miFormulario');
  var botonSubmit = formulario.querySelector('button[type="submit"]');
  var modalBody = document.getElementById('modalBody');

  formulario.addEventListener('input', function() {
      // Recupera la información de los campos del formulario
      var numSerie = document.getElementById('numSerie').value;
      var color = document.getElementById('color').value;
      var tipoCobertura = document.getElementById('tipoCobertura').value;
      var plazoPoliza = document.getElementById('plazoPoliza').value;
      var marcaAuto = document.getElementById('marcaAuto').value;
      var modeloAuto = document.getElementById('modeloAuto').value;
      var anioAuto = document.getElementById('anioAuto').value;
      var placas = document.getElementById('placas').value;
      

      // Verifica si todos los campos están completos
      var camposCompletos = numSerie.trim() !== '' && numSerie.length === 17 && color.trim() !== '' && tipoCobertura.trim() !== '' && placas.trim() !== '' && plazoPoliza.trim() !== '' &&marcaAuto.trim() !== '' &&modeloAuto.trim() !== '' &&anioAuto.trim() !== '';

      // Actualiza la propiedad "disabled" del botón de envío
      botonSubmit.disabled = !camposCompletos;
  });

  formulario.addEventListener('submit', function(event) {
      // Detén el comportamiento predeterminado del formulario (evita que se recargue la página)
      event.preventDefault();

      // Recupera la información de los campos del formulario
      var numSerie = document.getElementById('numSerie').value;
      var color = document.getElementById('color').value;
      var tipoCobertura = document.getElementById('tipoCobertura').value;
      var plazoPoliza = document.getElementById('plazoPoliza').value;
      var marcaAuto = document.getElementById('marcaAuto').value;
      var modeloAuto = document.getElementById('modeloAuto').value;
      var anioAuto = document.getElementById('anioAuto').value;
      var placas = document.getElementById('placas').value;

      // Verifica si todos los campos están completos
      if (numSerie.trim() === '' || numSerie.length !== 17 || color.trim() === '' || tipoCobertura.trim() === '' || placas.trim() === '' || placas.length !== 8 || plazoPoliza.trim() === '' || marcaAuto.trim() === '' || modeloAuto.trim() === '' || anioAuto.trim() === '') {
          // Muestra el modal con el mensaje de error
          modalBody.innerHTML = '<p>Campos faltantes. Favor de revisar</p>';
          $('#miModal').modal('show');
      } else {
          // Si no hay campos vacíos, puedes continuar con otras acciones
          // Por ejemplo, mostrar la información en el modal
          modalBody.innerHTML = '<p>Número de serie: ' + numSerie + '</p>';
          modalBody.innerHTML += '<p>Color de auto: ' + color + '</p>';
          modalBody.innerHTML += '<p>Tipo de cobertura: ' + tipoCobertura + '</p>';
          modalBody.innerHTML += '<p>Plazo de poliza: ' + plazoPoliza +'</p>';
          modalBody.innerHTML += '<p>Marca del auto: ' + marcaAuto + '</p>';
          modalBody.innerHTML += '<p>Modelo del auto: ' + modeloAuto + '</p>';
          modalBody.innerHTML += '<p>Año del auto: ' + anioAuto + '</p>';
          modalBody.innerHTML += '<p>Placas del auto: ' + placas + '</p>';

          // Muestra el modal
          $('#miModal').modal('show');
      }
  });

  // Deshabilita el botón al cargar la página si algún campo está vacío inicialmente
  var numSerie = document.getElementById('numSerie').value;
  var color = document.getElementById('color').value;
  var tipoCobertura = document.getElementById('tipoCobertura').value;
  var plazoPoliza = document.getElementById('plazoPoliza').value;
  var marcaAuto = document.getElementById('marcaAuto').value;
  var modeloAuto = document.getElementById('modeloAuto').value;
  var anioAuto = document.getElementById('anioAuto').value;
  botonSubmit.disabled = numSerie.trim() === '' || color.trim() === '' || tipoCobertura.trim() === '' || placas.trim() === '' || placas.length !== 8 || plazoPoliza.trim() === '' || marcaAuto.trim() === '' || modeloAuto.trim() === '' || anioAuto.trim() === '';
});


function actualizarModelos() {
  var marcaSeleccionada = document.getElementById("marcaAuto").value; // Obtener el valor seleccionado en el primer select
  var modeloSeleccionado = document.getElementById("modeloAuto"); // Obtener el segundo select

  modeloSeleccionado.innerHTML = ""; // Limpiar las opciones actuales
  
  switch (marcaSeleccionada) { // Llenar las opciones del segundo select basado en la categoría seleccionada
    case "Abarth":
      agregarOpcion(modeloSeleccionado, "abarth 500", "Abarth 500");
      agregarOpcion(modeloSeleccionado, "abarth 595", "Abarth 595");
      break;

    case "BMW":
      agregarOpcion(modeloSeleccionado, "bmw i4", "BMW i4");
      agregarOpcion(modeloSeleccionado, "bmw i5", "BMW i5");
      agregarOpcion(modeloSeleccionado, "bmw i7", "BMW i7");
      agregarOpcion(modeloSeleccionado, "bmw ix", "BMW iX");
      agregarOpcion(modeloSeleccionado, "bmw ix1", "BMW iX1");
      agregarOpcion(modeloSeleccionado, "bmw ix2", "BMW iX2");
      agregarOpcion(modeloSeleccionado, "bmw ix3", "BMW iX3");
      agregarOpcion(modeloSeleccionado, "bmw serie 1", "BMW Serie 1");
      agregarOpcion(modeloSeleccionado, "bmw serie 2", "BMW Serie 2");
      agregarOpcion(modeloSeleccionado, "bmw serie 3", "BMW Serie 3");
      break;

    case "Dacia":
      agregarOpcion(modeloSeleccionado, "dacia duster", "Dacia Duster");
      agregarOpcion(modeloSeleccionado, "dacia jogger", "Dacia Jogger");
      agregarOpcion(modeloSeleccionado, "dacia sander", "Dacia Sander");
      agregarOpcion(modeloSeleccionado, "dacia spring", "Dacia Spring");
      break;

      case "Infiniti":
          agregarOpcion(modeloSeleccionado, "infiniti q50 2.2d", "Infiniti Q50 2.2D");
          agregarOpcion(modeloSeleccionado, "infiniti q30 2.2d", "Infiniti Q30 1.5D");
          agregarOpcion(modeloSeleccionado, "infiniti qx30 2.2 diesel premium awd", "Infiniti QX30 2.2 Diesel Premium AWD");
          break;

          case "Kia":
              agregarOpcion(modeloSeleccionado, "kia cee'd", "KIA cee'd");
              agregarOpcion(modeloSeleccionado, "kia ev6", "KIA EV6");
              agregarOpcion(modeloSeleccionado, "kia ev9", "KIA EV9");
              agregarOpcion(modeloSeleccionado, "kia niro", "KIA Niro");
              agregarOpcion(modeloSeleccionado, "kia picanto", "KIA Picanto");
              agregarOpcion(modeloSeleccionado, "kia rio", "KIA Rio");
              agregarOpcion(modeloSeleccionado, "kia sorento", "KIA Sorento");
              agregarOpcion(modeloSeleccionado, "kia soul", "KIA Soul");
              agregarOpcion(modeloSeleccionado, "kia sportage", "KIA Sportage");
              agregarOpcion(modeloSeleccionado, "kia stonic", "KIA Stonic");
              break;
    default:
    break;
  }
}

function agregarOpcion(select, valor, texto) {
  var opcion = document.createElement("option");
  opcion.value = valor;
  opcion.text = texto;
  select.appendChild(opcion);
}

function obtenerListaUltimosAnios() {
  // Obtén el año actual
  var anioActual = new Date().getFullYear();

  // Crea una lista de los últimos 10 años
  var listaAnios = [];
  for (var i = 0; i < 50; i++) {
      listaAnios.push(anioActual - i);
  }

  return listaAnios;
}

// Obtén la referencia del elemento SELECT en el DOM
var anioAuto = document.getElementById("anioAuto");

// Obtén la lista de últimos 10 años
var listaUltimosAnios = obtenerListaUltimosAnios();

// Recorre la lista y crea opciones para cada año
listaUltimosAnios.forEach(function(anio) {
  var option = document.createElement("option");
  option.value = anio;
  option.text = anio;
  anioAuto.appendChild(option);
});

// FIN DE LAS COSAS QUE YA NO SE DEBEN DE MOVER

function btnRedireccionar(){
  var dato = document.getElementById('marcaAuto').value;
  var datoModelo = document.getElementById('modeloAuto').value;

  localStorage.setItem('datoEnviado', dato);
  localStorage.setItem('dato2Enviado', datoModelo);

  window.location.href = 'comprarPolizaOficial2.html'
}

function validarEntrada(input) {
  // Eliminar espacios y guiones
  input.value = input.value.replace(/[\s-]/g, '');

  // Verificar si hay espacios o guiones y mostrar un mensaje de error
  if (input.value.includes(' ') || input.value.includes('-')) {
    alert('Por favor, elimine los espacios y guiones.');
    input.value = input.value.replace(/[\s-]/g, '');
  }
}