function calendario() {
        // Datos de día, mes, año se obtienen en el formulario y el nombre del videojuego se obtiene por un prompt
        var dia = document.getElementById('dia').value;
        var mes = document.getElementById('mes').value;
        var anio = document.getElementById('anio').value;
        var videojuego = prompt("Ingresa el nombre del Videojuego");
    
        // Crear una fecha con el primer día del mes
        var primerDiaMes = new Date(anio, mes - 1, 1);
    
        // Obtener el día de la semana del primer día del mes (domingo = 0, lunes = 1, ..., sábado = 6)
        var diaSemanaPrimerDiaMes = primerDiaMes.getDay();
    
        // Obtener la posición en el calendario
        var posicion = parseInt(dia) + diaSemanaPrimerDiaMes - 2;
    
        // Acceder a la tabla y actualizar la celda correspondiente
        var table = document.getElementById('calendarioBody');
    
        // Obtener la fila correspondiente
        var row = table.getElementsByTagName('tr')[Math.floor(posicion / 7)];
    
        // Si la fila no existe, crear una nueva fila
        if (!row) {
            row = table.insertRow();
        }
    
        // Obtener la celda correspondiente o crear una nueva
        var cell = row.cells[posicion % 7];
        if (!cell) {
            cell = row.insertCell(posicion % 7);
        }
    
        // Si la celda ya tiene un valor, borrarlo antes de insertar el nuevo evento
        if (cell.innerHTML !== "") {
            cell.innerHTML = "";
        }
    
        // Insertar el nombre del videojuego en la celda
        cell.innerHTML = videojuego;
    }
    