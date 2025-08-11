// Cargar el título desde config.json
fetch('config.json')
    .then(res => res.json())
    .then(config => {
        document.getElementById("titulo").innerText = config.titulo;
        document.getElementById("tituloHeader").innerText = config.titulo;
    });

// Cargar productos desde productos.json
fetch('productos.json')
    .then(res => res.json())
    .then(productos => {
        const contenedor = document.getElementById("productos");
        productos.forEach(prod => {
            const div = document.createElement("div");
            div.classList.add("producto");
            div.innerHTML = `
                <img src="${prod.imagen}" alt="${prod.nombre}" width="150">
                <h3>${prod.nombre}</h3>
                <p>Precio: $${prod.precio}</p>
            `;
            contenedor.appendChild(div);
        });
    });
