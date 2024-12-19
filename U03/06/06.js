function validarNombre(nombre){
    if(/^(\w{2,})(\s\w+)*$/gm.test(nombre)){
        alert('El nombre introducido es valido')
    }else{
        alert('El nombre introducido es invalido');
    }
}
function validarApellidos(apellidos){
    if(/^(\w{2,})(-\w+)*( )(\w{2,})(-\w+)*$/gm.test(apellidos)){
        alert('Los apellidos introducidos son validos')
    }else{
        alert('Los apellidos introducidos son invalidos');
    }
}
function validarDireccion(direccion){
    if(/^(C\/\w{2,})(\s\w+)*(, )(\d+)(, )(\d{1,2})(, )(\w)$/gm.test(direccion)){
        alert('La direccion introducida es valida')
    }else{
        alert('La direccion introducida es invalida');
    }
}
function validarTelefono(telefono){
    if(/^(\d{3})(-)(\d{3})(-)(\d{3})$/gm.test(telefono)){
        alert('El telefono introducido es valido')
    }else{
        alert('El telefono introducido es invalido');
    }
}