var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var x1,y1,x2,y2;
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
    
for (var i=0;i<300;i++)
{
    x1=0;y1=i*10; x2=i*10; y2=300;
    dibujarLinea("red",x1,y1,x2,y2);
    while (i<=300){
    x1=i*10;y1=0; x2=300; y2=i*10;
    dibujarLinea("green",x1,y1,x2,y2);
    }
}
