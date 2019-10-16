import React from 'react';
import Circle from '../components/Circle'

 const ElementsContainer = (props) => (
    <>
        {props.tempElements.map(function(elem){
            switch(elem.type) {
                case 'circle':
                  return <Circle properties={elem.properties}/>
                default:
                  return <div>Don't know what this is</div>;
              }
        })}
        {props.elements.map(function(elem){
            switch(elem.type) {
                case 'circle':
                  return <Circle properties={elem.properties}/>
                default:
                  return <div>Don't know what this is</div>;
              }        
        })}
    </>
 );

 export default ElementsContainer