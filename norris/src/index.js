// React Pre-Installed Imports
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// My Imports Step 1
import {createStore, applyMiddleware} from 'redux'; // activated at step 2
import logger from 'redux-logger'; // activated at step 2
import thunk from 'redux-thunk'; // activated at step 2
import{reducer} from './reducers/index'; // activated at step 2
import {Provider} from 'react-redux'; // activated at step 3

// Creating Store and linking it to Reducer, and applyMiddleware - aMw is apllying thunk and logger  Step 2 
const store = createStore(reducer, applyMiddleware(thunk, logger));

// Connect Provider by wrapping it arround <App/> and initilize Provider using Store={Store} Step 3 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
