import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import { featuring, logger } from './middlewares';


import 'antd/dist/reset.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancer = composeAlt(applyMiddleware(thunk, logger, featuring))

const store = createStore(rootReducer, composeEnhancer)

root.render(
  <Provider store={store}>
    <App />
  </Provider>  
  
  
);

