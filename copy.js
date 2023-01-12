function copiar() {
    //seleccionar la etiqueta con el valor a copiar
    var textContent = document.querySelector("#response-text").innerHTML;
    //crear un text area  para usar e metod select y execComand
    var textAreaProv = document.createElement('textarea');
    //darle el valor a al text area de la etiqueta a copiar
    textAreaProv.value = textContent;
    //generar estilos para ubicar el texarea fuera del diseño
    textAreaProv.setAttribute('readonly', '');
    textAreaProv.style = { position: 'absolute', left: '-9999px' };
    document.body.appendChild(textAreaProv);
    //usar metodo select para traer el valor a copiar del textarea
    textAreaProv.select();
    // usar execCommand para copiar el texto 
    document.execCommand('copy');
    alert("texto copiado");
    //remover el textarea creado para copiar el valor
    document.body.removeChild(textAreaProv);

}