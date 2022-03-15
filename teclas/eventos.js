document.addEventListener("keyup", dibujaTeclado);
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
//console.log (teclas);

var d=document.getElementById("Dibuja");
var lienzo = d.getContext("2d");

function dibujaTeclado(evento)
{
    switch(evento.keyCode)
    {
        case teclas.UP:
            console.log("Vamoh' pa'rriba");
        break;    
        case teclas.DOWN:
            console.log("Vamoh' pa'bajo");
        break;
        case teclas.LEFT:
            console.log("Vamoh' pa'la Izquierda");
        break;
        case teclas.RIGHT:
            console.log("Vamoh' pa'la deresha");
        break;
        default:
            console.log("Otra tecla");
            break;

    }
}
