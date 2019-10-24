import React from 'react';

 const LineTypeSelector = (props) => {

    const handleClick = (e) => {
        props.handleUpdate(e.target.value)
    }

    return (
        <>
            <button onClick={handleClick} value='Circle' style={{backgroundColor: 'grey', height:'50%', width: '18%', margin:'1%'}}> O </button>
            <button onClick={handleClick} value='Line' style={{backgroundColor: 'grey', height:'50%', width: '18%', margin:'1%'}}> l </button>
            <button onClick={handleClick} value='Rectangle' style={{backgroundColor: 'grey', height:'50%', width: '18%', margin:'1%'}}> R </button>
            <button onClick={handleClick} value='Polyline' style={{backgroundColor: 'grey', height:'50%', width: '18%', margin:'1%'}}> R </button>
        </>
    )
 }

 export default LineTypeSelector