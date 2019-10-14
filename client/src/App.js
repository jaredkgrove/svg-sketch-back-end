import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <NavLink 
          style={{ marginRight: '10px' }} 
          to="/"
        >
          Home
        </NavLink>
        <NavLink 
          style={{ marginRight: '10px' }} 
          to="/sketch"
        >
          New Sketch
        </NavLink>


          {/* {routerProps => <Sketch {...routerProps} sketch={this.state.sketch}/>} */}
      </header>
    </div>
  );
}

export default App;
