import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import HeaderContainer from './containers/HeaderContainer'

import HomeView from './containers/HomeView';
import EditView from './containers/EditView';

class App extends React.Component {

  render(){
  return (
    <div className="App">
      <HeaderContainer />
      <Route exact path='/' render= {routerProps => <HomeView {...routerProps} />}/>
      <Route path='/sketches/:sketchID' render= {routerProps => <EditView {...routerProps} />}/>

      {/* <Route path='/sketches/:sketchID' render= {routerProps => <SketchContainer {...routerProps} elements={this.props.elements} name={this.props.name} id = {this.props.id} saving={this.props.saving} loading={this.props.loading}/>}/> */}
    </div>
  )}
}



export default App;
// export default connect(null, {fetchSketches})(App)