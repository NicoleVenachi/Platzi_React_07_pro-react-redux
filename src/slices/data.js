import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { getPokemon, getPokemonDetails } from '../api';
import { setLoading } from './ui';

const initialState = { 
  pokemons: []
}

export const fetchPokemonWithDetails = createAsyncThunk (
  'data/fetchPokemonWithDetails',
  async (_, {dispatch}) => {
    //dispatch del lader
    dispatch(setLoading(true))
    //ftch
    
    
    const pokemonsRes = await getPokemon();
    
    const pokemonsDetails = await Promise.all(
      pokemonsRes.map((pokemon) =>getPokemonDetails(pokemon))  
    );
    dispatch(setPokemons(pokemonsDetails))

    //***dispatch loader
    dispatch(setLoading(false))
  }

)

export const dataSlice = createSlice ({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex(
        (pokemon) => pokemon.id === action.payload.pokemonId)
      
      if (currentPokemonIndex >= 0) {
        //si el index existe, actualizo
        const isFavorite = state.pokemons[currentPokemonIndex].favorite
        state.pokemons[currentPokemonIndex].favorite = !isFavorite
      }

    }
  }
})

//exportamos los actions.
export const {setPokemons, setFavorite} = dataSlice.actions
//exportamos reducers

export default dataSlice.reducer;

