// Si se utilixa export da error
var arrayPersonajes;
var resultado;
var url="https://swapi.dev/api/people";
var seleccion=document.createElement("select");
var tabla=document.createElement("table");
var anterior;
var siguiente;
fetch(url)
.then(response=>{
    if(response.ok){
        return response.json();
    }else{
        throw new Error("Error: "+response.status);
    }
})
.then(data=>{
    resultado=data;
    arrayPersonajes=resultado.results;
    anterior=resultado.previous;
    siguiente=resultado.next;
    if(siguiente==null){
        document.getElementById("botonPersonajesPaginaSiguiente").style="display:none";
    }
    if(anterior==null){
        document.getElementById("botonPersonajesPaginaAtras").style="display:none";
    }
})
.catch(error=>{
    console.log(error);
});
// Funcion para crear el selector
function crearSelect(array){
    for (let i = 0; i < array.length; i++) {
        opcion=document.createElement("option");
        opcion.innerHTML=array[i].name;
        opcion.setAttribute("value", i);
        seleccion.append(opcion);
    }
    document.getElementById("contenedorSelectPersonajes").replaceChildren(seleccion);
}
// Creación de la tabla
tabla.innerHTML="<tr><th>Nombre</th><th>Altura</th><th>Peso</th><th>Género</th></tr>";
seleccion.addEventListener(onchange, ()=>{
    console.log("cambio");
    let tr=document.createElement("tr");
    tr.innerHTML="<td>"+arrayPersonajes[seleccion.value].name+"</td>";
    tr.innerHTML+="<td>"+arrayPersonajes[seleccion.value].height+"</td>";
    tr.innerHTML+="<td>"+arrayPersonajes[seleccion.value].mass+"</td>";
    tr.innerHTML+="<td>"+arrayPersonajes[seleccion.value].gender+"</td>";
    tabla.append(tr);
    document.getElementById("contenedorTablaPersonajes").innerHTML=tabla;
})
function mostrarSiguiente(){
    if(siguiente!=null){
        url=siguiente;
    }
}
function mostrarAnterior(){
    if(anterior!=null){
        url=anterior;
    }
}