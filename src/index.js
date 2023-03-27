import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

import { pokemonsReducer } from './reducers/pokemons';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';

import { featuring, logger } from './middlewares';


import 'antd/dist/reset.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeEnhancer = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logger, featuring))

const store =createStore(pokemonsReducer, composeEnhancer)

root.render(
  <Provider store={store}>
    <App />
  </Provider>  
  
  
);

