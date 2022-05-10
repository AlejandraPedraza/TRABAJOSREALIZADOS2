let puesto: number = Number(prompt("posicion"));
if (puesto == 1) {
  console.log("Medalla de Oro");
} else {
  if (puesto == 2) {
    console.log("Medalla de Plata");
  } else {
    if (puesto == 3) {
      console.log("Medalla de Bronce");
    } else {
      if (puesto > 3) {
        console.log("Certificado de participacion");
      }
    }
  }
}
