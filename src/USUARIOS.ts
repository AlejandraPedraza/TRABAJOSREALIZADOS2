/*Leer valores del usuario hasta que introduzca un 0
El usuario puede introducir valores numéricos, 
tanto positivos como negativos
Contar la cantidad de valores introducidos que sean mayores a 0 
y el porcentaje de positivos respecto del total*/

let cantnumTotal: number = 0;
let cantnumPositivos: number = 0;
let porcPositivos: number = 0;

let numero = Number(prompt("Ingrese un número"));

while (numero != 0) {
  if (numero > 0) {
    cantnumPositivos++;
  }
  cantnumTotal++;
  numero = Number(prompt("Ingrese un número"));
}
if (cantnumTotal > 0) {
  porcPositivos = (cantnumPositivos / cantnumTotal) * 100;
  console.log(
    cantnumPositivos,
    "positivos es el ",
    porcPositivos,
    " % del total."
  );
}
