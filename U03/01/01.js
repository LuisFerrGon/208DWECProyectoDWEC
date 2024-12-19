const origen={
    a:1,
    b:2,
    c:{
        ca:31,
        cb:32
    },
    d:function(){
        console.log(4);
    }
};
const copia=Object.create(origen);
copia.a="A";
copia.b="B";
copia.c={};
copia.c.ca="CA";
copia.c.cb="CB";
copia.d=function(){
    console.log("D");
};
function mostrarOrigen(){
    console.log(origen);
    origen.d();
};
function mostrarCopia(){
    console.log(copia);
    copia.d();
};