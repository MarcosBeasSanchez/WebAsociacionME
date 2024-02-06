function calendario(){
     // Datos de dia , mes , anio se obtienen en el form y la var videojuego se obtiene por un prompt
    var dia = document.getElementById('dia').value;
    var mes = document.getElementById('mes').value;
    var anio = document.getElementById('anio').value;
    var videojuego = prompt("Ingresa el nombre del Videojuego");


            // Crear una fecha con la información del formulario
            var fecha = new Date(anio, mes - 1, dia);

            // Obtener el día de la semana (domingo = 0, lunes = 1, ..., sábado = 6)
            var diaSemana = fecha.getDay();

            // Obtener la posición en el calendario
            var posicion = diaSemana + parseInt(dia) - 1;

            // Acceder a la tabla y actualizar la celda correspondiente
            var table = document.getElementById('calendarioBody').getElementsByTagName('tr')[0];
           
            var newCell = table.insertCell(posicion);
            newCell.innerHTML = videojuego;

            // Falta por que salte de fila 
    
}