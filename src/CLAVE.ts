let clave: string = prompt('Ingrese clave');
let intentos: number = 0;
let continuar: string = "y";

while(intentos<2 && continuar == "y"){
  if(clave === "eureka"){
    console.log("clave correcta");
  continuar = "n"
  }
  else {
    console.log("clave incorrecta");
    clave = prompt('ingrese clave')
  }
  intentos++
  
}