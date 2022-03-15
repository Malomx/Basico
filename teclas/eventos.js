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
    if(evento.keyCode == teclas.UP)
    {
        console.log("Vamoh' pa'rriba");
    }
    if(evento.keyCode == teclas.DOWN)
    {
        console.log("Vamoh' pa'bajo");
    }
    if(evento.keyCode == teclas.LEFT)
    {
        console.log("Vamoh' pa'la Izquierda");
    }
    if(evento.keyCode == teclas.RIGHT)
    {
        console.log("Vamoh' pa'lah deresha");
    }

}
