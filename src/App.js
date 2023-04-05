import React from 'react'

import {useSelector, useDispatch, shallowEqual} from 'react-redux'

import { Col, Spin } from 'antd';

import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';

import logo from './statics/logo.svg'
import './styles/App.css';

import { fetchPokemonWithDetails } from './slices/data';


function App() {

  //hooks de redux
  const pokemons = useSelector( state => 
    state.data.pokemons, shallowEqual
  )
  const dispatch = useDispatch();

  const loading = useSelector(state => state.ui.loading)
  
  //efect para hacer peticion de data, la mando al estado general.
  //la primera vez hace llamado a la API.


  React.useEffect(()=>{
    console.log(pokemons);
    dispatch((fetchPokemonWithDetails()))
  },[])

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>

      {
        // Si esta cargando muestra loader, sino pokemons
        loading ? <Col offset={12}>
          <Spin spinning size='large' />
        </Col>
        :
        <PokemonList pokemons={pokemons}/>
      }
      
      

      
      
    </div>
  );
}


export default App;