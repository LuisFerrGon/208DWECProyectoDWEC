var formularioIncidencia=document.getElementById("formularioIncidencia");
var apartadosIncidencia=array['area', 'nombre', 'apellidos', 'direccion', 'telefono', 'descripcion'];
var formularioCambioContrasena=document.getElementById("formularioCambioContrasena");
function mostrarIncidencia(){
    formularioIncidencia.classList.replace("ocultado", "mostrado");
    formularioCambioContrasena.classList.replace("mostrado", "ocultado");
}
function mostrarCambioContrsena(){
    formularioCambioContrasena.classList.replace("ocultado", "mostrado");
    formularioIncidencia.classList.replace("mostrado", "ocultado");
}
function verificar(apartado){
    let marca=document.getElementById(apartado);
    let regex;
    let valor=marca.value;
    if(apartado=='area'){
        if(valor=='gerencia'||valor=='2'||valor=='3'||valor=='4'||valor=='5'){
            marca.classList.remove('erroneo');
        }else{
            marca.classList.add('erroneo');
        }
    }else{
        switch (apartado) {
            case 'nombre':
                regex=/^(\w{2,})(\s\w+)*$/gm;
            break;
            case 'apellidos':
                regex=/^(\w{2,})(-\w+)*( )(\w{2,})(-\w+)*$/gm;
            break;
            case 'direccion':
                regex=/^(C\/\w{2,})(\s\w+)*(, )(\d+)(, )(\d{1,2})(, )(\w)$/gm;
            break;
            case 'telefono':
                regex=/^(\d{3})(-)(\d{3})(-)(\d{3})$/gm;
            break;
            case 'descripcion':
                regex=/^[\w+\s]+$/gm;
            break;
        }
        if(valor.match(regex)){
            marca.parentNode.parentNode.classList.remove('erroneo');
        }else{
            marca.parentNode.parentNode.classList.add('erroneo');
        }
    }
}