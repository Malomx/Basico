var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

dibujarLinea("pink",10,300,220,10);
dibujarLinea("blue",220,10,150,55);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
    {
        lienzo.beginPath();
        lienzo.strokeStyle= color;
        lienzo.moveTo(xinicial,yinicial);
        lienzo.lineTo(xfinal, yfinal);
        lienzo.stroke();
        lienzo.closePath();
    }