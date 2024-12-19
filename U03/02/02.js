class Prueba {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    };
    d(){
        console.log(this.a % this.c + this.b);
    };
    e(){
        console.log(this.a ** this.b - this.c);
    };
};
let copia1=new Prueba(2, 0.75, 9);
let copia2=new Prueba(0.36, 6.7, 8.02);
function mostrarCopia1(){
    console.log("copia1");
    copia1.d();
    copia1.e();
}
function mostrarCopia2(){
    console.log("copia2");
    copia2.d();
    copia2.e();
}