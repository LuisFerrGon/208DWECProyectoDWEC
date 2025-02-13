const url = 'https://serphouse.p.rapidapi.com/serp/schedule';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': 'Sign Up for Key',
		'x-rapidapi-host': 'serphouse.p.rapidapi.com',
		'Content-Type': 'application/json'
	},
	body: {
		data: {
			'0': {
				domain: 'google.co.uk',
				lang: 'aar',
				q: 'Coffee',
				loc: 'London,England,United Kingdom',
				postback_url: 'http://127.0.0.1:8000/postback',
				device: 'desktop',
				serp_type: 'image'
			},
			'1': {
				domain: 'google.co.uk',
				lang: 'ar',
				q: 'Coffee',
				loc: 'London,England,United Kingdom',
				pingback_url: 'http://127.0.0.1:8000/postback',
				device: 'tablet',
				serp_type: 'aweb'
			},
			'2': {
				domain: 'google.co.uk',
				lang: 'ar',
				q: 'Coffee',
				loc: 'London,England,United Kingdom',
				device: 'mobile',
				serp_type: 'web'
			}
		}
	}
};
async function cogerTexto(){
    try {
        let response = await fetch(url, options);
        return await response.text();
    } catch (error) {
        console.log(error);
    }
}
async function cogerJson(){
    try {
        let response = await fetch(url, options);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}
function text(salida){
    cogerTexto().then(texto=>salida.innerHTML="<p>"+texto+"</p>")
}
function json(salida){
    cogerJson().then(texto=>salida.innerHTML="<p>Message: "+texto.message+"</p>")
}