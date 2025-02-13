var urlPers='https://swapi.dev/api/people/';
var urlPlan='https://swapi.dev/api/planets/';
async function cogerPers() {
	try{
		let response=await fetch(urlPers);
		return await response.json();
	}catch(error){
		console.log(error);
	}
}
function mostrarPers(salida){
	salida.value=null;
	cogerPers().then(texto=>{
		for (let elemento of texto.results) {
			salida.value+=elemento.name+'\n';
		}
	});
}
function persPagAnt() {
	cogerPers().then(info=>{
		if(info.previous!=null){
			urlPers=info.previous;
		}
	});
}
function persPagSig() {
	cogerPers().then(info=>{
		if(info.next!=null){
			urlPers=info.next;
		}
	});
}
async function cogerPlan() {
	try{
		let response=await fetch(urlPlan);
		return await response.json();
	}catch(error){
		console.log(error);
	}
}
function mostrarPlan(salida){
	salida.value=null;
	cogerPlan().then(texto=>{
		for (let elemento of texto.results) {
			salida.value+=elemento.name+'\n';
		}
	});
}
function planPagAnt() {
	cogerPlan().then(info=>{
		if(info.previous!=null){
			urlPlan=info.previous;
		}
	});
}
function planPagSig() {
	cogerPlan().then(info=>{
		if(info.next!=null){
			urlPlan=info.next;
		}
	});
}