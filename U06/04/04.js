export var datos=document.createElement("div");
fetch('fichero.txt')
.then(response=>{
    if(response.ok){
        return response.json();
    }else{
        throw new Error("Error: "+response.status);
    }
})
.then(data=>{
    for(let i=0;i<data.length;i++){
        let parrafo=document.createElement("p");
        parrafo.innerText="El "+data[i].tipo.toUpperCase()+" solicitado es "+data[i].numero+"."
        datos.append(parrafo);
    };
})
.catch(error=>{
    console.log(error);
});