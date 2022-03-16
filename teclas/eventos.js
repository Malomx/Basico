document.addEventListener("keyup", dibujaTeclado);
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
//console.log (teclas);

var cuadrito = document.getElementById("Dibuja");
var papel = cuadrito.getContext("2d");
var x=150,y=150;

dibujaLinea("red",149,149,151,151,papel);

function dibujaTeclado(evento)
{
    var colorsito="blue";
    var mov = 10;
    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujaLinea(colorsito, x, y, x, y - mov, papel);
            y  = y - mov;
        break;    
        case teclas.DOWN:
            dibujaLinea(colorsito, x, y, x, y + mov, papel);
            y = y + mov;
        break;
        case teclas.LEFT:
            dibujaLinea(colorsito, x, y, x - mov, y, papel);
            x = x - mov;
        break;
        case teclas.RIGHT:
            dibujaLinea(colorsito, x, y, x + mov, y, papel);
            x = x + mov;
        break;
        default:
            console.log("Otra tecla");
            break;

    }
}
function dibujaLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
    {
        lienzo.beginPath();
        lienzo.strokeStyle= color;
        lienzo.lineWidth = 3;
        lienzo.moveTo(xinicial,yinicial);
        lienzo.lineTo(xfinal, yfinal);
        lienzo.stroke();
        lienzo.closePath();
    }