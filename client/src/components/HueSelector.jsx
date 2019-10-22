import React from 'react';

 class HueSelector extends React.Component {
     constructor(){
         super()
        this.state = {
            sliderPosition: 0
        }
        this.hueBarClientRect = ''
        this.hueBar = React.createRef();
     }
    
       
    handleOnMouseDown = (e) => {
        this.hueBarClientRect = this.hueBar.current.getBoundingClientRect() 
        let y1 = e.clientY - this.hueBarClientRect.top
        this.setState({
            sliderPosition: y1
        })
    } 
    getHue = () => {
        let hue = 360 * (this.state.sliderPosition / this.hueBarClientRect.height)
        return hue
    }
    render(){
        return (
            <div ref={this.hueBar} onMouseDown={this.handleOnMouseDown} className='hue-bar' style={{background: 'linear-gradient(to bottom,hsl(0,100%,50%),hsl(60,100%,50%),hsl(120,100%,50%),hsl(180,100%,50%),hsl(240,100%,50%),hsl(300,100%,50%),hsl(360,100%,50%))', margin:'10px'}}>
                    <div style={{backgroundColor: `hsl(${this.getHue()},100%,50%)`, width: '30px', height: '30px', border:'3px solid white', borderRadius: '18px', position:'relative', top:`${this.state.sliderPosition-15}px`, left:'-8px'}}></div>
            </div>
        )
    }

 }

 export default HueSelector