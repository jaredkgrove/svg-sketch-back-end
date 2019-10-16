import React from 'react';
// import Path from './path'
import {fetchSketch} from '../actions/fetchSketch'
import {addSketch} from '../actions/addSketch'
import { connect } from 'react-redux';

class SketchContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            elements: [],
            tempElements: [],
            isDrawing: false
        }
        this.sketchClientRect = ''
        this.sketchArea = React.createRef();
        this.newLine = []
    }

    handleOnMouseDown = (e) => {
        this.sketchClientRect = this.sketchArea.current.getBoundingClientRect() 
        let x1 = e.clientX - this.sketchClientRect.left
        let y1 = e.clientY - this.sketchClientRect.top
        this.setState({
            isDrawing: true
        })
        this.newLine.push(x1, y1)
    } 

    handleOnMouseMove = (e) => {
        if(this.state.isDrawing){
            let x2 = e.clientX - this.sketchClientRect.left
            let y2 = e.clientY - this.sketchClientRect.top
            let ratio = 1000/this.sketchClientRect.width
            this.drawCircle(x2, y2, ratio)
        }
    }

    handleOnMouseUp = (e) => {
        if(this.state.isDrawing){
            let x2 = e.clientX - this.sketchClientRect.left
            let y2 = e.clientY - this.sketchClientRect.top
            
            if(this.state.tempElements[0]){
                this.setState({
                    isDrawing: false,
                    elements: [...this.state.elements, this.state.tempElements[0]],//{`M ${this.props.x1} ${this.props.y1} L ${this.props.x2} ${this.props.y2}`}
                    tempElements: []
                }) 
            }
            this.newLine = []
        }

    } 

    drawCircle = (x2, y2, ratio) => {
        let R = Math.pow(Math.pow(x2 - this.newLine[0], 2) + Math.pow((y2 - this.newLine[1]), 2), 0.5)*ratio
        this.setState({
            tempElements: [{cx:(this.newLine[0]*ratio), cy:this.newLine[1]*ratio, r:R, stroke:"red", fill:"blue", strokeWidth:"5"}]//[[`M ${(this.newLine[0]*ratio - R)} ${this.newLine[1]*ratio} a ${R} ${R},0 1, 0 ${2*R},0 a ${R} ${R},0 1, 0 ${-2*R},0`]] //`M ${this.newLine[0]} ${this.newLine[1]} L ${this.newLine[2]} ${this.newLine[3]}`]
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addSketch(this.state.elements)
    }

    render(){
        console.log(this.state.elements)
        return(
            <>
                <svg ref={this.sketchArea} viewBox = {`0 0 1000 1000`} className={"sketch-board"} onMouseDown={this.handleOnMouseDown} onMouseUp={this.handleOnMouseUp} onMouseMove={this.handleOnMouseMove}>
                    {this.state.tempElements.map(function(elem){
                       return   <circle cx={elem.cx} cy={elem.cy} r={elem.r} stroke={elem.stroke} fill={elem.fill} stroke-width={elem.strokeWidth}/>
                    })}
                    {this.state.elements.map(function(elem){
                        return   <circle cx={elem.cx} cy={elem.cy} r={elem.r} stroke={elem.stroke} fill={elem.fill} stroke-width={elem.strokeWidth}/>
                    })}
                </svg>
                <form onSubmit={this.handleSubmit}>
                    <input type="submit" value='SAVE'/>
                </form>
            </>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         elements: state.elements
//     }
// }

export default connect(null, {fetchSketch, addSketch})(SketchContainer)

    // constructor(){
    //     super()
    //     this.state = {
    //         isDrawing: false,
    //         paths: [],
    //         tempPaths: [],
    //         width: null,
    //         height: null
    //     }
    //     this.newLine = []
    //     this.tempLine = null
    //     this.sketchArea = React.createRef();
    // }
    // componentDidMount(){
    //     this.props.fetchSketch(1)
    //   }
    // handleOnMouseDown = (e) => {
    //     // alert(this.refs.sketchArea)
    //     let sb = this.sketchArea.current
    //     let rect = sb.getBoundingClientRect() 
    //     let x1 = e.clientX - rect.left
    //     let y1 = e.clientY - rect.top
    //     this.setState({
    //         isDrawing: true
    //     })
    //     this.newLine.push(x1, y1)
    // } 

    // handleOnMouseUp = (e) => {
    //     if(this.state.isDrawing){
    //         let sb = this.sketchArea.current
    //         let rect = sb.getBoundingClientRect() 
    //         let x2 = e.clientX 
    //         let y2 = e.clientY - rect.top
    //         let finalPath 
    
    //         this.newLine.push(x2, y2)
    //         if(this.state.tempPaths.length){
    //             finalPath = this.state.tempPaths[0]
    //         }else{
    //             finalPath = [...this.state.paths, `M ${this.newLine[0]} ${this.newLine[1]} L ${this.newLine[2]} ${this.newLine[3]}`]
    //         }
    //         this.setState({
    //             isDrawing: false,
    //             paths: [...this.state.paths, finalPath],//{`M ${this.props.x1} ${this.props.y1} L ${this.props.x2} ${this.props.y2}`}
    //             tempPaths: []
    //         }) 
    //         this.newLine = []
    //         this.tempLine = null
    //     }

    // } 

    // handleOnMouseMove = (e) => {
    //     if(this.state.isDrawing){
    //         let sb = this.sketchArea.current
    //         let rect = sb.getBoundingClientRect() 
    //         let x2 = e.clientX - rect.left
    //         let y2 = e.clientY - rect.top
    //         let ratio = 1000/rect.width
    //         this.drawCircle(x2, y2, ratio)
    //     }
    // }

    // drawCircle = (x2, y2, ratio) => {

    //     let R = Math.pow(Math.pow(x2 - this.newLine[0], 2) + Math.pow((y2 - this.newLine[1]), 2), 0.5)*ratio
    //     this.setState({
    //         tempPaths: [[`M ${(this.newLine[0]*ratio - R)} ${this.newLine[1]*ratio} a ${R} ${R},0 1, 0 ${2*R},0 a ${R} ${R},0 1, 0 ${-2*R},0`]] //`M ${this.newLine[0]} ${this.newLine[1]} L ${this.newLine[2]} ${this.newLine[3]}`]
    //     })
    // }

    // drawLine = (x2, y2) => {
    //     this.setState({
    //         tempPaths: [[`M ${this.newLine[0]} ${this.newLine[1]} L ${x2} ${y2}`]] //`M ${this.newLine[0]} ${this.newLine[1]} L ${this.newLine[2]} ${this.newLine[3]}`]
    //     })
    // }

    // freeDraw = (x2, y2) => {
    //     this.newLine.push(x2, y2)

    //     this.setState({
    //         paths: [...this.state.paths, `M ${this.newLine[0]} ${this.newLine[1]} L ${this.newLine[2]} ${this.newLine[3]}`]
    //     })
    //     this.newLine = [x2, y2]
    //     this.tempLine = null

    // }

    // handleResize = () => {
    //     this.setState({
    //       height: this.sketchArea.current.height.animVal.value,
    //       width: this.sketchArea.current.width.animVal.value
    //     })
    // }

    // componentDidMount() {
    //     window.addEventListener('resize', this.handleResize)
    // }
    // handleOnMouseMove = (e) => {
    //     if(this.state.isDrawing){
    //         let sb = this.refs.sketchArea
    //         let rect = sb.getBoundingClientRect() 
    //         let x2 = e.clientX 
    //         let y2 = e.clientY - rect.top
    
    //         if(this.tempLine){
    //             sb.removeChild(sb.lastChild)
    //         }
    
    //         this.newLine.push(x2, y2)
    
    //         this.setState({
    //             lines: [...this.state.lines, this.newLine]
    //         })
    //         this.newLine = [x2, y2]
    //         this.tempLine = null
    //     }
    // } 
