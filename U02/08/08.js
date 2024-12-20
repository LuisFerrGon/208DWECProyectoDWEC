function myFunction(){
    var num=null;
    while(isNaN(num) || num<1){
        num=prompt("Pon numero (1-300)");
    }
    if(esPrimo(num)){
        document.getElementById("demo").innerHTML="Es primo";
    }else{
        document.getElementById("demo").innerHTML=("No es primo y sus divisores son "+divisores(num));
    }
}
function esPrimo(num){
    var primo=true;
    var i=2;
    while(i<=num/2 && primo==true){
        if(num%i==0){
            primo=false;
        }
        i++;
    }
    return primo;
}
function divisores(num){
    var divisor="";
    i=2;
    while(num>1){
        if(num%i==0){
            num=num/i;
            divisor+=(i+" ");
        }else{
            i++;
        }
    }
    console.log(divisor);
    return divisor;
}
myFunction();