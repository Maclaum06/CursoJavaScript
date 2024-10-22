const PRODUCTOS_ARRAY = [
    {
        id: 1,
        nombre: 'Camiseta hombre',
        precio: 100
    },
    {
        id: 2,
        nombre: 'Camiseta mujer',
        precio: 120
    },
    {
        id: 3,
        nombre: 'Pantalón hombre',
        precio: 200
    },
    {
        id: 4,
        nombre: 'Pantalón mujer',
        precio: 220
    },
    {
        id: 5,
        nombre: 'Cartera',
        precio: 50
    },
];

let carrito = [];

function mostrarProductos() {
    const PRODUCTOS_SECTION = document.getElementById('productos'); // Corregido
    PRODUCTOS_ARRAY.forEach(producto => {
        const CARD_DIV = document.createElement('div'); // Corregido
        CARD_DIV.className = 'card-container';
        CARD_DIV.innerHTML =  // Corregido
        `
        <h3>${producto.nombre}</h3>
        <p>${producto.precio}</p>
        <button onclick="añadirCarrito(${producto.id})">Comprar</button>
        `;
        PRODUCTOS_SECTION.appendChild(CARD_DIV);
    });
}

mostrarProductos();
