import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    BrowserRouter as Router, Route
  } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import sketchReducer from './Reducers/sketchReducer.js';

// import * as serviceWorker from './serviceWorker';

const store = createStore(sketchReducer, applyMiddleware(thunk))
 
ReactDOM.render(
  <Provider store={store}>
    <Router >
    {/* history={history} */}
        <Route exact path="/" render={() => <div>Home</div>} />
          <Route path='/sketch' render= {() => <div>Editing Sketch</div>}/>
        <App /> 
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
