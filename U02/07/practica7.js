function myFunction(){
    var fecha=prompt("Pon fecha");
    // if(prompt("Pon fecha")==fecha){
    //     alert("Acertaste");
    // }else{
    //     alert("Fallaste");
    // }
    try{
        if(prompt("Pon fecha")!=fecha) throw error;
        alert("Acertaste");
    }catch(error){
        alert("Fallaste");
    }
}
myFunction();