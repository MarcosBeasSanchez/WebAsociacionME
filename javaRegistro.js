function generarCodigoAleatorio() {
  var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let cod = '';

  for (let i = 0; i < 7; i++) {
      var indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      cod += caracteres.charAt(indiceAleatorio);
  }

  return cod;
}

function verificarCodigo() {
  var codigoIngresado = document.getElementById('codigoInput').value;
  var codigoGenerado = a; 
  if (codigoIngresado === codigoGenerado) {
      alert('¡Código correcto!');
      return true; 
  } else {
      alert('Código incorrecto. Inténtalo de nuevo.');
      return false; 
  }
}

function mostrarInformacion() {
    var nombre = document.getElementsByName('Nombre')[0].value;
    var apellidos = document.getElementsByName('Apellidos')[0].value;
    var documento = document.getElementsByName('Documento')[0].value;
    var correo = document.getElementsByName('Correo')[0].value;
    var estadoCivil = document.getElementsByName('EstadoCivil')[0].value;
    var telefono = document.getElementsByName('Telefono')[0].value;
    var dias = obtenerDiasSeleccionados();
    var motivacion = obtenerMotivacionSeleccionada();
    var motivacionOtro = document.getElementsByName('MotivacionOtro')[0].value;
    var observaciones = document.getElementsByName('Observaciones')[0].value;
    
    var informacion = "Nombre: " + nombre +
                      "\nApellidos: " + apellidos +
                      "\nNúmero de Identificación: " + documento +
                      "\nCorreo Electrónico: " + correo +
                      "\nEstado Civil: " + estadoCivil +
                      "\nTeléfono: " + telefono +
                      "\nDisponibilidad: " + dias +
                      "\nMotivación: " + motivacion +
                      "\nMotivación (Otros): " + motivacionOtro +
                      "\nObservaciones: " + observaciones;

    alert(informacion);
}

function obtenerDiasSeleccionados() {
    var diasSeleccionados = document.getElementsByName('Dias');
    var dias = [];

    for (var i = 0; i < diasSeleccionados.length; i++) {
        if (diasSeleccionados[i].checked) {
            dias.push(diasSeleccionados[i].value);
        }
    }

    return dias.join(", ");
}

function obtenerMotivacionSeleccionada() {
    var motivacionSeleccionada = document.getElementsByName('Motivacion');
    var motivacion = [];

    for (var i = 0; i < motivacionSeleccionada.length; i++) {
        if (motivacionSeleccionada[i].checked) {
            motivacion.push(motivacionSeleccionada[i].value);
        }
    }

    return motivacion.join(", ");
}


var a = generarCodigoAleatorio(); 
document.write(a);
