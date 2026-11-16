async function inicializar() {
  /* Codigo del alumno */
  const respuesta = await fetch("https://dummyjson.com/products?limit=20");

  const { products } = await respuesta.json(); //recupera los productos en formato .json
  const tbodyProductos = document.getElementById("tbodyProductos");

  products.slice(0, 20).forEach((producto) => { //crea los elementos del listado
    const fila = document.createElement("tr");
    const imagen = document.createElement("img");
    imagen.src = producto.thumbnail;
    imagen.alt = producto.title;

    const celdaImagen = document.createElement("td");
    celdaImagen.append(imagen);
    fila.append(celdaImagen);

    [producto.title, producto.category, producto.id].forEach((valor) => {
      const celda = document.createElement("td");
      celda.textContent = valor;
      fila.append(celda);
    });

    fila.addEventListener("click", () => mostrarDetalle(producto.id)); //añade las filas
    tbodyProductos.append(fila);
  });
}

async function mostrarDetalle(id) { //muestra los detalles (una vez clicados)
  const respuesta = await fetch(`https://dummyjson.com/products/${id}`);

  const producto = await respuesta.json();
  const tarjeta = document.createElement("div");
  tarjeta.className = "card";

  const imagen = document.createElement("img");
  imagen.className = "card-img-top";
  imagen.src = producto.images[0];
  imagen.alt = producto.title;

  const contenido = document.createElement("div");
  contenido.className = "text-left";

  const nombre = document.createElement("h3");
  nombre.textContent = producto.title;

  const precio = document.createElement("p");
  precio.textContent = `Precio: ${new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(producto.price)}`;

  const valoracion = document.createElement("p");
  valoracion.textContent = `Valoración: ${producto.rating} / 5`;
  contenido.append(nombre, precio, valoracion);

  tarjeta.append(imagen, contenido);
  document.getElementById("contenedorTarjetaProducto").replaceChildren(tarjeta);
}

/* Codigo del alumno */