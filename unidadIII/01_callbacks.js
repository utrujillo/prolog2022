// function suma( numero1, numero2 ){
//   return numero1 + numero2
// }

// function resta( numero1, numero2 ){
//   return numero1 - numero2
// }

// function calcular(numero1, numero2, callback){
//   return callback(numero1, numero2)
// }

// let resultado = calcular(10,2, resta)
// console.log( resultado )

function date(callback){
  console.log('date', new Date)
  
  setTimeout( () => {
    console.log('*^____^* 3 Doritos despues...')
    let date = new Date
    callback(date)
  }, 3000)
}

function printDate(dateNow){
  console.log('printDate', dateNow)
}

date(printDate)