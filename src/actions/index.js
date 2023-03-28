
import { getPokemonDetails } from "../api";
import { SET_POKEMONS } from "./types";

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload
})

//por defecto, recibe un arreglo vacio
export const getPokemonWithDetails = (pokemons=[]) => async (dispatch) => {
  // por cada pokemon, hago la petición de data 
  const pokemonsDetails = await Promise.all(
      pokemons.map((pokemon) =>getPokemonDetails(pokemon))  
  );

  dispatch(setPokemons(pokemonsDetails))
}

