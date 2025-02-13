const inicioURL='https://ai-weather-by-meteosource.p.rapidapi.com/time_machine?lat=42.59727&lon=-5.56914&date=';
const fechaHoy=new Date();
const fechaMnn=new Date();
fechaMnn.setDate(fechaMnn.getDate() + 1)
const finalURL='&units=metric';
const opciones={
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'Sign Up for Key',
        'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
    }
};
async function tiempo(salida){
    let anoHoy=fechaHoy.getFullYear();
    let mesHoy=fechaHoy.getMonth()+1;
    if(mesHoy<9){
        mesHoy='0'+mesHoy;
    }
    let diaHoy=fechaHoy.getDate();
    if(diaHoy<9){
        diaHoy='0'+diaHoy;
    }
    let url=inicioURL+anoHoy+"-"+mesHoy+"-"+diaHoy+finalURL;
    fetch(url,opciones)
    .then(response=>{
        console.log(url);
        if(response.ok){
            return response.json();
        }else{
            throw new Error("Error: "+response.status)
        }
    })
    .then(data=>{
        salida.innerHTML=
            "Latitud: "+data.lat+"<br>"
            "Longitud: "+data.lon+"<br>"
            "Tiempo: "+data.data[12].weather+"<br>"
            "Temperatura: "+data.data[12].temperature+"<br>"
            "Viento: velocidad"+data.data[12].wind.speed+", direccion"+data.data[12].wind.dir+"<br>"
        ;
    })
    .catch(error=>{
        console.log(error);
    });
}
async function pronostico(salida){
    let anoMnn=fechaMnn.getFullYear();
    let mesMnn=fechaMnn.getMonth()+1;
    if(mesMnn<9){
        mesMnn='0'+mesMnn;
    }
    let diaMnn=fechaMnn.getDate();
    if(diaMnn<9){
        diaMnn='0'+diaMnn;
    }
    let url=inicioURL+anoMnn+"-"+mesMnn+"-"+diaMnn+finalURL;
    fetch(url, opciones)
    .then(response=>{
        console.log(url);
        if(response.ok){
            return response.json();
        }else{
            throw new Error("Error: "+response.status)
        }
    })
    .then(data=>{
        salida.innerHTML=
            "Latitud: "+data.lat+"<br>"
            "Longitud: "+data.lon+"<br>"
            "Tiempo: "+data.data[12].weather+"<br>"
            "Temperatura: "+data.data[12].temperature+"<br>"
            "Viento: velocidad"+data.data[12].wind.speed+", direccion"+data.data[12].wind.dir+"<br>"
        ;
    })
    .catch(error=>{
        console.log(error);
    });
}