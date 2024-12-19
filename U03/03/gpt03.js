// Clase Padre
class ClasePadre {
    constructor(propiedad1, propiedad2, propiedad3) {
        this.propiedad1 = propiedad1;
        this.propiedad2 = propiedad2;
        this.propiedad3 = propiedad3;
    }

    metodoPadre() {
        return `Método de la clase padre: ${this.propiedad1}, ${this.propiedad2}, ${this.propiedad3}`;
    }

    nuevoMetodoPadre() {
        return "Este es un nuevo método de la clase padre.";
    }
}

// Subclase
class SubClase extends ClasePadre {
    constructor(propiedad1, propiedad2, propiedad3, nuevaPropiedad) {
        super(propiedad1, propiedad2, propiedad3);
        this.nuevaPropiedad = nuevaPropiedad;
    }

    nuevoMetodoSubClase() {
        return `Nuevo método de la subclase: ${this.nuevaPropiedad}`;
    }
}


let objetoPadre;
let objetoSubClase;

document.getElementById('crearPadre').addEventListener('click', () => {
    const prop1 = document.getElementById('padreProp1').value;
    const prop2 = document.getElementById('padreProp2').value;
    const prop3 = document.getElementById('padreProp3').value;

    objetoPadre = new ClasePadre(prop1, prop2, prop3);
});

document.getElementById('crearSubClase').addEventListener('click', () => {
    const prop1 = document.getElementById('subProp1').value;
    const prop2 = document.getElementById('subProp2').value;
    const prop3 = document.getElementById('subProp3').value;
    const nuevaProp = document.getElementById('subNuevaProp').value;

    objetoSubClase = new SubClase(prop1, prop2, prop3, nuevaProp);
});

document.getElementById('mostrarDatos').addEventListener('click', () => {
    const resultados = [];
    
    // Mostrar propiedades y métodos del objeto padre
    if (objetoPadre) {
        resultados.push('Objeto Padre:');
        resultados.push(`Propiedad 1: ${objetoPadre.propiedad1}`);
        resultados.push(`Propiedad 2: ${objetoPadre.propiedad2}`);
        resultados.push(`Propiedad 3: ${objetoPadre.propiedad3}`);
        resultados.push(objetoPadre.metodoPadre());
        resultados.push(objetoPadre.nuevoMetodoPadre());
    }

    // Mostrar propiedades y métodos de la subclase
    if (objetoSubClase) {
        resultados.push('Objeto SubClase:');
        resultados.push(`Propiedad 1: ${objetoSubClase.propiedad1}`);
        resultados.push(`Propiedad 2: ${objetoSubClase.propiedad2}`);
        resultados.push(`Propiedad 3: ${objetoSubClase.propiedad3}`);
        resultados.push(`Nueva Propiedad: ${objetoSubClase.nuevaPropiedad}`);
        resultados.push(objetoSubClase.metodoPadre());
        resultados.push(objetoSubClase.nuevoMetodoPadre());
        resultados.push(objetoSubClase.nuevoMetodoSubClase());
    }

    document.getElementById('resultados').textContent = resultados.join('\n');
});
