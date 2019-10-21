import React, { useState } from 'react';
import {createSketch} from '../actions/createSketch'
import { connect } from 'react-redux';

const NewSketchInput = (props) => {
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createSketch({name: name})
    }

    const handleChange = (event) => {
        setName( event.target.value )
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={name} onChange={handleChange}/>
            <input type="submit" value='Create New Sketch'/>
        </form> 
    ) 
};

export default connect(null, { createSketch })(NewSketchInput)