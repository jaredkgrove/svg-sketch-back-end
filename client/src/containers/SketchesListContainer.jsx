import React from 'react';
import { NavLink } from 'react-router-dom';
class SketchesListContainer extends React.Component{


render() {

    return(

        <NavLink 
        style={{ marginRight: '10px' }} 
        to="/"
        >
        Home
        </NavLink>

    )}
}

export default SketchesListContainer