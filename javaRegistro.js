function generarCodigoAleatorio() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let cod = '';
  
    for (let i = 0; i < 7; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      cod += caracteres.charAt(indiceAleatorio);
    }
  
    return cod;
  }
  
  const codFinal = generarCodigoAleatorio();
  document.write(codFinal);

  function verificarCodigo() {
   
    const codigoIngresado = document.getElementById('codigoInput').value;
   
    const codigoGenerado = generarCodigoAleatorio();

    if (codigoIngresado === codigoGenerado) {
      alert('¡Código correcto! Puedes realizar la acción deseada aquí.');
    } else {
      alert('Código incorrecto. Inténtalo de nuevo.');
    }
  }