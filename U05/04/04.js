var contenedores=[
    document.getElementsByClassName("contenedor")[0],
    document.getElementsByClassName("contenedor")[1],
    document.getElementsByClassName("contenedor")[2],
    document.getElementsByClassName("contenedor")[3],
    document.getElementsByClassName("contenedor")[4],
    document.getElementsByClassName("contenedor")[5],
    document.getElementsByClassName("contenedor")[6],
    document.getElementsByClassName("contenedor")[7],
    document.getElementsByClassName("contenedor")[8]
]
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    colorear();
}

function drop(ev) {
    if(ev.target.children.length==0 && ev.target.tagName=="DIV"){
        ev.preventDefault();
        ev.target.appendChild(document.getElementById(ev.dataTransfer.getData("text")));
        colorear();
    }
}
function colorear(){
    contenedores.forEach(contenedor => {
        console.log(contenedor.innerHTML);
        if(/(id="cruz)/gm.test(contenedor.innerHTML)){
            contenedor.style.backgroundColor="#ff9999";
        }else if(/(id="circulo)/gm.test(contenedor.innerHTML)){
            contenedor.style.backgroundColor="#99ff99";
        }else{
            contenedor.style.backgroundColor="#ffffff";
        }
    });
}