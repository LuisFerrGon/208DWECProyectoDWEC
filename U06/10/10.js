function grabarCookie(nombreYvalor, duracion){
	if(/^[^=\s]+=[^=\s]+$/.test(nombreYvalor) && duracion>0){
		let nombreValor=nombreYvalor.split("=");
		let fecha=new Date();
		fecha.setTime(fecha.getTime()+(duracion*1000));
		document.cookie+=nombreValor[0]+"="+nombreValor[1]+";expires="+fecha.toUTCString()+";path=/";
	}
}
function mostrarCookie(){
	let cookies=document.cookie;
	for (const cookie of cookies) {
		document.getElementById("cookies").innerHTML=cookie+"<br>";
	}
}