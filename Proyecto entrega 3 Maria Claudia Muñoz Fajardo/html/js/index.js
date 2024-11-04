
const PRODUCTOS_ARRAY = [
    { id: 1, nombre: 'iPhone 16', precio: 1500, marca: 'apple' },
    { id: 2, nombre: 'Samsung S24', precio: 1450, marca: 'samsung' },
    { id: 3, nombre: 'iPhone 13', precio: 850, marca: 'apple' },
    { id: 4, nombre: 'Samsung S23', precio: 650, marca: 'samsung' },
    { id: 5, nombre: 'iPhone 16 Pro', precio: 1950, marca: 'apple' }
];

let carrito = [];


function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
    }
}


function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}


function mostrarProductos(FILTRADO_PRODUCTOS) {
    const PRODUCTOS_SECTION = document.getElementById('productos'); 
    PRODUCTOS_SECTION.innerHTML = '';
    FILTRADO_PRODUCTOS.forEach(producto => {
        const CARD_DIV = document.createElement('div'); 
        CARD_DIV.className = 'card-container';
        CARD_DIV.innerHTML = 
        `
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <button onclick="añadirCarrito(${producto.id})">Comprar</button>
        `;
        PRODUCTOS_SECTION.appendChild(CARD_DIV);
    });
}


function filtrarProductos(marca) {
    let FILTRADO_PRODUCTOS = marca ? PRODUCTOS_ARRAY.filter(producto => producto.marca === marca) : PRODUCTOS_ARRAY;
    mostrarProductos(FILTRADO_PRODUCTOS);
}


function añadirCarrito(id) {
    const producto = PRODUCTOS_ARRAY.find(producto => producto.id === id);
    if (producto) {
        carrito.push(producto);
        alert(`${producto.nombre} añadido al carrito.`);
        guardarCarrito(); 
    }
}


cargarCarrito();
mostrarProductos(PRODUCTOS_ARRAY);

document.getElementById('todos').addEventListener('click', () => filtrarProductos(''));
document.getElementById('apple').addEventListener('click', () => filtrarProductos('apple'));
document.getElementById('samsung').addEventListener('click', () => filtrarProductos('samsung'));