var json={"a":"1","b":"2","c":"3"};
function aJSON(texto){
    let tex=JSON.parse(texto);
    document.getElementById("resultadotexto").textContent=JSON.stringify(tex);
}
function aTexto(){
    console.log(json);
    document.getElementById("resultadojson").textContent=JSON.stringify(json);
}