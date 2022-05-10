/*poner dos números enteros, y luego retorne la suma de todos los números
que están entre ellos de mas chico a mas grande*/
/* tambien colocando los numeros al reves, del mas grande al mas chico*/

let numero1: number = Number(prompt("Ingrese numero1"));
let numero2: number = Number(prompt("Ingrese numero2"));

let suma: number = 0;
let indice = numero1;

if (numero1 < numero2) {
  while (indice <= numero2) {
    suma = suma + indice;
    indice++;
  }
  console.log(" La suma entre " + numero1 + " y " + numero2 + " es de " + suma);
} else {
  while (indice >= numero2) {
    suma = suma + indice;
    indice--;
  }
  console.log(" La suma entre " + numero2 + " y " + numero1 + " es de " + suma);
}
