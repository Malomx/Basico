var texto= document.getElementById("Textito");
var boton= document.getElementById("Botoncito");
boton.addEventListener("click",dibujoporClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho =d.width;

function dibujoporClick(){
    lineas = parseInt(texto.value);
    var lineas,l=0,x1,y1,x2,y2;
    var esp = ancho / lineas;

for(l=0;l < lineas;l++){
    x1=0,y1=ancho-(l*esp),x2=esp*(l+1),y2=0;
    dibujarLinea("red",x1,y1,x2,y2);
}
for(l=0;l < lineas;l++){
    x1=0,y1=esp*l,x2=esp*(l+1),y2=ancho;
    dibujarLinea("green",x1,y1,x2,y2);
}
for(l=0;l < lineas;l++){
    x1=ancho,y1=l*esp,x2=ancho-(l+1)*esp,y2=ancho;
    dibujarLinea("blue",x1,y1,x2,y2);
}
for(l=0;l < lineas;l++){
    x1=l*esp,y1=0,x2=ancho,y2=esp*(l+1);
    dibujarLinea("yellow",x1,y1,x2,y2);
}

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

