// // const something = () => {
// //   return new Promise( (resolve, reject) => {
// //     if(false)
// //       resolve('Promesa devuelta')
// //     else
// //       reject('Ups, ocurrio un error')
// //   }  )
// // }

// // something()
// //   .then( response => console.log(response) )
// //   .catch( err => console.log( err ) )

const somethingNew = () => {
  return new Promise( (resolve, reject) => {
    if(true)
      setTimeout( () => {
        resolve('termino')
      }, 5000 )
    else
      reject('Ups, ocurrio un error')
  }  )
}

somethingNew()
  .then( response => console.log(response) )
  .then( () => console.log('Ejecutando despues..') )
  .catch( err => console.log( err ) )

// const one = () => {
//   setTimeout( () => {
//     console.log('Se ejecuto one')
//   }, 2000 )
// }

// const two = () => {
//  console.log('Se ejecuto two')
// }

// one()
// two()