var ventanaAbierta;
function abrirVentana(){
    let ventana={
        url:"https://google.es",
        nombre:"miventana",
        configuracion:"resizable, left=100, top=100, width=500, height=500"
    }
    ventanaAbierta=window.open(ventana.url, ventana.nombre, ventana.configuracion);
    // ventanaAbierta=window.open("https://google.es", "miventana", "resizable, left=100px, top=100px, width=500px, height=500px");
}
function cerrarVentana(){
    ventanaAbierta.close();
}