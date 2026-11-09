async function inicializar() {

    // Elementos del DOM
    const tbodyCriptomonedas = document.getElementById("tbodyCriptomonedas");
    const contenedorTarjeta = document.getElementById("contenedorTarjetaCriptomoneda");

    // URL de la API
    const url = "https://api.coinlore.net/api/tickers/";

    // Array para almacenar las criptomonedas
    let criptomonedas = [];

    try {

        // 1. Realizar petición a la API
        const respuesta = await fetch(url);

        // 2. Comprobar que la respuesta es correcta
        if (!respuesta.ok) {
            throw new Error("Error al obtener las criptomonedas");
        }

        // 3. Convertir la respuesta a JSON
        const datos = await respuesta.json();

        // 4. Obtener el array de criptomonedas
        criptomonedas = datos.data;

        // 5. Recorrer todas las criptomonedas
        criptomonedas.forEach(cripto => {

            // Crear una fila
            const fila = document.createElement("tr");

            // Crear las cuatro celdas
            const celdaSimbolo = document.createElement("td");
            const celdaNombre = document.createElement("td");
            const celdaId = document.createElement("td");
            const celdaAcciones = document.createElement("td");

            // Introducir los datos
            celdaSimbolo.textContent = cripto.symbol;
            celdaNombre.textContent = cripto.name;
            celdaId.textContent = cripto.id;

            // Crear botón de acciones
            const botonVer = document.createElement("button");
            botonVer.textContent = "Ver detalle";
            botonVer.className = "btn btn-primary btn-sm";

            // Evento para mostrar el detalle
            botonVer.addEventListener("click", function() {

                contenedorTarjeta.innerHTML = "";

                const tarjeta = document.createElement("div");
                tarjeta.className = "card p-3";

                const titulo = document.createElement("h5");
                titulo.textContent = cripto.name;

                const simbolo = document.createElement("p");
                simbolo.textContent = "Símbolo: " + cripto.symbol;

                const id = document.createElement("p");
                id.textContent = "ID: " + cripto.id;

                tarjeta.appendChild(titulo);
                tarjeta.appendChild(simbolo);
                tarjeta.appendChild(id);

                contenedorTarjeta.appendChild(tarjeta);
            });

            // Añadir botón a la celda
            celdaAcciones.appendChild(botonVer);

            // Añadir las celdas a la fila
            fila.appendChild(celdaSimbolo);
            fila.appendChild(celdaNombre);
            fila.appendChild(celdaId);
            fila.appendChild(celdaAcciones);

            // Añadir fila al tbody
            tbodyCriptomonedas.appendChild(fila);

        });

    } catch (error) {

        console.error("Error:", error);

        tbodyCriptomonedas.textContent =
            "No se han podido cargar las criptomonedas.";

    }
}