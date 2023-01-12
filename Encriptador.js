function encriptar() {
    //extraer texto del textarea
    var message = document.getElementById("input-text").value.toLowerCase();
    //validacion si coloco un texto en el text area
    if (message.length > 0) {
        //usar el metodo replaceAll para cambiar las vocales del texto
        var textEncriptado = message.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
        //manipulacion del dom para mostrar la respuesta
        document.querySelector(".image-notfound").style.display = "none";
        document.querySelector(".title-found").style.display = "none";
        document.querySelector(".text-anuncefound").style.display = "none";
        var response = document.querySelector("#response-text");
        response.style.display = "flex";
        response.innerHTML = textEncriptado;
        document.querySelector(".container-rigth").style.justifyContent = "space-between";
        document.querySelector(".container-rigth").style.padding = "0px";
        document.querySelector("#copy-btn").style.display = "flex";
        document.querySelector("#input-text").value = "";
    } else {
        alert("se necesita insertar texto");
    }
}