import React from 'react';
import { connect } from 'react-redux';

import { Route } from 'react-router-dom';
import HueSelector from '../components/HueSelector'
import SaturationLightnessSelector from '../components/SaturationLightnessSelector'

const ColorSelectorContainer = (props) => (
    <div className="color-selector">
        <HueSelector />
        <SaturationLightnessSelector/>
    </div>
)



export default ColorSelectorContainer
