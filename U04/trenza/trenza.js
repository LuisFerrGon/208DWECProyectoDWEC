var blanco=0xFFFFFF; //16777215
function trenzar(num){
    if(num!=0){
        let inicio=[];
        let valor=0;
        let css="table{ display: table;border-collapse: collapse;border: 5px solid #000;padding: 5px;td{padding: 10px;}} input{width:79px}";
        let colores="";
        let texto="<tr>";
        let mitad=Math.floor(num/2);
        for(let i=1;i<=num;i++){
            inicio.push(i);
            // texto+="<td style='background-color: #"+valorhexa(i, num)+";'> </td>";
            texto+="<td class='c"+i+"'> </td>";
            let color=valorhexa(i, num);
            css+=".c"+i+"{background-color: #"+color+";}";
            colores+="<input type='text' value='#"+color+"' class='c"+i+"' disabled>";
        }
        let medio=inicio;
        let medio2=[];
        texto+="</tr><tr>";
        do{
            medio2=medio;
            medio=[];

            // Se muestra el cambio de valores
            // valor=medio2[0];
            // texto+="<td colspan='"+(mitad+1)+"'class='c"+valor+"'> </td>";
            // for(i=mitad+1;i<num;i++){
            //     valor=medio2[i];
            //     texto+="<td class='c"+valor+"'> </td>";
            // }
            // texto+="</tr><tr>";

            // Se muestran los valores cambiados
            for(i=1;i<=mitad;i++){
                valor=medio2[i];
                medio.push(valor);
                texto+="<td class='c"+valor+"'> </td>";
            }
            valor=medio2[0];
            medio.push(valor);
            texto+="<td class='c"+valor+"'> </td>";
            for(i=mitad+1;i<num;i++){
                valor=medio2[i];
                medio.push(valor);
                texto+="<td class='c"+valor+"'> </td>";
            }
            texto+="</tr><tr>";
            if(JSON.stringify(medio)!=JSON.stringify(inicio)){
                medio2=medio;
                medio=[];

                // Se muestra el cambio de valores
                // for(i=0;i<=mitad-1;i++){
                //     valor=medio2[i];
                //     texto+="<td class='c"+valor+"'> </td>";
                // }
                // valor=medio2[num-1];
                // if(num%2==0){
                //     texto+="<td colspan='"+mitad+"' class='c"+valor+"'> </td>";
                // }else{
                //     texto+="<td colspan='"+(mitad+1)+"' class='c"+valor+"'> </td>";
                // }
                // texto+="</tr><tr>";

                // Se muestran los valores cambiados
                for(i=0;i<=mitad-1;i++){
                    valor=medio2[i];
                    medio.push(valor);
                    texto+="<td class='c"+valor+"'> </td>";
                }
                valor=medio2[num-1];
                medio.push(valor);
                texto+="<td class='c"+valor+"'> </td>";
                for(i=mitad;i<=num-2;i++){
                    valor=medio2[i];
                    medio.push(valor);
                    texto+="<td class='c"+valor+"'> </td>";
                }
                texto+="</tr><tr>";
            }
        }while(JSON.stringify(medio)!=JSON.stringify(inicio));
        document.getElementById("color").innerHTML=texto;
        document.getElementById("estilo").innerHTML=css;
        document.getElementById("colores").innerHTML=colores;
    }
}
function valorhexa(num, max){
    let inicio=(Math.round(blanco*num/max).toString(16));
    while(inicio.length!=6){
        inicio="0"+inicio;
    }
    return inicio;
}