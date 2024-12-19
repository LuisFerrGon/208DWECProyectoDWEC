function buscar(texto){
    let map=new Map();
    document.getElementById('cantidad').innerText="";
    let array=Array.from(texto);
    for(let i in array){
        let value=array[i];
        switch (value) {
            case " ":
                value="\\s";
            break;
            case "\n":
                value="\\n";
            break;
        }
        if(map.has(value)){
            map.set(value, map.get(value)+1);
        }else{
            map.set(value, 1);
        }
    }
    map.forEach(function(valor, clave){
        document.getElementById('cantidad').innerText+=clave+" - "+valor+"\n";
    });
}