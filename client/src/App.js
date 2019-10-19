import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import {fetchSketches} from './actions/fetchSketches'

import HeaderContainer from './containers/HeaderContainer'
import SketchContainer from './containers/SketchContainer'
import SketchesList from './components/SketchesList'
import NewSketch from './containers/NewSketch';
import EditSketch from './containers/EditSketch';

class App extends React.Component {

  componentDidMount(){
    this.props.fetchSketches()
  }

  render(){
  return (
    <div className="App">
      <HeaderContainer />
      <Route exact path="/" render={() => <SketchesList sketches={this.props.sketches}/>} />
      <Route exact path='/sketches' render= {routerProps => <NewSketch {...routerProps} />}/>
      <Route path='/sketches/:sketchID' render= {routerProps => <EditSketch {...routerProps} />}/>

      {/* <Route path='/sketches/:sketchID' render= {routerProps => <SketchContainer {...routerProps} elements={this.props.elements} name={this.props.name} id = {this.props.id} saving={this.props.saving} loading={this.props.loading}/>}/> */}
    </div>
  )}
}



// export default App;
export default connect(null, {fetchSketches})(App)