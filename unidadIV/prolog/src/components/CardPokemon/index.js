import React from 'react'

const CardPokemon = (props) => {

  const { pokemon } = props
  console.log( pokemon )
  return(
    <div>{ pokemon.name }</div>
  )
}

export default CardPokemon