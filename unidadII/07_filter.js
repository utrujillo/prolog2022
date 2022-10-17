const juan = {
  nombre: "Juan",
  apellidos: "Penas",
  correo: "jpenas@tecnm.mx",
  calificacion: 100
}

const diana = {
  nombre: "Diana",
  apellidos: "Loeaza",
  correo: "dianal@tecnm.mx",
  calificacion: 78
}

const alberto = {
  nombre: "Alberto",
  apellidos: "Medina",
  correo: "alberto@tecnm.mx",
  calificacion: 58
}

const directorio = [juan, diana, alberto]

const result = directorio.filter( item => item.calificacion >= 70 )
console.log( result )