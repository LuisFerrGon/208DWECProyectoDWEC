function mostrarMCM(){
    do {
        numero1 = prompt("Introduce un número para el primer valor:");
        numero1 = parseInt(numero1, 10);
    } while (isNaN(numero1));
    do {
        numero2 = prompt("Introduce un número para el segundo valor:");
        numero2 = parseInt(numero2, 10);
    } while (isNaN(numero2));
    alert("El mcm entre "+numero1+" y "+numero2+" es "+mcm(numero1, numero2));
}
function mostrarMCD(){
    do {
        numero1 = prompt("Introduce un número para el primer valor:");
        numero1 = parseInt(numero1, 10);
    } while (isNaN(numero1));
    do {
        numero2 = prompt("Introduce un número para el segundo valor:");
        numero2 = parseInt(numero2, 10);
    } while (isNaN(numero2));
    alert("El mcd entre "+numero1+" y "+numero2+" es "+mcd(numero1, numero2));
}
function mcm(a, b){
    return a*b/mcd(a, b);
};
function mcd(a, b){
    if(a<b){
        c=a;
        a=b;
        b=c;
    }
    do{
        c=a%b;
        a=b;
        if(c!=0){
            b=c;
        }
    }while(c!=0);
    return b;
};