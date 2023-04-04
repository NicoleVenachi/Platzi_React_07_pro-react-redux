import { SET_FAVORITE, SET_POKEMONS } from "../actions/types";

import {fromJS} from 'immutable'

const initialState = fromJS({
  pokemons: []
})

export const pokemonsReducer = (state = initialState,action) => {
  switch (action.type) {
    case SET_POKEMONS:

      return state.setIn(['pokemons'], fromJS(action.payload))

    case SET_FAVORITE:

      // entre todos los pokeoons,busco el idx del actual
      const currentPokemonIndex = state.get('pokemons').findIndex(
        (pokemon) => pokemon.get('id') === action.payload.pokemonId)
      
        //sino existe, revuelve -1, y devuelve el estado tal cual
      if (currentPokemonIndex < 0) {
        return state
      }

      //si exsite, le hace toggle a favorite
      const isFavorite = state.getIn(['pokemons',currentPokemonIndex, 'favorite']);

      
      return state.setIn(['pokemons', currentPokemonIndex, 'favorite'], !isFavorite)

    default:
      return state
  }
}