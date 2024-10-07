let input;
let total = 0;


while(true){
    input = prompt("ingresa el valor del producto o escribe 'salir' finalizar")
    if(input.toLowerCase() === 'salir'){
       break; 
       console.log("Gracias por visitar la tienda. ¡Hasta luego!");
       
    }
    let valorProducto = parseFloat (input);

    if(!isNaN (valorProducto) && valorProducto > 0){
        total += valorProducto;
        console.log(total);
    } else{
        alert("Por favor ingresa un número correcto")
    }


}

console.log("el valor total de los productos es "+total.toFixed(2))