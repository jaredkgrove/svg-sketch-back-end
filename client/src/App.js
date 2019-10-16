import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

class App extends React.Component {
  componentDidMount(){
    fetch('http://localhost:3000/api/v1/sketches/1')
    .then(resp => resp.json())
    .then(json => console.log(json.included[0].attributes.properties))
  }
  render(){
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
  )}
}

export default App;
