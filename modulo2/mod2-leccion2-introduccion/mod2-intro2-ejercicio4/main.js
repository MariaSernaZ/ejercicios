'use strict'

//EJERCICIO 4: ¡Págame, tía!
//Nos vamos de cena de Navidad, ¡qué alegría! Somos en total 9 personas y la cuenta del restaurante japonés es de 128€. Ana tiene que pagar 2€ más que los demás porque ha pedido un chupito de sake. ¿Cuánto tenemos que pagar cada una? ¿Y Ana? Hagamos un pequeño programa en JavaScript para calcularlo. El resultado debe mostrarse en la consola del navegador.

const personas = 9;
const result = 128;
const aPagar = result/personas;
const ana = aPagar + 2;

console.log(aPagar);
console.log(ana);
