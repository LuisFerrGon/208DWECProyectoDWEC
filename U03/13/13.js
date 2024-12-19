function buscar(texto, palabra){
    let signos=" ,.!?¡¿\\\\\\\-\\\"\\\'";
    document.getElementById('desord').innerText="";
    document.getElementById('orden').innerText="";
    document.getElementById('cantidad').innerText="";
    let regExp=new RegExp("[^"+signos+"]*" + palabra + "[^"+signos+"]*", "g");
    console.log(regExp);
    let array=[...texto.matchAll(regExp)];
    document.getElementById('cantidad').innerText=array.length;
    for(let i in array){
        document.getElementById('desord').innerText+=array[i]+', ';
    }
    array.sort();
    for(let i in array){
        document.getElementById('orden').innerText+=array[i]+", ";
    }
}