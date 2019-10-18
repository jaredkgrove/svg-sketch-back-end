import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import HeaderContainer from './containers/HeaderContainer'
import SketchContainer from './containers/SketchContainer'
import SketchesListContainer from './containers/SketchesListContainer'

class App extends React.Component {

  render(){
  return (
    <div className="App">
      <HeaderContainer />
      {/* <Route exact path="/" render={() => <SketchesListContainer/>} /> */}
      <Route path='/sketches' render= {routerProps => <SketchContainer {...routerProps} elements={this.props.elements} name={this.props.name} id = {this.props.id} saving={this.props.saving} loading={this.props.loading}/>}/>
    </div>
  )}
}

const mapStateToProps = state => {
  console.log('poop')
  console.log(state)
  console.log(state.currentSketch.id)
  console.log(state.currentSketch.elements)
  console.log('poopy')
  return {
      id: state.currentSketch.id,
      name: state.currentSketch.name,
      elements: state.currentSketch.elements,
      loading: state.loading,
      saving: state.saving
  }
}

// export default App;
export default connect(mapStateToProps)(App)