import users from './users.js'

const getUsers = () => {
  return new Promise( (resolve, reject) => {
    console.log('Cargando usuarios...')

    if(true) {
      setTimeout( () => {
        resolve( users )
      }, 3000 )
    }else
      reject( new Error('Ocurrio un error') )
  } )
}

const allUsers = await getUsers()
console.log('se ejecuto')
console.log( allUsers )