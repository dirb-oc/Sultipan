// Recetas
const recetas = [
    {
        nombre: "Pan de Masa Madre",
        imagen: "images/pan-masa-madre.jpg",
        ingredientes: [
            "500g de harina de trigo",
            "300g de agua",
            "100g de masa madre",
            "10g de sal"
        ],
        procedimiento: [
            "Mezcla la harina, el agua y la masa madre en un bol grande.",
            "Amasa la mezcla durante 10-15 minutos hasta que esté suave.",
            "Deja reposar la masa durante 4 horas.",
            "Precalienta el horno a 220°C.",
            "Hornea el pan durante 40 minutos o hasta que esté dorado."
        ],
        enlace: "recetas/pan-masa-madre.html"
    },
    {
        nombre: "Croissant",
        imagen: "images/croissant.jpg",
        ingredientes: [
            "500g de harina de trigo",
            "275g de mantequilla",
            "10g de sal",
            "100ml de leche",
            "10g de levadura fresca",
            "50g de azúcar"
        ],
        procedimiento: [
            "Prepara una masa con la harina, la levadura, la leche, la sal y el azúcar.",
            "Refrigera la masa durante 30 minutos.",
            "Lamina la mantequilla y pliega la masa varias veces con la mantequilla dentro.",
            "Corta y forma los croissants.",
            "Deja reposar por 2 horas antes de hornear.",
            "Hornea a 190°C durante 15-20 minutos."
        ],
        enlace: "recetas/croissant.html"
    },
    {
        nombre: "Bizcocho de Zanahoria",
        imagen: "images/bizcocho-zanahoria.jpg",
        ingredientes: [
            "200g de zanahoria rallada",
            "150g de harina de trigo",
            "3 huevos",
            "100g de azúcar",
            "50g de aceite de girasol",
            "1 cucharadita de polvo de hornear",
            "1 pizca de sal"
        ],
        procedimiento: [
            "Precalienta el horno a 180°C.",
            "Bate los huevos con el azúcar hasta que estén espumosos.",
            "Agrega la zanahoria rallada y el aceite, mezcla bien.",
            "Incorpora la harina, el polvo de hornear y la sal.",
            "Vierte la mezcla en un molde y hornea durante 40 minutos."
        ],
        enlace: "recetas/bizcocho-zanahoria.html"
    }
];

// Función para mostrar la receta por número
function mostrarRecetaPorNumero() {
    const numReceta = parseInt(document.getElementById("numReceta").value);
    
    // Verifica si el número de la receta es válido
    if (numReceta >= 1 && numReceta <= recetas.length) {
        const receta = recetas[numReceta - 1];  // Obtener la receta por número (index)
        const container = document.getElementById("recetas-container");

        // Limpiar el contenedor antes de mostrar la receta
        container.innerHTML = "";

        // Crear el elemento receta
        const recetaDiv = document.createElement("div");
        recetaDiv.classList.add("receta");

        // Crear la imagen de la receta
        const imagen = document.createElement("img");
        imagen.src = receta.imagen;
        imagen.alt = receta.nombre;

        // Crear el contenido de la receta (nombre, ingredientes, procedimiento)
        const contenidoDiv = document.createElement("div");

        const nombre = document.createElement("h3");
        nombre.textContent = receta.nombre;

        const ingredientes = document.createElement("p");
        ingredientes.innerHTML = "<strong>Ingredientes:</strong> " + receta.ingredientes.join(", ");

        const procedimiento = document.createElement("p");
        procedimiento.innerHTML = "<strong>Procedimiento:</strong> " + receta.procedimiento.join(" ");

        const enlace = document.createElement("a");
        enlace.href = receta.enlace;
        enlace.textContent = "Ver receta completa";

        // Agregar los elementos al contenido
        contenidoDiv.appendChild(nombre);
        contenidoDiv.appendChild(ingredientes);
        contenidoDiv.appendChild(procedimiento);
        contenidoDiv.appendChild(enlace);

        // Agregar la imagen y el contenido al div de la receta
        recetaDiv.appendChild(imagen);
        recetaDiv.appendChild(contenidoDiv);

        // Agregar la receta completa al contenedor
        container.appendChild(recetaDiv);
    } else {
        alert("Por favor, ingresa un número de receta válido.");
    }
}
