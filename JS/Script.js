const recetas = [
    {
        id: 1,
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
        ]
    },
    {
        id: 2,
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
        ]
    },
    {
        id: 3,
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
        ]
    }
];

// Función para cargar la receta
function cargarReceta() {
    const params = new URLSearchParams(window.location.search);
    const recetaId = parseInt(params.get('id'));

    if (recetaId) {
        const receta = recetas.find(r => r.id === recetaId);
        if (receta) {
            document.getElementById("receta-nombre").textContent = receta.nombre;
            document.getElementById("receta-imagen").src = receta.imagen;

            // Rellenar ingredientes
            const ingredientesList = document.getElementById("receta-ingredientes");
            receta.ingredientes.forEach(ingrediente => {
                const li = document.createElement("li");
                li.textContent = ingrediente;
                ingredientesList.appendChild(li);
            });

            // Rellenar procedimiento
            const procedimientoList = document.getElementById("receta-procedimiento");
            receta.procedimiento.forEach(paso => {
                const li = document.createElement("li");
                li.textContent = paso;
                procedimientoList.appendChild(li);
            });
        } else {
            document.body.innerHTML = "<h1>Receta no encontrada</h1>";
        }
    } else {
        document.body.innerHTML = "<h1>No se especificó una receta</h1>";
    }
}

// Llamar a la función al cargar la página
window.onload = cargarReceta;