import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import HeaderContainer from './containers/HeaderContainer'

import HomeView from './containers/HomeView';
import EditView from './containers/EditView';
import SketchPreviewContainer from './containers/SketchPreviewContainer';
import SketchView from './containers/SketchView';

class App extends React.Component {

  render(){
  return (
    <div className="App">
      <HeaderContainer />
      <Route exact path='/' render= {routerProps => <HomeView {...routerProps} />}/>
      <Route exact path='/sketches/:sketchID' render= {routerProps => <SketchView {...routerProps} />}/>
      <Route path='/sketches/:sketchID/edit' render= {routerProps => <EditView {...routerProps} />}/>

    </div>
  )}
}



export default App;
// export default connect(null, {fetchSketches})(App)