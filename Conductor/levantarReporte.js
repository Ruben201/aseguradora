//INICIO DE COSAS QUE YA NO SE DEBEN DE MOVER
function initMap() {
    var centroMapa = { lat: 19.549735, lng: -96.923702 };
    var mapa = new google.maps.Map(document.getElementById('map'), {
        center: centroMapa,
        zoom: 12
    });

    var marcador = new google.maps.Marker({
        position: centroMapa,
        map: mapa,
        title: 'Mi Marcador'
    });
    var input = document.getElementById('pac-input');     // Configurar el autocompletado
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', mapa);

    //Buscar
    autocomplete.addListener('place_changed', function() {  // Escuchar el evento de selección del lugar
        var place = autocomplete.getPlace();

        if (!place.geometry) {
            window.alert("No se encontraron detalles para el lugar: '" + place.name + "'");
            return;
        }

        mapa.setCenter(place.geometry.location);  // Centrar el mapa en la ubicación seleccionada
        marcador.setPosition(place.geometry.location);      // Mover el marcador a la ubicación seleccionada
        actualizarLatitudLongitud(place.geometry.location.lat(), place.geometry.location.lng());
    });
     google.maps.event.addListener(mapa, 'click', function(event) {  // Escuchar el evento de clic en el mapa para mover el marcador
        moverMarcador(marcador, event.latLng);
        actualizarLatitudLongitud(event.latLng.lat(), event.latLng.lng());
    });
}

function moverMarcador(marcador, ubicacion) { // Función para mover el marcador a una ubicación específica
    marcador.setPosition(ubicacion);
}
function actualizarLatitudLongitud(latitud, longitud) {
    document.getElementById('latitudLabel').innerText = 'Latitud: ' + latitud.toFixed(6);
    document.getElementById('longitudLabel').innerText = 'Longitud: ' + longitud.toFixed(6);
}

document.getElementById('nomConducAfec').addEventListener('input', function () {
  // Obtener el valor del campo de entrada
  var inputValue = this.value;

  // Eliminar todos los caracteres que no son letras, espacios ni caracteres especiales
  var alphanumeric = inputValue.replace(/[^A-Za-z0-9\s\W]/g, '');

  // Actualizar el valor del campo de entrada con letras, espacios y caracteres especiales
  this.value = alphanumeric;
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

function duplicarFormulario() {
// Clona el formulario afectado original y agrega al contenedor
var formularioOriginal = document.querySelector('.formlarioAfectado');
var formularioClonado = formularioOriginal.cloneNode(true);
document.getElementById('contenedorFormularios').appendChild(formularioClonado);
}

function eliminarFormulario() {
// Obtiene todos los formularios afectados
var formularios = document.querySelectorAll('.formlarioAfectado');

// Solo elimina si hay más de un formulario
if (formularios.length > 1) {
    // Elimina el último formulario afectado
    var formularioEliminar = formularios[formularios.length - 1];
    formularioEliminar.parentNode.removeChild(formularioEliminar);
}
}
// FIN DE COSAS QUE YA NO SE PUEDEN MOVER

function abrirCamara() {
  // Contador de fotos tomadas
  var fotosTomadas = 0;

  // Obtener el elemento de video en el que se mostrará la transmisión de la cámara
  var video = document.createElement('video');
  video.style.width = '30%';
  video.style.height = 'auto';
  document.body.appendChild(video);

  // Obtener el botón para capturar la foto
  var capturarBoton = document.createElement('button');
  capturarBoton.textContent = 'Capturar Foto';
  capturarBoton.onclick = function () {
    if (fotosTomadas < 4) {
      capturarFoto(video);
      fotosTomadas++;
      if (fotosTomadas === 4) {
        capturarBoton.disabled = true;
      }
    }
  };
  document.body.appendChild(capturarBoton);

  capturarBoton.style.position = 'absolute';
  capturarBoton.style.top = '148%';  // Ajusta la distancia desde la parte inferior según tus necesidades
  capturarBoton.style.right = '38%';   

  // Solicitar acceso a la cámara
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      // Mostrar la transmisión de la cámara en el elemento de video
      video.srcObject = stream;
      video.play();

      video.style.position = 'absolute';
      video.style.right = '44%';
      video.style.top = '148%';
    })
    .catch(function (error) {
      console.error('Error al abrir la cámara: ', error);
    });
}

function capturarFoto(video) {
  // Crear un lienzo para capturar la imagen
  var canvas = document.createElement('canvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  var context = canvas.getContext('2d');

  // Dibujar la imagen del video en el lienzo
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Crear un elemento de imagen para mostrar la foto capturada
  var foto = document.createElement('img');
  foto.style.width = '10%';
  foto.style.height = 'auto';
  //foto.style.marginRight = '50%';  // Mover hacia la derecha
  foto.style.marginLeft = '58%';


  document.body.appendChild(foto);
  

  // Obtener la URL de la imagen en formato base64
  var fotoURL = canvas.toDataURL('image/png');

  // Mostrar la imagen capturada
  foto.src = fotoURL;
}




function validarFormulario() {
  // Verificar campos de datos del auto afectado
  var nomConducAfecNombre = document.getElementById('nomConducAfecNombre').value;
  var nomConducAfecApellidoP = document.getElementById('nomConducAfecApellidoP').value;
  var nomConducAfecApellidoM = document.getElementById('nomConducAfecApellidoM').value;
  var marcaAuto = document.getElementById('marcaAuto').value;
  var modeloAuto = document.getElementById('modeloAuto').value;
  var placas = document.getElementById('placas').value;
  var color = document.getElementById('color').value;

  // Verificar campos de ubicación
  var latitud = document.getElementById('latitudLabel').textContent;
  var longitud = document.getElementById('longitudLabel').textContent;

  // Validar que todos los campos estén llenos
  if (
      nomConducAfecNombre === '' ||
      nomConducAfecApellidoP === '' ||
      nomConducAfecApellidoM === '' ||
      marcaAuto === '' ||
      modeloAuto === '' ||
      placas === '' ||
      color === '' ||
      latitud === 'Latitud: ' ||
      longitud === 'Longitud: '
  ) {
      console.error('Por favor, complete todos los campos y seleccione la ubicación en el mapa.');
      return false; // Evita que el formulario se envíe
  }

  // Mensaje de éxito en la consola
  console.log('Formulario enviado correctamente');
  window.location.href = "levantarReporteExito.html";

  // Aquí puedes agregar más validaciones según tus necesidades

  return true; // Envía el formulario si todos los campos están llenos
}