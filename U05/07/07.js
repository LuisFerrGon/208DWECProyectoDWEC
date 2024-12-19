const claveGenerada=generarClave();
document.getElementById("claveGenerada").textContent+=claveGenerada;
var b1=document.getElementById("b1");
var b2=document.getElementById("b2");
var b3=document.getElementById("b3");
var b4=document.getElementById("b4");
var b5=document.getElementById("b5");
var b6=document.getElementById("b6");
var b7=document.getElementById("b7");
var b8=document.getElementById("b8");
var b9=document.getElementById("b9");
var b0=document.getElementById("b0");
var arraynum=[0,1,2,3,4,5,6,7,8,9];
var mensaje=document.getElementById("mensaje");

// Se genera clave y se muestra por pantalla
function generarClave(){
    let numero=(Math.round((Math.random()*999999)+1)).toString();
    while(numero.length!=6){
        numero="0"+numero;
    }
    return numero;
}

// Se mezcla el array y se muestra en los botones
function shuffle(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffle(arraynum);
b1.innerText=arraynum[0];
b2.innerText=arraynum[1];
b3.innerText=arraynum[2];
b4.innerText=arraynum[3];
b5.innerText=arraynum[4];
b6.innerText=arraynum[5];
b7.innerText=arraynum[6];
b8.innerText=arraynum[7];
b9.innerText=arraynum[8];
b0.innerText=arraynum[9];

function anadir(num){
    if(document.getElementById("inputClave").value.length<6){
        document.getElementById("inputClave").value+=num;
    }
}

function validar(numero){
    mensaje.classList.remove("correcto");
    mensaje.classList.remove("erroneo");
    if (numero==claveGenerada) {
        mensaje.innerText="¡Clave correcta!";
        mensaje.classList.add("correcto");
    }else{
        mensaje.innerText="Clave incorrecta. Intentalo de nuevo";
        mensaje.classList.add("erroneo");
    }
    document.getElementById("inputClave").value=null;
}