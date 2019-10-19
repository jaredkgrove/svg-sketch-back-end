import React from 'react';
import {fetchSketch} from '../actions/fetchSketch'
import { connect } from 'react-redux';
import ElementsContainer from './ElementsContainer'
import { Route } from 'react-router-dom';
// import { useHistory } from "react-router-dom";

class SketchContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            name: '',
            elements: [],
            tempElements: [],
            isDrawing: false
        }
        this.sketchClientRect = ''
        this.sketchArea = React.createRef();
        this.startPoint = []
    }

    // componentDidMount(){
    //     if (this.props.match.params.sketchID){
    //         this.props.fetchSketch(this.props.match.params.sketchID)
    //     }
    // }

    componentDidUpdate(prevProps){
        if(this.props.currentSketch && this.props.currentSketch !== prevProps.currentSketch){
            this.setState({
                elements: this.props.currentSketch.elements
            })
        }
    }

    handleOnMouseDown = (e) => {
        this.sketchClientRect = this.sketchArea.current.getBoundingClientRect() 
        let x1 = e.clientX - this.sketchClientRect.left
        let y1 = e.clientY - this.sketchClientRect.top
        this.setState({
            isDrawing: true
        })
        this.startPoint.push(x1, y1)
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
            if(this.state.tempElements[0]){
                this.setState({
                    isDrawing: false,
                    elements: [...this.state.elements, this.state.tempElements[0]],//{`M ${this.props.x1} ${this.props.y1} L ${this.props.x2} ${this.props.y2}`}
                    tempElements: []
                }) 
            }
            this.startPoint = []
        }

    } 

    drawCircle = (x2, y2, ratio) => {
        let R = Math.pow(Math.pow(x2 - this.startPoint[0], 2) + Math.pow((y2 - this.startPoint[1]), 2), 0.5)*ratio
        this.setState({
            tempElements: [{type: 'Circle', properties: {cx:(this.startPoint[0]*ratio), cy:this.startPoint[1]*ratio, r:R, stroke:"red", fill:"blue", stroke_width:"5"}}]
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if(this.props.currentSketch){
            this.props.handleSave(this.props.currentSketch.id, this.state)
        }else{
            this.props.handleSave(this.state)
        }
        
        this.setState({
            elements:[]
        })

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    <input type="submit" value='SAVE'/>
                </form>
                <svg ref={this.sketchArea} viewBox = {`0 0 1000 1000`} className={"sketch-board"} onMouseDown={this.handleOnMouseDown} onMouseUp={this.handleOnMouseUp} onMouseMove={this.handleOnMouseMove}>
                    <ElementsContainer elements={this.state.elements} tempElements={this.state.tempElements}/>
                </svg>
                
            </>
        )
    }
}



export default SketchContainer


// const mapStateToProps = state => {
//     console.log(state.elements)
//     return {
//         elements: state.elements
//     }
// }


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
