import React from 'react';

 const LineTypeSelector = (props) => {

    const handleClick = (e) => {
        props.handleUpdate(e.target.value)
    }

    const isCurrentSetting = (value) => (value === props.lineType)

    return (
        <>
            <button className={isCurrentSetting('Circle') ? 'selected' : null} onClick={handleClick} value='Circle' style={{height:'50%', margin:'1%'}}> Circle </button>
            <button className={isCurrentSetting('Line') ? 'selected' : null} onClick={handleClick} value='Line' style={{height:'50%', margin:'1%'}}> Line </button>
            <button className={isCurrentSetting('Rectangle') ? 'selected' : null} onClick={handleClick} value='Rectangle' style={{height:'50%', margin:'1%'}}> Rect </button>
            <button className={isCurrentSetting('Polyline') ? 'selected' : null} onClick={handleClick} value='Polyline' style={{height:'50%', margin:'1%'}}> Free </button>
        </>
    )
 }

 export default LineTypeSelector