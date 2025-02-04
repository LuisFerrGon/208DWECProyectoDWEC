export var foto=document.createElement("img");
foto.setAttribute("alt" , "Imagen");
fetch("https://picsum.photos/200/300")
    .then(response=>{
        if(response.ok){
            return response.blob();
        }else{
            throw new Error("Error: "+response.status)
        }
    })
    .then(data=>{
        foto.setAttribute("src" , URL.createObjectURL(data));
    })
    .catch(error=>{
        console.log(error)
    })