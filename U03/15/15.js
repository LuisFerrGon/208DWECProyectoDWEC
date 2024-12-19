function codificar(texto, num){
    num=parseInt(num);
    document.getElementById('cantidad').innerText='';
    let cesar="";
    let mayus="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let minus="abcdefghijklmnñopqrstuvwxyz";
    document.getElementById('cantidad').innerText="";
    let array=Array.from(texto);
    for(let i in array){
        let value=array[i];
        if(/[ña-z]/.test(value)){
            cesar+=minus.charAt(Math.abs(minus.indexOf(value)+(num%27))%27);
        }else if(/[ÑA-Z]/.test(value)){
            cesar+=mayus.charAt(Math.abs(mayus.indexOf(value)+(num%27))%27);
        }else{
            cesar+='@';
        }
    }
    document.getElementById('cantidad').innerText=cesar;
};
function resolver(texto, num){
    num=parseInt(num);
    document.getElementById('cantidad').innerText='';
    let cesar="";
    let mayus="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let minus="abcdefghijklmnñopqrstuvwxyz";
    document.getElementById('cantidad').innerText="";
    let array=Array.from(texto);
    for(let i in array){
        let value=array[i];
        if(/[ña-z]/.test(value)){
            cesar+=minus.charAt(Math.abs(minus.indexOf(value)+27-(num%27))%27);
        }else if(/[ÑA-Z]/.test(value)){
            cesar+=mayus.charAt(Math.abs(mayus.indexOf(value)+27-(num%27))%27);
        }else{
            cesar+=' ';
        }
    }
    document.getElementById('cantidad').innerText=cesar;
};