let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contenedorCarrito = document.querySelector("#carrito-productos");
const subtotalElement = document.querySelector("#subtotal");
const descuentoElement = document.querySelector("#descuento");
const totalElement = document.querySelector("#total");
const botonVaciar = document.querySelector("#carrito-vaciar");
const accionesCarrito = document.querySelector("#carrito-acciones");

// 🔹 Mostrar productos en el carrito
function renderizarCarrito() {
    contenedorCarrito.innerHTML = "";

    if (carrito.length === 0) {
        const mensajeVacio = document.createElement("p");
        mensajeVacio.textContent = "Tu carrito está vacío 😿";
        mensajeVacio.classList.add("carrito-vacio");
        contenedorCarrito.appendChild(mensajeVacio);

        if (accionesCarrito) accionesCarrito.classList.add("disabled");
        actualizarTotal();
        return;
    }

    carrito.forEach((producto, index) => {
        const div = document.createElement("div");
        div.classList.add("carrito-producto");
        div.innerHTML = `
            <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <h3>${producto.titulo}</h3>
            <p>Cantidad: ${producto.cantidad}</p>
            <p>Precio c/u: $${producto.precioFinal}</p>
            <p>Subtotal: $${producto.precioFinal * producto.cantidad}</p>
            <button class="carrito-producto-eliminar" data-index="${index}">Eliminar</button>
        `;
        contenedorCarrito.appendChild(div);
    });

    if (accionesCarrito) accionesCarrito.classList.remove("disabled");
    activarBotonesEliminar();
    actualizarTotal();
}

// 🔹 Botones para eliminar productos individuales
function activarBotonesEliminar() {
    const botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const index = e.target.dataset.index;
            carrito.splice(index, 1);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            renderizarCarrito();
        });
    });
}

// 🔹 Vaciar carrito
if (botonVaciar) {
    botonVaciar.addEventListener("click", () => {
        carrito = [];
        localStorage.setItem("carrito", JSON.stringify(carrito));
        renderizarCarrito();
    });
}

// 🔹 Actualizar total, subtotal y descuento
function actualizarTotal() {
    let subtotal = carrito.reduce((acc, p) => acc + p.precioFinal * p.cantidad, 0);
    let descuento = carrito.length >= 3 ? subtotal * 0.10 : 0;
    let total = subtotal - descuento;

    if (subtotalElement) subtotalElement.textContent = `$${subtotal}`;
    if (descuentoElement) descuentoElement.textContent = `$${descuento.toFixed(2)}`;
    if (totalElement) totalElement.textContent = `$${total.toFixed(2)}`;
}

// 🔹 Inicializar
renderizarCarrito();


