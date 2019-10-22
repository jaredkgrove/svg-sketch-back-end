import React from 'react';
import {fetchSketch} from '../actions/fetchSketch'
import { connect } from 'react-redux';
import ElementsContainer from './ElementsContainer'
import { Route } from 'react-router-dom';


    const SketchPreviewContainer = (props) => (
                <svg viewBox = {`0 0 1000 500`} className={"sketch-board preview"} >
                    <ElementsContainer elements={props.elements} />
                </svg>

    )



export default SketchPreviewContainer
