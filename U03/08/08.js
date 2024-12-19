function media(nums){
    eval("calculomedia("+nums+")")
}
function calculomedia(...num){
    let suma=0
    for(let i in num){
        suma+=num[i];
    }
    console.log(suma);
    console.log(suma/num.length);
}