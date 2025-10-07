// main.js

// ----- Datos de productos (usa el array que me pasaste) -----
const productos = [
    // (pega aquí exactamente el array de productos que me diste)
   {
        id: "Accesorio 1",
        titulo: "Pañoletas",
        imagen: "./img/accesorios/accesorio 1.jpg",
        categoria: { nombre: "Accesorios", id: "Accesorios" },
        precio: 15000
    },
    {
        id: "Accesorio 2",
        titulo: "Corbatas",
        imagen: "./img/accesorios/accesorio 2.jpg",
        categoria: { nombre: "Accesorios", id: "Accesorios" },
        precio: 15000
    },
    {
        id: "Accesorio 3",
        titulo: "Chaleco flotador",
        imagen: "./img/accesorios/accesorio 3.jpg",
        categoria: { nombre: "Accesorios", id: "Accesorios" },
        precio: 50000
    },
    {
        id: "Accesorio 4",
        titulo: "Moños",
        imagen: "./img/accesorios/accesorio 4.jpg",
        categoria: { nombre: "Accesorios", id: "Accesorios" },
        precio: 15000
    },
    {
        id: "Accesorio 5",
        titulo: "Impermeable 1",
        imagen: "./img/accesorios/accesorio 5.jpg",
        categoria: { nombre: "Accesorios", id: "Accesorios" },
        precio: 45000
    },
    {
        id: "Accesorio 6",
        titulo: "Impermeable 2",
        imagen: "./img/accesorios/accesorio 6.jpg",
        categoria: { nombre: "Accesorios", id: "Accesorios" },
        precio: 45000
    },
    {
        id: "Accesorio 7",
        titulo: "Collares perro",
        imagen: "./img/accesorios/accesorio 7.jpg",
        categoria: { nombre: "Accesorios", id: "Accesorios" },
        precio: 15000
    },
    {
        id: "Accesorio 8",
        titulo: "Collar bozal",
        imagen: "./img/accesorios/accesorio 8.jpg",
        categoria: { nombre: "Accesorios", id: "Accesorios" },
        precio: 35000
    },
    {
        id: "Accesorio 9",
        titulo: "Zapatos perro",
        imagen: "./img/accesorios/accesorio 9.jpg",
        categoria: { nombre: "Accesorios", id: "Accesorios" },
        precio: 25000
    },
    {
        id: "Accesorio 10",
        titulo: "Vestidos",
        imagen: "./img/accesorios/accesorio 10.jpg",
        categoria: { nombre: "Accesorios", id: "Accesorios" },
        precio: 35000
    },
    {
        id: "Accesorio 11",
        titulo: "Collares gato",
        imagen: "./img/accesorios/accesorio 11.jpg",
        categoria: { nombre: "Accesorios", id: "Accesorios" },
        precio: 15000
    },
    {
        id: "Accesorio 12",
        titulo: "Donas",
        imagen: "./img/accesorios/accesorio 12.jpg",
        categoria: { nombre: "Accesorios", id: "Accesorios" },
        precio: 20000
    },
    {
        id: "Accesorio 13",
        titulo: "Cachuchas 1",
        imagen: "./img/accesorios/accesorio 13.jpg",
        categoria: { nombre: "Accesorios", id: "Accesorios" },
        precio: 25000
    },
    {
        id: "Accesorio 14",
        titulo: "Collar localizador",
        imagen: "./img/accesorios/accesorio 14.jpg",
        categoria: { nombre: "Accesorios", id: "Accesorios" },
        precio: 48000
    },
    {
        id: "Accesorio 15",
        titulo: "Zapatos gatos",
        imagen: "./img/accesorios/accesorio 15.jpg",
        categoria: { nombre: "Accesorios", id: "Accesorios" },
        precio: 25000
    },
    {
        id: "Accesorio 16",
        titulo: "Cachucha 2",
        imagen: "./img/accesorios/accesorio 16.jpg",
        categoria: { nombre: "Accesorios", id: "Accesorios" },
        precio: 25000
    },
    {
        id: "Accesorio 17",
        titulo: "Gorros de animales",
        imagen: "./img/accesorios/accesorio 17.jpg",
        categoria: { nombre: "Accesorios", id: "Accesorios" },
        precio: 50000
    },
    {
        id: "Accesorio 18",
        titulo: "Cangurera",
        imagen: "./img/accesorios/accesorio 18.jpg",
        categoria: { nombre: "Accesorios", id: "Accesorios" },
        precio: 35000
    },
    // Juguetes (ejemplos)
    {
        id: "Juguete 1",
        titulo: "Paquete 1",
        imagen: "./img/jugetes/jugetes 1.jpg",
        categoria: { nombre: "Juguetes", id: "Juguetes" },
        precio: 15000
    },
    {
        id: "Juguete 2",
        titulo: "Paquete 2",
        imagen: "./img/jugetes/jugetes 2.jpg",
        categoria: { nombre: "Juguetes", id: "Juguetes" },
        precio: 20000
    },
    {
        id: "Juguete 3",
        titulo: "Huesito con chupa",
        imagen: "./img/jugetes/jugetes 3.jpg",
        categoria: { nombre: "Juguetes", id: "Juguetes" },
        precio: 35000
    },
    {
        id: "Juguete 4",
        titulo: "Paquete 3",
        imagen: "./img/jugetes/jugetes 4.jpg",
        categoria: { nombre: "Juguetes", id: "Juguetes" },
        precio: 15000
    },
    {
        id: "Juguete 5",
        titulo: "Dispensador de comida",
        imagen: "./img/jugetes/jugetes 5.jpg",
        categoria: { nombre: "Juguetes", id: "Juguetes" },
        precio: 45000
    },
    {
        id: "Juguete 6",
        titulo: "Lanzador automatico",
        imagen: "./img/jugetes/jugetes 6.jpg",
        categoria: { nombre: "Juguetes", id: "Juguetes" },
        precio: 50000
    },
    {
        id: "Juguete 7",
        titulo: "Rompecabezas",
        imagen: "./img/jugetes/jugetes 7.jpg",
        categoria: { nombre: "Juguetes", id: "Juguetes" },
        precio: 40000
    },
    {
        id: "Juguete 8",
        titulo: "Aros-frisbi",
        imagen: "./img/jugetes/jugetes 8.jpg",
        categoria: { nombre: "Juguetes", id: "Juguetes" },
        precio: 15000
    },
    {
        id: "Juguete 9",
        titulo: "Lanzador de pelotas",
        imagen: "./img/jugetes/jugetes 9.jpg",
        categoria: { nombre: "Juguetes", id: "Juguetes" },
        precio: 15000
    },
    {
        id: "Juguete 10",
        titulo: "Juguete educativo 1",
        imagen: "./img/jugetes/jugetes 10.jpg",
        categoria: { nombre: "Juguetes", id: "Juguetes" },
        precio: 20000
    },
    {
        id: "Juguete 11",
        titulo: "Juguete educativo 2",
        imagen: "./img/jugetes/jugetes 11.jpg",
        categoria: { nombre: "Juguetes", id: "Juguetes" },
        precio: 25000
    },
    {
        id: "Juguete 12",
        titulo: "Aguacate de catnip",
        imagen: "./img/jugetes/jugetes 12.jpg",
        categoria: { nombre: "Juguetes", id: "Juguetes" },
        precio: 20000
    },
    {
        id: "Juguete 13",
        titulo: "Torre de gato",
        imagen: "./img/jugetes/jugetes 13.jpg",
        categoria: { nombre: "Juguetes", id: "Juguetes" },
        precio: 55000
    },
    {
        id: "Juguete 14",
        titulo: "Caña para gatos",
        imagen: "./img/jugetes/jugetes 14.jpg",
        categoria: { nombre: "Juguetes", id: "Juguetes" },
        precio: 15000
    },
    {
        id: "Juguete 15",
        titulo: "Rueda de ejercicio",
        imagen: "./img/jugetes/jugetes 15.jpg",
        categoria: { nombre: "Juguetes", id: "Juguetes" },
        precio: 60000
    },
    {
        id: "Juguete 16",
        titulo: "Laberinto",
        imagen: "./img/jugetes/jugetes 16.jpg",
        categoria: { nombre: "Juguetes", id: "Juguetes" },
        precio: 50000
    },
    {
        id: "Juguete 17",
        titulo: "Lanza pelotas",
        imagen: "./img/jugetes/jugetes 17.jpg",
        categoria: { nombre: "Juguetes", id: "Juguetes" },
        precio: 25000
    },
    {
        id: "Juguete 18",
        titulo: "Juguete redondo",
        imagen: "./img/jugetes/jugetes 18.jpg",
        categoria: { nombre: "Juguetes", id: "Juguetes" },
        precio: 25000
    },
    // Higiene
    {
        id: "Higiene 1",
        titulo: "Kit 1",
        imagen: "./img/higene/higene 1.jpg",
        categoria: { nombre: "Higiene", id: "Higiene" },
        precio: 25000
    },
    {
        id: "Higiene 2",
        titulo: "Cepillo baño",
        imagen: "./img/higene/higene 2.jpg",
        categoria: { nombre: "Higiene", id: "Higiene" },
        precio: 35000
    },
    {
        id: "Higiene 3",
        titulo: "Cepillo de dientes",
        imagen: "./img/higene/higene 3.jpg",
        categoria: { nombre: "Higiene", id: "Higiene" },
        precio: 15000
    },
    {
        id: "Higiene 4",
        titulo: "Aqui no cat",
        imagen: "./img/higene/higene 4.jpg",
        categoria: { nombre: "Higiene", id: "Higiene" },
        precio: 20000
    },
    {
        id: "Higiene 5",
        titulo: "Tapetes",
        imagen: "./img/higene/higene 5.jpg",
        categoria: { nombre: "Higiene", id: "Higiene" },
        precio: 25000
    },
    {
        id: "Higiene 6",
        titulo: "Aqui si can",
        imagen: "./img/higene/higene 6.jpg",
        categoria: { nombre: "Higiene", id: "Higiene" },
        precio: 20000
    },
    {
        id: "Higiene 7",
        titulo: "Cesped",
        imagen: "./img/higene/higene 7.jpg",
        categoria: { nombre: "Higiene", id: "Higiene" },
        precio: 35000
    },
    {
        id: "Higiene 8",
        titulo: "Baño seco",
        imagen: "./img/higene/higene 8.jpg",
        categoria: { nombre: "Higiene", id: "Higiene" },
        precio: 25000
    },
    {
        id: "Higiene 9",
        titulo: "Pala popo-perro",
        imagen: "./img/higene/higene 9.jpg",
        categoria: { nombre: "Higiene", id: "Higiene" },
        precio: 25000
    },
    {
        id: "Higiene 10",
        titulo: "Pala popo-gato",
        imagen: "./img/higene/higene 10.jpg",
        categoria: { nombre: "Higiene", id: "Higiene" },
        precio: 25000
    },
    {
        id: "Higiene 11",
        titulo: "Kit 2",
        imagen: "./img/higene/higene 11.jpg",
        categoria: { nombre: "Higiene", id: "Higiene" },
        precio: 20000
    },
    {
        id: "Higiene 12",
        titulo: "Fuera pelos",
        imagen: "./img/higene/higene 12.jpg",
        categoria: { nombre: "Higiene", id: "Higiene" },
        precio: 30000
    },
    {
        id: "Higiene 13",
        titulo: "Pañales 1",
        imagen: "./img/higene/higene 13.jpg",
        categoria: { nombre: "Higiene", id: "Higiene" },
        precio: 25000
    },
    {
        id: "Higiene 14",
        titulo: "Pañales 2",
        imagen: "./img/higene/higene 14.jpg",
        categoria: { nombre: "Higiene", id: "Higiene" },
        precio: 25000
    }
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
const numerito = document.querySelector("#numerito");

// Carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// ----- Funciones -----
function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const descuento = 0.10;
        const precioFinal = Math.round(producto.precio * (1 - descuento));

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <div class="producto-descuento">-10%</div>
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">
                    <span class="precio-final">$${precioFinal}</span>
                    <s class="precio-original">$${producto.precio}</s>
                </p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        contenedorProductos.append(div);
    });

    actualizarBotonesAgregar();
}

