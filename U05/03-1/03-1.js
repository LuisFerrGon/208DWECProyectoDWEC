var cancion=document.getElementById("cancion");
function inicio(){
    cancion.currentTime=0;
    cancion.play();
}
function seguir(){
    cancion.play();
}
function parar(){
    cancion.pause();
}
function detener(){
    cancion.pause();
    cancion.currentTime=0;
}
function final(){
    cancion.currentTime=cancion.duration;
}