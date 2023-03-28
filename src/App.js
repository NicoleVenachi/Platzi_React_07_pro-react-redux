import React from 'react'

import {getPokemonWithDetails} from './actions';
import {useSelector, useDispatch} from 'react-redux'

import { Col } from 'antd';

import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';

import logo from './statics/logo.svg'
import './styles/App.css';
import { getPokemon } from './api';


function App() {

  //hooks de redux
  const pokemons = useSelector(state=> state.pokemons)
  const dispatch = useDispatch();


  //efect para hacer peticion de data, la mando al estado general.
  //la primera vez hace llamado a la API.


  React.useEffect(()=>{
    const fetchPokemon = async () =>{
      
      //pido todos los datos
      const pokemonsRes = await getPokemon();
      
      //Lanzo todas las petciones, y le paso los pokemons totales
      dispatch(getPokemonWithDetails(pokemonsRes))
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