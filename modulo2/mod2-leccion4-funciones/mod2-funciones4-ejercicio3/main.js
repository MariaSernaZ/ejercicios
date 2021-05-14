'use strict';

//EJERCICIO 3: Ticket con IVA
//Crea una función que reciba por parámetro un número, que representará un precio, y devuelva un texto en el que ponga el precio sin IVA, el IVA (21%) y el total. Por ejemplo, si pasamos por parámetro un 10, la función pintará en la consola "Precio sin IVA: 10, IVA: 2,1 y Total: 12,1".
//Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola para comprobarlo.


function priceIva(price, iva) {
    const ivaResult = price * iva / 100;
    const finalResult = price + ivaResult; 
  
    return 'El precio sin IVA es: '+ price + ', el IVA es: '+ ivaResult + ' y el precio Total con IVA: ' + finalResult;
}
  
let finalPrice = priceIva(10, 21);

document.write(finalPrice);
