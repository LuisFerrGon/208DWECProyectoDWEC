export var main=document.createElement("main");
fetch("https://randomuser.me/api/?results=3")
    .then(response=>{
        if(response.ok){
            return response.text();
        }else{
            throw new Error("Error: "+response.status)
        }
    })
    .then(data=>{
        main.innerHTML="<div>"+data+"</div>"
    })
    .catch(error=>{
        console.log(error)
    })