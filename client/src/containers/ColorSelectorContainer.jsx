import React from 'react';
import { connect } from 'react-redux';

import HueSelector from '../components/HueSelector'
import SaturationLightnessSelector from '../components/SaturationLightnessSelector'

const ColorSelectorContainer = (props) => {
    let lineColor = props.settings.lineColor
    let fillColor = props.settings.fillColor
    const handleLineColorChange = ({h = lineColor.h, s = lineColor.s, l = lineColor.l}) => {
        props.updateLineColorSetting(h, s, l)
    }

    const handleFillColorChange = ({h = fillColor.h, s = fillColor.s, l = fillColor.l}) => {
        props.updateFillColorSetting(h, s, l)
    }

    return(
        <div className="color-selector">
            <HueSelector handleChange={handleLineColorChange}/>
            <SaturationLightnessSelector hue={props.settings.lineColor.h} handleChange={handleLineColorChange}/>
            {/* <HueSelector handleChange={handleFillColorChange}/>
            <SaturationLightnessSelector hue={props.settings.fillColor.h} handleChange={handleFillColorChange}/> */}
        </div>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      updateLineColorSetting: (h, s , l) => dispatch({ type: 'UPDATE_LINE_COLOR', payload: {h:h, s:s, l:l} }),
      updateFillColorSetting: (h, s , l) => dispatch({ type: 'UPDATE_FILL_COLOR', payload: {h:h, s:s, l:l} })

    }
  }

export default connect(null, mapDispatchToProps)(ColorSelectorContainer)
