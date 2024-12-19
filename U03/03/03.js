class padre{
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    };
    d(){
        return(this.a % this.c + this.b);
    };
};
class hijo extends padre{
    constructor(a, b, c, e){
        super(a, b, c);
        this.e=e;
    };
    f(){
        return(this.a * this.e / (this.c - this.b));
    };
};
function mostrarCopia1(){
    do {
        numero1 = prompt("Introduce un número para el primer valor:");
        numero1 = parseFloat(numero1, 10);
    } while (isNaN(numero1));
    do {
        numero2 = prompt("Introduce un número para el segundo valor:");
        numero2 = parseFloat(numero2, 10);
    } while (isNaN(numero2));
    do {
        numero3 = prompt("Introduce un número para el tercer valor:");
        numero3 = parseFloat(numero3, 10);
    } while (isNaN(numero3));
    let padre1=new padre(numero1, numero2, numero3);
    alert(padre1.a+"%"+padre1.c+"+"+padre1.b+"="+padre1.d());
}
function mostrarCopia2(){
    do {
        numero1 = prompt("Introduce un número para el primer valor:");
        numero1 = parseFloat(numero1, 10);
    } while (isNaN(numero1));
    do {
        numero2 = prompt("Introduce un número para el segundo valor:");
        numero2 = parseFloat(numero2, 10);
    } while (isNaN(numero2));
    do {
        numero3 = prompt("Introduce un número para el tercer valor:");
        numero3 = parseFloat(numero3, 10);
    } while (isNaN(numero3));
    do {
        numero4 = prompt("Introduce un número para el cuarto valor:");
        numero4 = parseFloat(numero4, 10);
    } while (isNaN(numero4));
    let hijo1=new hijo(numero1, numero2, numero3, numero4);
    alert(hijo1.a+"%"+hijo1.c+"+"+hijo1.b+"="+hijo1.d());
    alert(hijo1.a+"*"+hijo1.e+"/("+hijo1.c+"-"+hijo1.b+")="+hijo1.f());
}