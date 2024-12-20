let text = "Si vas a Mi casa, avísame para estar!"; 
let n = text.search(/mi casa/i);
document.getElementById("demo").innerHTML = n;
let n2 = text.search("mi casa");
document.getElementById("demo2").innerHTML = n2;