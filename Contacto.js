function enviarInfo (){
    var nombre = document.getElementById("Nombre").value;
    var correo = document.getElementById("Correo").value;
    var mensaje = document.getElementById("Mensaje").value;

    var info = "\nNombre: " + nombre + "\nCorreo: " + correo + "\nMensaje: " + mensaje;


    alert("Información que se va a enviar: " + info + "\n¿Quiere enviarla?");

    alert("Mensaje enviado correctamente");

    return true;
}