function actualizarBotonesAgregar() {
    const botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const idBoton = e.currentTarget.id;
            const productoAgregado = productos.find(prod => prod.id === idBoton);
            agregarAlCarrito(productoAgregado);
        });
    });
}

function agregarAlCarrito(producto) {
    const descuento = 0.10;
    const precioFinal = Math.round(producto.precio * (1 - descuento));

    const existe = carrito.find(p => p.id === producto.id);
    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1, precioFinal });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarNumerito();

    // Toast
    if (typeof Toastify !== "undefined") {
        Toastify({
            text: "Producto agregado",
            duration: 2500,
            close: true,
            gravity: "top",
            position: "right",
            style: {
                background: "linear-gradient(to right, #4b33a8, #785ce9)",
                borderRadius: "2rem",
                textTransform: "uppercase",
                fontSize: ".75rem"
            }
        }).showToast();
    }
}

function actualizarNumerito() {
    const totalCantidad = carrito.reduce((acc, prod) => acc + (prod.cantidad || 0), 0);
    if (numerito) numerito.innerText = totalCantidad;
}

// ----- Filtro por categoría -----
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(b => b.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id !== "todos") {
            const productosFiltrados = productos.filter(prod => prod.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productosFiltrados[0]?.categoria.nombre || "Productos";
            cargarProductos(productosFiltrados);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    });
});

