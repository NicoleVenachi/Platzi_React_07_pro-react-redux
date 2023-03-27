import React, { useState } from 'react'

import { setPokemons} from './actions';
import {useSelector, useDispatch} from 'react-redux'

import { Col } from 'antd';

import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';

import logo from './statics/logo.svg'
import './styles/App.css';
import { getPokemon, getPokemonDetails } from './api';


function App() {

  //hooks de redux
  const pokemons = useSelector(state=> state.pokemons)
  const dispatch = useDispatch();


  //efect para hacer peticion de data, la mando al estado general.
  //la primera vez hace llamado a la API.


  React.useEffect(()=>{
    const fetchPokemon = async () =>{
      const pokemonsRes = await getPokemon();
      //lanza varias peticiones al mismo tiempo
      //se espera hasta que todas sean resueltas
      const pokemonsDetails = await Promise.all(
        pokemonsRes.map((pokemon) =>getPokemonDetails(pokemon))  
      );

      console.log(pokemonsDetails);
      dispatch(setPokemons(pokemonsDetails))
    } 

    fetchPokemon()
  },[])

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>

      <PokemonList pokemons={pokemons}/>
      
    </div>
  );
}


export default App;