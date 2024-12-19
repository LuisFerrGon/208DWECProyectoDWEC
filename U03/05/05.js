var fecha1=Date.now();
var fecha2=fecha1;
function transcu(f1, f2){
    if(f1>f2){
        f3=f1;
        f1=f2;
        f2=f3;
    };
    resta=f2-f1;
    console.log(resta+" ms");
    console.log(Math.floor(resta/1000)+" s");
    if(resta>60000){
        console.log(Math.floor(resta/60000)+" min");
    }
};