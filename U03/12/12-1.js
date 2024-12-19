function generar(){
    let num=[];
    let texto="";
    let i=1;
    while(i<=15){
        num.push(Math.floor(Math.random() * 10));
        texto+=(""+num[i-1]);
        i++;
        if(i%4==1 && i!=1){
            texto+=" ";
        }
    }
    document.getElementById("generado").value=(texto);
    document.getElementById("numero").value=(texto);
}
function validar(tarjeta){
    if(!(/^(\d{4})(\s)(\d{4})(\s)(\d{4})(\s)(\d{3})(\s?)$/gm.test(tarjeta))){
        document.getElementById('resultado').innerText+=tarjeta+" no es válido\n";
    }else{
        let array=tarjeta;
        while(/ /gmi.test(tarjeta)){
            tarjeta=tarjeta.replace(" ","");
        }
        let num=Array.from(tarjeta);
        let suma=0;
        let digito;
        for(let i=0; i<num.length; i++){
            digito=parseInt(num[i]);
            if(i%2==0){
                digito*=2;
                if(digito>=10){
                    digito-=9
                }
            }
            suma+=digito;
        }
        let resto=suma%10==0;
        resto?correcto=true:correcto=false;
        document.getElementById('resultado').innerText+=array+(10-(suma%10))%10+"\n";
    }
}