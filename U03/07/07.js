function fibo(num){
    let inicio=Date.now();
    num=parseInt(num);
    if(num>=0 && Number.isInteger(num)){
        for(i=0; i<=num; i++){
            console.log(i+'=>'+fibonacci(i));
        }
    }else{
        console.log("Variable no valida");
    };
    console.log(Date.now()-inicio+' ms');
}
function fibonacci(num){
    if(num<2){
        return num;
    }else{
        return fibonacci(num-1)+fibonacci(num-2)
    }
}
function fibonacciNR(lim){
    lim=parseInt(lim);
    if(lim>=1 && Number.isInteger(lim)){
        var a=0;
        var b=1;
        var c=1;
        var inicio=Date.now()
        for(i=0; i<=lim; i++){
            console.log(i+"=>"+a);
            c=a+b;
            a=b;
            b=c;
        };
        console.log(Date.now()-inicio+" ms");
    }else{
        console.log("Variable no valida");
    };
}
function fact(num){
    let inicio=Date.now();
    console.log(factorial(num));
    console.log(Date.now()-inicio+' ms');
}
function factorial(num){
    num=parseInt(num);
    if(num>0 && Number.isInteger(num)){
        if(num==1){
            return 1;
        }else{
            return num*factorial(num-1);
        }
    }else{
        return("Variable no valida");
    };
}
function factorialNR(lim){
    lim=parseInt(lim);
    if(lim>=1 && Number.isInteger(lim)){
        var inicio=Date.now()
        var resultado=1;
        for(i=2; i<=lim; i++){
            resultado*=i;
        };
        console.log(resultado);
        console.log(Date.now()-inicio+" ms");
    }else{
        console.log("Variable no valida");
    };
}
function comb(m, n){
    let inicio=Date.now();
    console.log(combinatorio(m, n));
    console.log(Date.now()-inicio+' ms');
}
function combinatorio(m, n){
    m=parseInt(m);
    n=parseInt(n);
    if(m>=0 && Number.isInteger(m) && n>=0 && Number.isInteger(n)){
        if(m<n){
            o=m;
            m=n;
            n=o;
        }
        o=m-n;
        if(o==m || o==0){
            return 1;
        }else{
            mv=m;
            if(n>o){
                for(i=n+1; i<mv; i++){
                    m*=i;
                };
                return m/factorial(o);
            }else{
                for(i=o+1; i<mv; i++){
                    m*=i;
                };
                return m/factorial(n);
            }
        }
    }else{
        return("Variables no validas");
    };
}