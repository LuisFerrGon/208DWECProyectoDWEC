function solucionar(){
    const a=parseFloat(document.getElementById('a').value);
    const b=parseFloat(document.getElementById('b').value);
    const c=parseFloat(document.getElementById('c').value);
    if(a==0){
        if(b==0){
            if(c==0){
                document.getElementById('solucion1').textContent=("No solución determinable");
            }else{
                document.getElementById('solucion1').textContent=("No tiene solución");
            }
        }else{
            if(c==0){
                document.getElementById('solucion1').textContent=("Solución: 0");
            }else{
                document.getElementById('solucion1').textContent=("Solución: "+(-c/b));
            }
        }
    }else{
        if(b==0){
            if(c==0){
                document.getElementById('solucion1').textContent=("Solución: 0");
            }else{
                ac(a,c);
            }
        }else{
            if(c==0){
                document.getElementById('solucion1').textContent=("Solución: 0");
            }else{
                abc(a,b,c);
            }
        }
    }
}
function abc(a, b, c){
    const d=b*b-4*a*c;
    if(d==0){
        document.getElementById('solucion').textContent=("Solución: "+(-b/(2*a)).toFixed(3));
    }else{
        const e=((-b+Math.sqrt(d))/(2*a));
        const f=((-b-Math.sqrt(d))/(2*a));
        document.getElementById('solucion').textContent=("Solución: "+e.toFixed(3)+", "+f.toFixed(3));
    };
}
function ac(a, c){
    const d=(-c/a);
    const e=Math.sqrt(d);
    document.getElementById('solucion').textContent=("Solución: "+e.toFixed(3)+", "+(-e.toFixed(3)));
}