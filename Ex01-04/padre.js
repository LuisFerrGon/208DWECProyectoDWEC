var ventanaHija;
var semaforoCreado=false;
function crearSemaforo(){
    document.getElementById("semaforo").innerHTML='<div class="cuerpo colorNegro"><div id="rojo" class="bombilla colorRojo"></div><div id="amarillo" class="bombilla colorAmarillo"></div><div id="verde" class="bombilla colorVerde"></div></div>';
    document.getElementById("crearSemaforo").style.display='none';
    semaforoCreado=true;
}
function abrir(){
    if(ventanaHija){
        ventanaHija.close();
    }
    ventanaHija=window.open("hija.html");
}
function cerrar(){
    if(ventanaHija){
        ventanaHija.close();
    }
}
function cambiarColor(pass, color){
    if(semaforoCreado){
        if(/^[a-zA-Z\d]{3,6}[@#~%&\/$][a-zA-Z\d]{3,6}$/gm.test(pass)){
            switch(color){
                case "rojo":
                    document.getElementById("rojo").style.backgroundColor="rgb(255, 0, 0)";
                    document.getElementById("amarillo").style.backgroundColor="rgb(128, 128, 0)";
                    document.getElementById("verde").style.backgroundColor="rgb(0, 128, 0)";
                break;
                case "amarillo":
                    document.getElementById("rojo").style.backgroundColor="rgb(128, 0, 0)";
                    document.getElementById("amarillo").style.backgroundColor="rgb(255, 255, 0)";
                    document.getElementById("verde").style.backgroundColor="rgb(0, 128, 0)";
                break;
                case "verde":
                    document.getElementById("rojo").style.backgroundColor="rgb(128, 0, 0)";
                    document.getElementById("amarillo").style.backgroundColor="rgb(128, 128, 0)";
                    document.getElementById("verde").style.backgroundColor="rgb(0, 255, 0)";
                break;
                default:
                    document.getElementById("rojo").style.backgroundColor="rgb(128, 0, 0)";
                    document.getElementById("amarillo").style.backgroundColor="rgb(128, 128, 0)";
                    document.getElementById("verde").style.backgroundColor="rgb(0, 128, 0)";
                break;
            }
        }else{
            alert("La contraseña es inválida");
        }
    }else{
        alert("No se ha creado el semáforo");
    }
}