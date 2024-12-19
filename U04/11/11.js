var ventanaHija;
function abrir(){
    if(ventanaHija){
        ventanaHija.close();
    }
    ventanaHija=window.open("11-2.html");
}
var ventanaPadre=window.opener.document;
function llenar(){
    ventanaPadre.forms[0].elements[0].value="Nombre";
    ventanaPadre.forms[0].elements[1].value="Apellidos";
    ventanaPadre.forms[0].elements[2].value="Direccion";
    ventanaPadre.forms[0].elements[3].value="email";
    ventanaPadre.forms[0].elements[4].value="123-45-67-89";
    ventanaPadre.forms[0].elements[5].textContent="Comentario";
}