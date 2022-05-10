/*Algoritmo = precio de compra
compra se compone precio de producto y cantidad
gasta mas de 1000 aplicar descuento de 10%*/

let producto1: number = 300;
let cantidadProd1: number = Number(prompt("cantidadProd1"));
let precioCantProd1: number = producto1 * cantidadProd1;

console.log("totalproducto1", precioCantProd1);

let producto2: number = 50;
let cantidadProd2: number = Number(prompt("cantidadProd2"));
let precioCantProd2: number = producto2 * cantidadProd2;
console.log("totalproducto2", precioCantProd2);

console.log("total", precioCantProd1 + precioCantProd2);

let total: number = precioCantProd1 + precioCantProd2;
if (total > 1000) {
  let descuento: number = total * 0.1;
  total = total - descuento;
}
console.log("total a pagar es", total);
