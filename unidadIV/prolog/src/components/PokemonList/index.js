import React, { useState, useEffect } from 'react'
import useAPI from '../../hooks/API'

const PokemonList = () => {

  const { getRequest } = useAPI()

  const loadPokemon = async () => {
    let response = await getRequest('https://pokeapi.co/api/v2/pokemon')
    console.log(response.results)
  }
  
  useEffect( () => {
    loadPokemon()
  }, [] )
  
  return (
    <p>Lista de pokemons</p>
  )
}

export default PokemonList