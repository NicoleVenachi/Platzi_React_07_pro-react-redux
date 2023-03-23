import React from 'react'
import PokemonCard from "./PokemonCard";
import '../styles/PokemonList.css'

function PokemonList({ pokemons }) {

  return (
    <div className='PokemonList'>
      {pokemons.map(pokemon => (
        <PokemonCard name={pokemon.name} key={pokemon.name} />
      ))}
    </div>
  )
}

export default PokemonList

PokemonList.defaultProps = {
  pokemons: Array(10).fill('') //['', '', ... ,''] 
}

