function metFor(array){
    array=JSON.parse('['+array+']');
    let texto="";
    for(let i=0; i<array.length; i++){
        let j=1;
        while(j<=array[i]){
            texto+="*"
            j++;
        }
        texto+="\n"
    }
    console.log(texto);
}
function metForIn(array){
    array=JSON.parse('['+array+']');
    let texto="";
    for(let i in array){
        let j=1;
        while(j<=array[i]){
            texto+="*"
            j++;
        }
        texto+="\n";
    }
    console.log(texto);
}
function metForOf(array){
    array=JSON.parse('['+array+']');
    var texto="";
    for(let i of array){
        let j=1;
        while(j<=i){
            texto+="*"
            j++;
        }
        texto+="\n";
    }
    console.log(texto);
}
function metForEach(array){
    array=JSON.parse('['+array+']');
    let texto="";
    array.forEach(valor=>{
        let j=1;
        while(j<=valor){
            texto+="*"
            j++;
        }
        texto+="\n";
    });
    console.log(texto);
}