import React from 'react';
import { connect } from 'react-redux';

 const LIneWidthSlector = (props) => {

        const handleClick = (e) => {
            props.handleUpdate(e.target.value)
        }

        return (
            <>
                <button onClick={handleClick} value={2} style={{backgroundColor: 'grey', height:'50%', width: '18%', margin:'1%'}}> 2 </button>
                <button onClick={handleClick} value={4} style={{backgroundColor: 'grey', height:'50%', width: '18%', margin:'1%'}}> 4 </button>
                <button onClick={handleClick} value={6} style={{backgroundColor: 'grey', height:'50%', width: '18%', margin:'1%'}}> 6 </button>
                <button onClick={handleClick} value={8} style={{backgroundColor: 'grey', height:'50%', width: '18%', margin:'1%'}}> 8 </button>
                <button onClick={handleClick} value={10} style={{backgroundColor: 'grey', height:'50%', width: '18%', margin:'1%'}}> 10 </button>
            </>
        )

 }

 export default LIneWidthSlector