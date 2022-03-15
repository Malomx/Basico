document.addEventListener("keyup", dibujaTeclado);
var d=document.getElementById("Dibuja");
var lienzo = d.getContext("2d");

function dibujaTeclado(evento){
    console.log(evento.keyCode);
}