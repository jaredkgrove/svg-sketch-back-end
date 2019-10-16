import React from 'react';
import './App.css';

import HeaderContainer from './containers/HeaderContainer'
import SketchContainer from './containers/SketchContainer'

class App extends React.Component {

  render(){
  return (
    <div className="App">
      <HeaderContainer />
      <SketchContainer />
    </div>
  )}
}


export default App;
