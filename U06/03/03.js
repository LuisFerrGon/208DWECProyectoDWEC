export var main=document.createElement("main");
main;
fetch("https://randomuser.me/api/?results=3")
    .then(response=>{
        console.log(response.status);
    })
    .then(data=>{

    })
    .catch(error=>{
        main.innerHTML="<div>"+error.status+"</div>";
    })
;