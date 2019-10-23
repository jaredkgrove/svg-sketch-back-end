import React from 'react';

 class SaturationLightnessSelector extends React.Component {
     constructor(){
         super()
        this.state = {
            selectorPosition: 0
        }
        this.satLightClientRect = ''
        this.satLightDiv = React.createRef();
     }
    
       
    handleOnMouseDown = (e) => {
        this.satLightClientRect = this.satLightDiv.current.getBoundingClientRect() 
        let y1 = e.clientY - this.satLightDiv.top
        this.setState({
            sliderPosition: y1
        })
    } 
    // getHue = () => {
    //     let hue = 360 * (this.state.sliderPosition / this.hueBarClientRect.height)
    //     return hue
    // }

    // var canvas = document.getElementById("primary");
// var context = canvas.getContext("2d");

// canvas.width = 256;
// canvas.height = 256;

// fillPrimary = (hue) => {
//     var brightness = context.createLinearGradient(0, 0, 0, 256);
//   brightness.addColorStop(0, "white");
//   brightness.addColorStop(1, "black");

//   var saturation = context.createLinearGradient(0, 0, 256, 0);
// 	saturation.addColorStop(0, "hsla(" + hue + ",100%,50%,0)");
// 	saturation.addColorStop(1, "hsla(" + hue + ",100%,50%,1)");

// 	context.fillStyle = brightness;
// 	context.fillRect(0, 0, 256, 256);
  
// 	context.fillStyle = saturation;
// 	context.globalCompositeOperation = "multiply";
// 	context.fillRect(0, 0, 256, 256);
// 	context.globalCompositeOperation = "source-over";
// }

// fillPrimary(0);

// $("#secondary").on("input", function() {
// 	fillPrimary(this.value);
// });
    
render(){
    return (
        <div ref={this.satLightDiv} onMouseDown={this.handleOnMouseDown} className='sat-light-select' style={{background: 'linear-gradient(to bottom left,hsl(0,100%,100%,0),hsl(0,100%,100%,1)),  linear-gradient(to top left,hsl(0,100%,50%,1),hsl(0,100%,50%,1))'}}>
                <div style={{backgroundColor: 'black', width: '30px', height: '30px', borderRadius: '15px', position:'relative', top:`${this.state.sliderPosition-15}px`}}></div>
            </div>
        )
    }

 }

 export default SaturationLightnessSelector