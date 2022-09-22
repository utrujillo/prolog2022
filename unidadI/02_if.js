let abuelo = 60
let abuela = 50
let edadPapa = 25
let edadMama = 23

if ( abuelo > abuela ) {
  if( edadPapa > edadMama ) {
    console.log('El abuelo y el papa son los mayores')
  } else {
    console.log('El abuelo y la mama son los mayores')
  }
} else {
  if( edadPapa > edadMama ) {
    console.log('La abuela y el papa son los mayores')
  } else {
    console.log('La abuela y la mama son los mayores')
  }
}

// Operador ternario | ternary operator
const mayor = ( abuelo > abuela ) ? 'abuelo' : 'abuela'
console.log( 'El mayor es: ', mayor )