
import { getPokemonDetails } from "../api";
import { SET_POKEMONS, SET_LOADING, SET_FAVORITE } from "./types";

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload
})

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload
})

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload
})

//por defecto, recibe un arreglo de pokemons o isno vaciovacio
export const getPokemonWithDetails = (pokemons=[]) => async (dispatch) => {
  // por cada pokemon, hago la petición de data 
  const pokemonsDetails = await Promise.all(
      pokemons.map((pokemon) =>getPokemonDetails(pokemon))  
  );
  
  //luego d eopearicon asincrona, hace dispatch del action creator
  dispatch(setPokemons(pokemonsDetails))
}


