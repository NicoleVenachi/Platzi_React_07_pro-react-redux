import React, { useState } from 'react'

import {connect} from 'react-redux'


import { setPokemons as setPokemonsActions } from './actions';


import { Col } from 'antd';

import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';

import logo from './statics/logo.svg'
import './styles/App.css';
import { getPokemon } from './api';


function App({pokemons, setPokemons}) {
  //efect para hacer peticion de data, la mando al estado general.
  //la primera vez hace llamado a la API.
  
  React.useEffect(()=>{
    const fetchPokemon = async () =>{
      const pokemonsRes = await getPokemon();
      console.log(pokemonsRes);
      setPokemons(pokemonsRes)
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

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
})

const mapDispathToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value))
})



export default connect(mapStateToProps, mapDispathToProps)(App);