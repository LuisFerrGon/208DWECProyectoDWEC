document.getElementById("ancho").innerText=window.location.href;
document.getElementById("alto").innerHTML="screen.height";
document.getElementById("anchodisp").innerText="Ancho disponible de la pantalla "+screen.availWidth;
document.getElementById("altodisp").innerText="Alto disponible de la pantalla "+screen.availHeight;
document.getElementById("color").innerText="Profundidad de colores de la pantalla "+screen.colorDepth;
document.getElementById("pixel").innerText="Profundidad de pixeles de la pantalla "+screen.pixelDepth;
document.getElementById("orientacion").innerText="Orientación de la pantalla "+screen.orientation.type;