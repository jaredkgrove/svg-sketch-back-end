import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
 
const SketchesList = ({ sketches }) => {
  const renderSketches = sketches.map((sketch) =>{
    return <><Link key={sketch.id} to={sketch.url}>{sketch.name}</Link><br></br></>}
  );
 
  return (
    <>
      {renderSketches}
    </>
  );
};

const mapStateToProps = state => {
  
  return {
      sketches: state.sketches
  }
}
export default connect(mapStateToProps)(SketchesList)