var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30,l=0,x1,y1,x2,y2;

while(l < lineas){
    x1=0,y1=300-(l*10),x2=10*(l+1),y2=0;
    dibujarLinea("red",x1,y1,x2,y2);
    l=l+1;
}
l=0;
while(l < lineas){
    x1=0,y1=10*l,x2=10*(l+1),y2=300;
    dibujarLinea("green",x1,y1,x2,y2);
    l=l+1;
}
l=0;
while(l < lineas){
    x1=300,y1=l*10,x2=300-(l+1)*10,y2=300;
    dibujarLinea("blue",x1,y1,x2,y2);
    l=l+1;
}
l=0;
while(l < lineas){
    x1=l*10,y1=0,x2=300,y2=10*(l+1);
    dibujarLinea("yellow",x1,y1,x2,y2);
    l=l+1;
}
dibujarLinea("black",1,1,1,299);
dibujarLinea("black",299,299,299,1);
dibujarLinea("black",1,299,299,299);
dibujarLinea("black",1,1,299,1);
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
    {
        lienzo.beginPath();
        lienzo.strokeStyle= color;
        lienzo.moveTo(xinicial,yinicial);
        lienzo.lineTo(xfinal, yfinal);
        lienzo.stroke();
        lienzo.closePath();
    }
    
