
const OPENWEATHER_API_KEY = '2305cd81ad9127e93f21187a6e7f479b';


const bilbao = {
    latitud: 43.26271,
    longitud: -2.92528
};


async function obtenerTiempo() {
    const parametros = `lat=${bilbao.latitud}&lon=${bilbao.longitud}&appid=${OPENWEATHER_API_KEY}&units=metric&lang=es`;
    const urlActual = `https://api.openweathermap.org/data/2.5/weather?${parametros}`;
    const urlPrevision = `https://api.openweathermap.org/data/2.5/forecast?${parametros}`;

    try {
        const [respuestaActual, respuestaPrevision] = await Promise.all([
            fetch(urlActual),
            fetch(urlPrevision)
        ]);

        if (!respuestaActual.ok || !respuestaPrevision.ok) {
            throw new Error('No se pudieron obtener los datos del tiempo.');
        }

        const [tiempoActual, prevision] = await Promise.all([
            respuestaActual.json(),
            respuestaPrevision.json()
        ]);

        mostrarTiempoActual(tiempoActual);
        mostrarPrevision(prevision.list);
    } catch (error) {
        console.error('Error al obtener los datos del tiempo:', error);
        document.getElementById('current-container').textContent =
            'No se pudieron cargar los datos del tiempo.';
        document.getElementById('weather-container').textContent =
            'No se pudo cargar la previsión.';
    }
}

function crearTarjeta(fechaHora, item) {
    const card = document.createElement('article');
    card.className = 'weather-card';

    const fecha = document.createElement('p');
    fecha.textContent = `Fecha/Hora: ${fechaHora}`;

    const descripcion = document.createElement('p');
    descripcion.className = 'text-capitalize';
    descripcion.textContent = item.weather[0].description;

    const icono = document.createElement('img');
    icono.className = 'weather-icon';
    icono.src = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
    icono.alt = item.weather[0].description;

    const temperatura = document.createElement('p');
    temperatura.textContent = `Grados: ${item.main.temp} °C`;

    const humedad = document.createElement('p');
    humedad.textContent = `Humedad: ${item.main.humidity}%`;

    card.append(fecha, descripcion, icono, temperatura, humedad);
    return card;
}

function mostrarTiempoActual(item) {
    const fechaHora = new Date(item.dt * 1000).toLocaleString('es-ES');
    const container = document.getElementById('current-container');
    container.replaceChildren(crearTarjeta(fechaHora, item));
}

function mostrarPrevision(listaPredicciones) {
    const container = document.getElementById('weather-container');
    container.replaceChildren();

    listaPredicciones.forEach(item => {
        container.append(crearTarjeta(item.dt_txt, item));
    });
}

window.addEventListener('DOMContentLoaded', obtenerTiempo);