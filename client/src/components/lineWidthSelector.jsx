import React from 'react';
import { connect } from 'react-redux';

 const LIneWidthSlector = (props) => {

        const handleClick = (e) => {
            props.handleUpdate(e.target.value)
        }

        const isCurrentSetting = (value) => (value === props.lineWidth)

        return (
            <>
                <button className={isCurrentSetting('2') ? 'selected' : null} onClick={handleClick} value={2} style={{height:'50%', width: '18%', margin:'1%'}}> 2 </button>
                <button className={isCurrentSetting('4') ? 'selected' : null} onClick={handleClick} value={4} style={{height:'50%', width: '18%', margin:'1%'}}> 4 </button>
                <button className={isCurrentSetting('6') ? 'selected' : null} onClick={handleClick} value={6} style={{height:'50%', width: '18%', margin:'1%'}}> 6 </button>
                <button className={isCurrentSetting('8') ? 'selected' : null} onClick={handleClick} value={8} style={{height:'50%', width: '18%', margin:'1%'}}> 8 </button>
                <button className={isCurrentSetting('10') ? 'selected' : null} onClick={handleClick} value={10} style={{height:'50%', width: '18%', margin:'1%'}}> 10 </button>
            </>
        )
 }

 export default LIneWidthSlector