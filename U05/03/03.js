var sigueRaton=document.getElementById("sigueRatonDiv");
var contenedor=document.getElementsByClassName("contenedor")[0];
contenedor.addEventListener("mousemove", (event)=>{
    sigueRaton.style.left=event.pageX+"px";
    sigueRaton.style.top=event.pageY+"px";
});
document.addEventListener("keydown", (event)=>{
    if(event.ctrlKey && event.key=="q"){
        contenedor.style.backgroundColor="#"+colorRandom();
    }
});
function colorRandom(){
    let color=Math.floor(Math.random()*(0xFFFFFF+1));
    color=color.toString(16);
    while(color.length!=6){
        color='0'+color;
    }
    return color;
}