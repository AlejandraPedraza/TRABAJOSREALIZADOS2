/*premiar a empleados con aumento de sueldo.
Aumento se ajusta a la siguiente tabla:
Sueldo Actual - Sueldo con Aumento
0 - 15.000 $                    20%
15.001 - 20.000  $          10%
20.001 - 25.000  $           5%
Más de 25.000 $       No hay aumento
Desarrolle algoritmo dado el salario actual
determine el aumento de sueldo a aplicar y muestre*/

let sueldo: number = Number(prompt("Ingrese sueldo"));
let aumento: number = 0;

if (sueldo <= 15000) {
  aumento = sueldo * 1.2;
  console.log("Sueldo", sueldo);
  console.log("Ud. tiene un aumento del 20%");
  console.log("Total sueldo", aumento);
} else if (sueldo <= 20000) {
  aumento = sueldo * 1.1;
  console.log("Sueldo", sueldo);
  console.log("Ud. tiene un aumento del 10%");
  console.log("Total sueldo", aumento);
} else if (sueldo <= 25000) {
  aumento = sueldo * 1.05;
  console.log("Sueldo", sueldo);
  console.log("Ud. tiene un aumento del 5%");
  console.log("Total sueldo", aumento);
} else {
  aumento = sueldo;
  console.log("Sueldo", sueldo);
  console.log("Ud. no tiene aumento");
}
