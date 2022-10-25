// Desestructuracion de objetos
import { directorio, suma } from './02_1_informacion.js'
import charizard from './charizard.js'

// console.log( suma(10,2) )
// console.log( directorio )
const abilities = charizard.abilities.map( item => ({ 
  name: item.ability.name
}) )
console.log( abilities )

