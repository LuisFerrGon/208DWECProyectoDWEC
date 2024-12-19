var ventanaPadre=window.opener.document;
var pass=window.opener.document.getElementById('passwd').value;
function cambiarColor(color){
    alert("Se intentará cambiar a "+color);
    if(/^[a-zA-Z\d]{3,6}[@#~%&\/$][a-zA-Z\d]{3,6}$/gm.test(pass)){
        switch(color){
            case "rojo":
                ventanaPadre.getElementById("rojo").style.backgroundColor="rgb(255, 0, 0)";
                ventanaPadre.getElementById("amarillo").style.backgroundColor="rgb(128, 128, 0)";
                ventanaPadre.getElementById("verde").style.backgroundColor="rgb(0, 128, 0)";
                alert("Se ha cambiado");
            break;
            case "amarillo":
                ventanaPadre.getElementById("rojo").style.backgroundColor="rgb(128, 0, 0)";
                ventanaPadre.getElementById("amarillo").style.backgroundColor="rgb(255, 255, 0)";
                ventanaPadre.getElementById("verde").style.backgroundColor="rgb(0, 128, 0)";
                alert("Se ha cambiado");
            break;
            case "verde":
                ventanaPadre.getElementById("rojo").style.backgroundColor="rgb(128, 0, 0)";
                ventanaPadre.getElementById("amarillo").style.backgroundColor="rgb(128, 128, 0)";
                ventanaPadre.getElementById("verde").style.backgroundColor="rgb(0, 255, 0)";
                alert("Se ha cambiado");
            break;
            default:
                ventanaPadre.getElementById("rojo").style.backgroundColor="rgb(128, 0, 0)";
                ventanaPadre.getElementById("amarillo").style.backgroundColor="rgb(128, 128, 0)";
                ventanaPadre.getElementById("verde").style.backgroundColor="rgb(0, 128, 0)";
                window.opener.alert("Se intentó cambiar a "+color);
            break;
        }
    }else{
        window.opener.alert("La contraseña es inválida");
    }
}