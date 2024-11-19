async function obtener_Receta(id) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', '/Data/Recetas.json', true); // Ruta del archivo JSON
        xhr.onload = function() {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText); // Convertir la respuesta a JSON
                const receta = data.find(receta => receta.id === id); // Buscar la receta por ID
                resolve(receta); // Resolver la promesa con la receta encontrada
            } else {
                reject('Error al cargar el JSON: ' + xhr.statusText); // Rechazar la promesa si hay error
            }
        };
        xhr.onerror = function() {
            reject('Error al hacer la solicitud'); // Rechazar si hay un error en la solicitud
        };
        xhr.send();
    });
}

// Función para cargar la receta
async function cargarReceta() {
    const params = new URLSearchParams(window.location.search);
    const recetaId = parseInt(params.get('id'));

    if (recetaId) {
        const receta = await obtener_Receta(recetaId);
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
