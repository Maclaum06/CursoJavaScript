
const PRODUCTOS_ARRAY = [
    {
        id: 1,
        nombre: 'iphone 16',
        precio: 1500,
        marca: 'apple'
    },
    {
        id: 2,
        nombre: 'Samsung S24',
        precio: 1450,
         marca: 'samsung'
    },
    {
        id: 3,
        nombre: 'Iphone 13',
        precio: 850,
         marca: 'apple'
    },
    {
        id: 4,
        nombre: 'samsung s23',
        precio: 650,
        marca: 'samsung'
    },
    {
        id: 5,
        nombre: 'Iphone 16 pro',
        precio: 1950,
        marca: 'samsung'
    },
];

let carrito = [];

function mostrarProductos(FILTRADO_PRODUCTOS) {
    const PRODUCTOS_SECTION = document.getElementById('productos'); 
    PRODUCTOS_SECTION.innerHTML = '';
    FILTRADO_PRODUCTOS.forEach(producto => {
        const CARD_DIV = document.createElement('div'); 
        CARD_DIV.className = 'card-container';
        CARD_DIV.innerHTML = 
        `
        <h3>${producto.nombre}</h3>
        <p>${producto.precio}</p>
        <button onclick="añadirCarrito(${producto.id})">Comprar</button>
        `;
        PRODUCTOS_SECTION.appendChild(CARD_DIV);
    });
}

function filtrarProductos (marca) {
    let FILTRADO_PRODUCTOS = marca
    if(marca){
        FILTRADO_PRODUCTOS = PRODUCTOS_ARRAY.filter(producto => producto.marca === marca)
    }else{
        FILTRADO_PRODUCTOS = PRODUCTOS_ARRAY
    }
    mostrarProductos(FILTRADO_PRODUCTOS)
}

mostrarProductos(PRODUCTOS_ARRAY);

document.getElementById('todos').addEventListener('click', ()=>filtrarProductos(''));
document.getElementById('apple').addEventListener('click', ()=>filtrarProductos('apple'));
document.getElementById('samsung').addEventListener('click', ()=>filtrarProductos('samsung'));
