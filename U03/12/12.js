var array=[];
var arraypar=[];
var arrayimp=[];
var arr=[];
function llenarArray(num){
    array=[];
    arraypar=[];
    arrayimp=[];
    while(array.length<num){
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    array.sort(function(a,b){return a-b;});
    for(let i in array){
        valor=array[i];
        if(valor%2==0){
            arraypar.push(valor+"");
        }else{
            arrayimp.push(valor);
        }
    }
    console.log(array);
}
function ordenarPIP(){
    let i=0;
    arr=[];
    for(i=0; i<(arraypar.length/2); i++){
        arr.push(arraypar[i]);
    }
    arr=arr.concat(arrayimp);
    for(let j=i; j<arraypar.length; j++){
        arr.push(arraypar[j]);
    }
    console.log(arr);
}
function ordenarIPI(){
    let i=0;
    arr=[];
    for(i=0; i<(arrayimp.length/2); i++){
        arr.push(arrayimp[i]);
    }
    arr=arr.concat(arraypar);
    for(let j=i; j<arrayimp.length; j++){
        arr.push(arrayimp[j]);
    }
    console.log(arr);
}
function ordenar(){
    arr=[];
    for(let i in array){
        valor=array[i];
        if(valor%2==0){
            arr.push(valor+"");
        }else{
            arr.push(valor);
        }
    }
    console.log(arr);
}