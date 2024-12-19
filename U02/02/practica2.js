function miFuncionReemplazo() {
    let text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML = text.replace("Mi casa", "Tu casa");
}

function miFuncionReemplazo2() {
    let text = document.getElementById("demo1").innerHTML;
    document.getElementById("demo1").innerHTML = text.replace(/mI casa/i, "tu casa");
}