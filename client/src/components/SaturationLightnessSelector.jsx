import React from 'react';

 class SaturationLightnessSelector extends React.Component {
     constructor(){
         super()
        this.state = {
            selectorPosition: {x:0, y:0},
            saturation: 0,
            lightness: 0
        }
        this.canvasClientRect = ''
        this.canvas = React.createRef();
        
     }
    
       
    handleOnMouseDown = (e) => {
        this.canvasClientRect = this.canvas.current.getBoundingClientRect() 
        let y = e.clientY - this.canvasClientRect.top - this.canvasClientRect.height
        let x = e.clientX - this.canvasClientRect.left

        this.setState({
            selectorPosition: {x:x ,y:y},
            saturation: this.getSaturation(x, y),
            lightness: this.getLightness(x, y)
        })
    } 

    // var canvas = document.getElementById("primary");
   componentDidMount(){
        this.canvasClientRect = this.canvas.current.getBoundingClientRect() 
        this.fillPrimary()

   }
componentDidUpdate(prevProps, prevState){
    if(this.props.hue !== prevProps.hue){
        this.fillPrimary()
    }
    if(this.state.selectorPosition !== prevState.selectorPosition ){
        this.props.handleChange({s: this.state.saturation, l: this.state.lightness})
    }
}

fillPrimary = () => {
    let context = this.canvas.current.getContext("2d");
    let height = this.canvas.current.height
    let width = this.canvas.current.width
    // this.canvas.current.width = 
    let brightness = context.createLinearGradient(0, 0, 0, height);
    brightness.addColorStop(0, "white");
    brightness.addColorStop(1, "black");

    let saturation = context.createLinearGradient(0, 0, width, 0);
	saturation.addColorStop(0, "hsla(" + this.props.hue + ",100%,50%,0)");
	saturation.addColorStop(1, "hsla(" + this.props.hue + ",100%,50%,1)");

	context.fillStyle = brightness;
	context.fillRect(0, 0, width, height);
  
	context.fillStyle = saturation;
	context.globalCompositeOperation = "multiply";
	context.fillRect(0, 0, width, height);
    context.globalCompositeOperation = "source-over";
    
}




getSaturation = (x, y) => (100*this.hsvSatToHslSat(this.getHSVSat(x), this.getHSVValue(y)))

getLightness = (x, y) => (100*this.hsvVToHslL(this.getHSVSat(x), this.getHSVValue(y)))

getHSVSat = (x) => ((x / this.canvasClientRect.width))

getHSVValue = (y) => ((-y / this.canvasClientRect.height))

hsvSatToHslSat = (sat,val) => ((2-sat)*val < 1 ? sat*val/((2-sat)*val):sat*val/(2-(2-sat)*val))

hsvVToHslL = (sat, val) => ((2-sat)*val/2)

// getSliderPosition = (sat, light) => ((this.canvasClientRect.height * hue)/360)
    
render(){
    return (
        <div   className='sat-light-select' style={{height:'50%', width:'100%'}}>

            <canvas   ref={this.canvas} onMouseDown={this.handleOnMouseDown} width='100%' height='100%' style={{width:'100%', height:'100%', verticalAlign:'top'}}></canvas>
            <div style={{backgroundColor: `hsl(${this.props.hue},${this.state.saturation}%,${this.state.lightness}%)`, width: '10px', height: '10px', border:'2px solid white', borderRadius: '7px', position:'relative', top:`${this.state.selectorPosition.y-5}px`, left:`${this.state.selectorPosition.x-5}px`}}></div>

        </div>
        
        )
    }

 }

 export default SaturationLightnessSelector