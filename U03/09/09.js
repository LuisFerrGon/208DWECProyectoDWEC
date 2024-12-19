var a=0;
var intervalID;
function iniciar(){
    intervalID = setInterval(cambiarColor, 1000);
}
function cambiarColor(){
    switch(a){
        case 0:
            document.getElementById("rojo").style.backgroundColor="rgb(255, 0, 0)";
            document.getElementById("amarillo").style.backgroundColor="rgb(128, 128, 0)";
            document.getElementById("verde").style.backgroundColor="rgb(0, 128, 0)";
            break;
        case 1:
            document.getElementById("rojo").style.backgroundColor="rgb(128, 0, 0)";
            document.getElementById("amarillo").style.backgroundColor="rgb(255, 255, 0)";
            document.getElementById("verde").style.backgroundColor="rgb(0, 128, 0)";
            break;
        case 2:
            document.getElementById("rojo").style.backgroundColor="rgb(128, 0, 0)";
            document.getElementById("amarillo").style.backgroundColor="rgb(128, 128, 0)";
            document.getElementById("verde").style.backgroundColor="rgb(0, 255, 0)";
            break;
        default:
            document.getElementById("rojo").style.backgroundColor="rgb(0, 0, 0)";
            document.getElementById("amarillo").style.backgroundColor="rgb(0, 0, 0)";
            document.getElementById("verde").style.backgroundColor="rgb(0, 0, 0)";
            break;
    }
    a=(a+1)%3;
}
function parar(){
    clearInterval(intervalID);
    document.getElementById("rojo").style.backgroundColor="rgb(128, 0, 0)";
    document.getElementById("amarillo").style.backgroundColor="rgb(128, 128, 0)";
    document.getElementById("verde").style.backgroundColor="rgb(0, 128, 0)";
}