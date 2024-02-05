function enviarInfo() {
    var nombre = document.getElementById("Nombre").value;
    var correo = document.getElementById("Correo").value;
    var mensaje = document.getElementById("Mensaje").value;

    var info = "\nNombre: " + nombre + "\nCorreo: " + correo + "\nMensaje: " + mensaje;

    alert("Información que se va a enviar: " + info + "\n¿Quiere enviarla?");

    var pre;
    do {
        pre = prompt("¿Quiere enviar esta información? (S/N)").toUpperCase();
    } while (pre !== "S" && pre !== "N");

    return pre === "S";
}

