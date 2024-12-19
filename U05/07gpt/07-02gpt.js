document.addEventListener("DOMContentLoaded", () => {
    const buttonsContainer = document.getElementById("buttons-container");
    const claveInputs = [
        document.getElementById("digit-1"),
        document.getElementById("digit-2"),
        document.getElementById("digit-3"),
        document.getElementById("digit-4"),
        document.getElementById("digit-5"),
        document.getElementById("digit-6")
    ];
    const messageDiv = document.getElementById("message");
    const claveGeneradaDiv = document.getElementById("clave-generada");

    let claveGenerada = [];
    let claveIntroducida = [];

    // Función para generar una clave de 6 dígitos aleatorios sin repetir
    function generarClave() {
        let numeros = Array.from({ length: 10 }, (_, index) => index);
        numeros = numeros.sort(() => Math.random() - 0.5).slice(0, 6);
        claveGenerada = numeros;
        mostrarClaveGenerada();
    }

    // Función para mostrar la clave generada en el HTML
    function mostrarClaveGenerada() {
        claveGeneradaDiv.textContent = "Clave a introducir: " + claveGenerada.join('');
    }

    // Función para crear los botones
    function crearBotones() {
        const numeros = Array.from({ length: 10 }, (_, index) => index);
        numeros.sort(() => Math.random() - 0.5);

        buttonsContainer.innerHTML = "";
        numeros.forEach(num => {
            const button = document.createElement("button");
            button.textContent = num;
            button.addEventListener("click", () => ingresarDigito(num));
            buttonsContainer.appendChild(button);
        });
    }

    // Función para ingresar un dígito en los inputs
    function ingresarDigito(num) {
        for (let i = 0; i < claveInputs.length; i++) {
            if (!claveInputs[i].value) {
                claveInputs[i].value = num;
                claveIntroducida.push(num);
                break;
            }
        }

        // Comprobar si la clave es completa y válida
        if (claveIntroducida.length === 6) {
            validarClave();
        }
    }

    // Función para validar la clave introducida
    function validarClave() {
        if (claveIntroducida.join('') === claveGenerada.join('')) {
            messageDiv.textContent = "¡Clave correcta!";
            messageDiv.style.color = "green";
        } else {
            messageDiv.textContent = "Clave incorrecta, intenta de nuevo.";
            messageDiv.style.color = "red";
        }
        setTimeout(reiniciar, 3000);
    }

    // Función para reiniciar el proceso
    function reiniciar() {
        claveIntroducida = [];
        claveInputs.forEach(input => input.value = "");
        generarClave();
        crearBotones();
        messageDiv.textContent = "";
    }

    // Inicializar el sistema
    generarClave();
    crearBotones();
});
