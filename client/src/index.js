import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import sketchesReducer from './reducers/sketchesReducer.js'; 
import currentSketchReducer from './reducers/currentSketchReducer.js'; 
import sketchSettingsReducer from './reducers/sketchSettingsReducer.js'; 

// import * as serviceWorker from './serviceWorker';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducer = combineReducers({sketches: sketchesReducer, currentSketch: currentSketchReducer, settings: sketchSettingsReducer})
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


 
ReactDOM.render(
  <Provider store={store}>
    <Router >
        <App /> 
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
