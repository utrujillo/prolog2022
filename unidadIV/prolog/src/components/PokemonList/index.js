import React, { useState, useEffect } from 'react'
import useAPI from '../../hooks/API'
import CardPokemon from '../CardPokemon'

const PokemonList = () => {

  const { getRequest } = useAPI()
  const [urlPokemons, setUrlPokemons] = useState([])
  const [ pokemons, setPokemons ] = useState([])
  const [ pokemonsFilters, setPokemonsFilter ] = useState([])

  const loadUrlPokemon = async () => {
    let response = await getRequest('https://pokeapi.co/api/v2/pokemon')
    setUrlPokemons( response?.results?.map( pokemon => pokemon.url ) )
  }
  
  useEffect( () => {
    loadUrlPokemon()
  }, [] )

  const loadPokemons = async () => {
    let promises = []
    urlPokemons.forEach( url => promises.push( getRequest(url) ) )

    const resolvePromises = []
      .concat
      .apply( [], await Promise.all( promises ) )
    setPokemons( resolvePromises )
  }

  useEffect( () => {
    loadPokemons()
  }, [urlPokemons] )

  const searchPokemon = (event) => {
    let filtro = pokemons?.filter( pokemon => pokemon.name.includes( event.target.value.toLowerCase() ) )
    setPokemonsFilter( filtro )
  }

  return (
    <>
      <p>
        <input type='text' placeholder='Buscar...' onChange={searchPokemon} />
      </p>
      <p>
        Lista de pokemons
        {
          (pokemonsFilters.length > 0 ? pokemonsFilters : pokemons)?.map(
            pokemon => <CardPokemon 
                          pokemon={pokemon} 
                          key={pokemon.id}
                        />
          )
        }
      </p>
    </>
  )
}

export default PokemonList