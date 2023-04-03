import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/types";

const initialState = {
  pokemons: [],
  loading: false
}

export const pokemonsReducer = (state = initialState,action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {...state,
        pokemons:action.payload
      }
    
    case SET_FAVORITE:
      // entre todos los pokeoons,busco el idx del actual
      const newPokemonList = [...state.pokemons]
      const currentPokemonIndex = newPokemonList.findIndex(
        (pokemon) => pokemon.id === action.payload.pokemonId)
      
        //sino existe, revuelve -1, y devuelve el estado tal cual
      if (currentPokemonIndex < 0) {
        return state
      }

      //si exsite, le hace toggle a favorite
      newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite
      
      return {...state,
        pokemons:newPokemonList
      }

    case SET_LOADING:
      return {...state,
        //pongo como estado lo que venga en payload
        loading: action.payload
      }
  
    default:
      return state
  }
}