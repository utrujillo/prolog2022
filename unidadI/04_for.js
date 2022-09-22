// for( i = 1; i <= 5; i++ ){
//   console.log('Imprimir ', i)
// }

// let palabra = 'Imprimir'
// for( i = 0; i < palabra.length; i++ ){
//   console.log( palabra[i] )
// }

let arreglo = [1,2 ,34, 4,5]

// arreglo.forEach( (item, i) => {
//   console.log(`Indice ${i} valor ${item}`)
// });

console.log('Foreach')
arreglo.forEach( item => {
  console.log(item)
});

console.log('map')
arreglo.map( item => {
  console.log(item)
} )