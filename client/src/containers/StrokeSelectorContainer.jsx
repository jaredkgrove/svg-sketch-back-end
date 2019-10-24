import React from 'react';
import { connect } from 'react-redux';
import LineWidthSelector from '../components/lineWidthSelector'


const StrokeSelectorContainer = (props) => {

    const handleLineWidthUpdate = (width) => {
        props.updateLineWidthSetting(width)
    }

    // const handleFillColorChange = ({h = fillColor.h, s = fillColor.s, l = fillColor.l}) => {
    //     props.updateFillColorSetting(h, s, l)
    // }

    return(
        <div className="stroke-selectors">

            <div className='line-width'>
                <h3>Line Width</h3>
                <LineWidthSelector handleUpdate={handleLineWidthUpdate}/>
            </div>

            <div className="line-type">
                <h3>Line Type</h3>


            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      updateLineWidthSetting: (width) => dispatch({ type: 'UPDATE_LINE_WIDTH', payload: width }),
    //   updateFillColorSetting: (h, s , l) => dispatch({ type: 'UPDATE_FILL_COLOR', payload: {h:h, s:s, l:l} })

    }
  }

export default connect(null, mapDispatchToProps)(StrokeSelectorContainer)
