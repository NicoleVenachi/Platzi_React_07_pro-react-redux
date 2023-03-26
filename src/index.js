import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

import { pokemonsReducer } from './reducers/pokemons';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, compose } from 'redux';

import 'antd/dist/reset.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose

const store =createStore(pokemonsReducer, composeEnhancer)

root.render(
  <Provider store={store}>
    <App />
  </Provider>  
  
  
);

