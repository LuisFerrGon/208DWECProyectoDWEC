var div1=document.getElementById("div1");
    var div2=document.getElementById("div2");
        var p2=document.getElementById("p2");
    var p1=document.getElementById("p1");
var div11=document.getElementById("div11");
    var div22=document.getElementById("div22");
        var p22=document.getElementById("p22");
    var p11=document.getElementById("p11");
var div111=document.getElementById("div111");
    var div222=document.getElementById("div222");
        var p222=document.getElementById("p222");
    var p111=document.getElementById("p111");
var div1111=document.getElementById("div1111");

div1.addEventListener("click", mostrardiv1);
div2.addEventListener("click", mostrardiv2);
p2.addEventListener("click", mostrarp2);
p1.addEventListener("click", mostrarp1);

function mostrardiv1(){
    console.log("Elemento div1");
}
function mostrardiv2(){
    console.log("Elemento div2");
}
function mostrarp2(){
    console.log("Elemento p2");
}
function mostrarp1(){
    console.log("Elemento p1");
}