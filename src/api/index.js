
const API = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
export const getPokemon = () =>{

  return fetch(API)
    .then(response => response.json() )
    .then(data=> data.results)
    .catch(err => console.log(err))
}

export const getPokemonDetails = (pokemon) => {
  
  return fetch(pokemon.url, {method:"GET"})
    .then(response => response.json() )
    .then(data=> {
      return data
    })
    .catch(err => console.log(err))
}