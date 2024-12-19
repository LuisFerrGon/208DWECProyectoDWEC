function generar(){
    // let nombre="<input type='text' id='nombre' placeholder='Nombre'>";
    // let apellidos="<input type='text' id='apellidos' placeholder='Apellidos'>";
    // let email="<input type='email' id='email' placeholder='Email'>";
    // let asunto="<input type='text' id='asunto' placeholder='Asunto'>";
    // let mensaje="<textarea id='mensaje' placeholder='Mensaje'></textarea>";
    // document.getElementById("formulario").innerHTML=nombre+"<br><br>"+apellidos+"<br><br>"+email+"<br><br>"+asunto+"<br><br>"+mensaje+"<br><br>"+"<button type='submit' onclick='alert(\"Mensaje enviado\")'>Enviar</button>";
    // document.getElementById("formulario").style.display="block";
    let formulario=document.createElement("form");
        formulario.setAttribute("id", "formulario")
    let nombre=document.createElement("input");
        nombre.setAttribute("type", "text");
        nombre.setAttribute("id", "nombre");
        nombre.setAttribute("placeholder", "Nombre");
    let apellidos=document.createElement("input");
        apellidos.setAttribute("type", "text");
        apellidos.setAttribute("id", "apellidos");
        apellidos.setAttribute("placeholder", "Apellidos");
    let email=document.createElement("input");
        email.setAttribute("type", "email");
        email.setAttribute("id", "email");
        email.setAttribute("placeholder", "Email");
    let asunto=document.createElement("input");
        asunto.setAttribute("type", "text");
        asunto.setAttribute("id", "asunto");
        asunto.setAttribute("placeholder", "Asunto");
    let mensaje=document.createElement("textarea");
        mensaje.setAttribute("id", "mensaje");
        mensaje.setAttribute("placeholder", "Mensaje");
    let boton=document.createElement("button");
        boton.setAttribute("type", "submit");
        boton.setAttribute("onclick", "alert('Mensaje enviado')");
    formulario.append(nombre);
    formulario.append(apellidos);
    formulario.append(email);
    formulario.append(asunto);
    formulario.append(boton);
    document.appendChild(formulario);
}