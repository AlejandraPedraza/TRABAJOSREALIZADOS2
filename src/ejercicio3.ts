let precioProducto: number = Number(prompt("PrecioInicial"));
let porcentajeDescuento: number = 0.1;
let descuento: number = precioProducto * porcentajeDescuento;
let precioFinal: number = precioProducto - descuento;

console.log(precioFinal);
