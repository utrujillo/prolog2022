import React from 'react'

const CardPokemon = (props) => {

  const { pokemon } = props
  return(
    <div>{ pokemon.name }</div>
  )
}

export default CardPokemon