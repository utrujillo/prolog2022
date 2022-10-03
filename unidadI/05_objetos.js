const juan = {
  nombre: "Juan",
  apellidos: "Penas",
  correo: "jpenas@tecnm.mx"
}

const diana = {
  nombre: "Diana",
  apellidos: "Loeaza",
  correo: "dianal@tecnm.mx"
}

const directorio = [juan, diana]

// console.log(directorio[0].correo)

// for( i = 0; i < directorio.length; i++ ){
//   let nombreCompleto = directorio[i].nombre 
//                         +" "+ directorio[i].apellidos
//   console.log('Nombre completo: ', nombreCompleto)
// }

// directorio.forEach( (item, index) => {
//   console.log(`${index} Nombre completo: ${item.nombre} ${item.apellidos}`)
// } )

// directorio.forEach( item => {
//   console.log(`Nombre completo: ${item.nombre} ${item.apellidos}`)
// } )

const new_directory = directorio.map( element => ({
  nombreCompleto: element.nombre +' '+ element.apellidos
}) )

console.log( new_directory )