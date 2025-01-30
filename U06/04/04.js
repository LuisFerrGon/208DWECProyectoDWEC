var dato=null;
fetch('fichero.txt')
    .then(response=>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error("Error: "+response.status);
        }
    })
    .then(data=>{
        dato=data;
        console.log(dato);
        console.log(data);
    })
    .catch(error=>{
        console.log(error);
    });
export var datos=dato;