// ----- Inicialización -----
tituloPrincipal.innerText = "Todos los productos";
cargarProductos(productos);
actualizarNumerito();


// ----- BUSCADOR DE PRODUCTOS -----
const inputBusqueda = document.querySelector("#input-busqueda");
const botonBuscar = document.querySelector("#boton-buscar");

// Evento al escribir
if (inputBusqueda) {
    inputBusqueda.addEventListener("input", () => {
        filtrarProductos(inputBusqueda.value);
    });
}

// Evento al hacer clic en la lupa
if (botonBuscar) {
    botonBuscar.addEventListener("click", () => {
        filtrarProductos(inputBusqueda.value);
    });
}

function filtrarProductos(texto) {
    const termino = texto.toLowerCase().trim();
    if (termino === "") {
        cargarProductos(productos);
        tituloPrincipal.innerText = "Todos los productos";
        return;
    }

    const productosFiltrados = productos.filter(p =>
        p.titulo.toLowerCase().includes(termino) ||
        p.categoria.nombre.toLowerCase().includes(termino)
    );

    if (productosFiltrados.length > 0) {
        cargarProductos(productosFiltrados);
        tituloPrincipal.innerText = `Resultados para "${texto}"`;
    } else {
        contenedorProductos.innerHTML = `<p style="color:#4b33a8; font-weight:600;">No se encontraron productos que coincidan con "${texto}".</p>`;
        tituloPrincipal.innerText = "Sin resultados";
    }
}



