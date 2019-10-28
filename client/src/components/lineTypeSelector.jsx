import React from 'react';

 const LineTypeSelector = (props) => {

    const handleClick = (e) => {
        props.handleUpdate(e.target.value)
    }

    const isCurrentSetting = (value) => (value === props.lineType)

    return (
        <>
            <button className={isCurrentSetting('Circle') ? 'selected' : null} onClick={handleClick} value='Circle' style={{height:'50%', width: '18%', margin:'1%'}}> O </button>
            <button className={isCurrentSetting('Line') ? 'selected' : null} onClick={handleClick} value='Line' style={{height:'50%', width: '18%', margin:'1%'}}> l </button>
            <button className={isCurrentSetting('Rectangle') ? 'selected' : null} onClick={handleClick} value='Rectangle' style={{height:'50%', width: '18%', margin:'1%'}}> R </button>
            <button className={isCurrentSetting('Polyline') ? 'selected' : null} onClick={handleClick} value='Polyline' style={{height:'50%', width: '18%', margin:'1%'}}> R </button>
        </>
    )
 }

 export default LineTypeSelector