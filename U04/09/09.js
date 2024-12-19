function cmbd1(){
    let color=colorrandom();
    document.getElementById('div1').setAttribute('style', 'background-color:#'+color+'; border-color:#'+color+';');
}
function cmbp1(){
    let color=colorrandom();
    document.getElementById('p1').setAttribute('style', 'color:#'+color+'; border-color:#'+color+';');
    
}
function cmbd2(){
    let color=colorrandom();
    document.getElementById('div2').style.backgroundColor='#'+color;
    document.getElementById('div2').style.borderColor='#'+color;
    
}
function cmbp2(){
    let color=colorrandom();
    document.getElementById('p2').style.color='#'+color;
    document.getElementById('p2').style.borderColor='#'+color;
    
}
function cmbd3(){
    let color=colorrandom();
    document.getElementById('div3').style.backgroundColor='#'+color;
    document.getElementById('div3').style.borderColor='#'+color;
    
}
function cmbp3(){
    let color=colorrandom();
    document.getElementById('p3').style.color='#'+color;
    document.getElementById('p3').style.borderColor='#'+color;
    
}
function colorrandom(){
    let color=Math.floor(Math.random()*(0xFFFFFF+1));
    color=color.toString(16);
    while(color.length!=6){
        color='0'+color;
    }
    return color;
}