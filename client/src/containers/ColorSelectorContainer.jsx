import React from 'react';
import { connect } from 'react-redux';

import { Route } from 'react-router-dom';
import HueSelector from '../components/HueSelector'
import SaturationLightnessSelector from '../components/SaturationLightnessSelector'

const ColorSelectorContainer = (props) => {
    const handleHueChange = (hue) => {
        props.handleLineHueUpdate(hue)
    }

    const handleSLChange = (s, l) => {
        props.handleLineSLUpdate(s, l)
    }
    
    return(
        <div className="color-selector">
            <HueSelector handleChange={handleHueChange}/>
            <SaturationLightnessSelector hue={props.settings.lineColor.h} handleChange={handleSLChange}/>
        </div>
    )
}



export default ColorSelectorContainer
