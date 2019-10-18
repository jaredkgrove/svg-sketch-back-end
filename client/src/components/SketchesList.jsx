import React from 'react';
import { Link } from 'react-router-dom';
 
const SketchesList = ({ sketches }) => {
  const renderSketches = Object.keys(sketches).map(sketchID =>
    <Link key={sketchID} to={`/sketches/${sketchID}`}>{sketches[sketchID].name}</Link>
  );
 
  return (
    <>
      {renderSketches}
    </>
  );
};
 
export default SketchesList;