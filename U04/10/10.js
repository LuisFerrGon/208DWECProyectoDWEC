var ventanaAbierta1;
var ventanaAbierta2;
function abrir(){
    if(ventanaAbierta1){
        ventanaAbierta1.close();
    }
    ventanaAbierta1=window.open("../09/09.html");
}
function lista(){
    if(ventanaAbierta2){
        ventanaAbierta2.close();
    }
    ventanaAbierta2=window.open();
    console.log(ventanaAbierta2.opener.document.getElementsByTagName("div"));
}
function cerrar(){
    if(ventanaAbierta1){
        ventanaAbierta1.close();
    }
    if(ventanaAbierta2){
        ventanaAbierta2.close();
    }
}