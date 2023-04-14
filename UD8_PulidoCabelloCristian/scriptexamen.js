function cambiarOrden(unArray) {

    /*
    Primero elegimos dos posiciones del array aleatorias las cuales luego cambiaremos su posicion 
    */
    let primerLugar = Math.floor(Math.random() * unArray.length);
    let segundoLugar = Math.floor(Math.random() * unArray.length);

    /*
    Creamos un arrau auxiliar donde colocaremos el array antiguo con los cambios que se 
    solicitan en el enunciado
    */
    let arrayAux = unArray[primerLugar];

    /*
    *Cambiamos las posiciones y devolvemos el array.
    */
    unArray[primerLugar] = unArray[segundoLugar];

    unArray[segundoLugar] = arrayAux;

    return unArray;
}


function trocearURL(url) {
    /*
    Creamos la variable del array a la cual le pasaremos la url
    */
    let urlTroceada;
    /*
    Dividimos la url por los puntos,las barras y las barras y la guardamos en el array
    */
    urlTroceada = url.split(".");
   
    /*
    *Devolvemos la url troceada final
    */
    return urlTroceada;
}

function principal() {
    /*
    *Pedimos la url al usuario
    */
    let url = prompt("Introduce una URL");

    /*
    *Troceamos la url y la guardamos en un array
    */
    let arrayFinal = trocearURL(url);

    /*
    *Cambiamos el orden del array 10 veces
    */
    for (let i = 0; i < 10; i++) {
        arrayFinal = cambiarOrden(arrayFinal);
    }

    /*
    *Devolvemos el array
    */
    alert(arrayFinal);
}
principal();






