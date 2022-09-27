// function resta(numero1, numero2){
//   console.log(numero1 - numero2)
// }

// function suma() {
//   console.log('Estoy en funcion')
//   return 10 + 5
// }

const resta = (numero1, numero2) => {
  console.log(numero1 - numero2)
}

const suma = () => {
  console.log('Estoy en funcion')
  return 10 + 5
}

let resultSuma = suma()
resta(210, 67)
console.log('Resultado', resultSuma)