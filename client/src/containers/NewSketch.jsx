import React from 'react';
import {fetchSketch} from '../actions/fetchSketch'
import {createSketch} from '../actions/createSketch'
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import SketchContainer from './SketchContainer';


class NewSketch extends React.Component {
    // componentDidMount(){
    //     if (this.props.match.params.sketchID){
    //         this.props.fetchSketch(this.props.match.params.sketchID)
    //     }
    // }
    state = {
        name: ''
    }

    // componentDidUpdate(prevProps){
    //     if (this.props.id !== prevProps.id) {
    //         this.setState({
    //             elements: this.props.elements
    //         })
    //         this.props.history.push(`/sketches/${this.props.id}`)
    //       }
    // }

    
    componentDidUpdate(){
        if (this.props.id) {
            this.props.history.push(`/sketches/${this.props.id}`)
        }
    }

    // handleCreateSketch = (state) => {
    //     this.props.createSketch(state)
    // }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createSketch(this.state)
        // if(this.props.currentSketch){
        //     this.props.handleSave(this.props.currentSketch.id, this.state)
        // }else{
        //     this.props.handleSave(this.state)
        // }
        
        // this.setState({
        //     elements:[]
        // })

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        // const isLoading = () => {
        //     if(this.props.loading) {
        //         return <h1>LOADING</h1>
        //     }
        // }

        // const isSaving = () => {
        //     if(this.props.saving) {
        //         return <h1>SAVING</h1>
        //     }
        // }
        return(
            <>
                {/* {isLoading()}
                {isSaving()} */}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    <input type="submit" value='SAVE'/>
                </form>
                
                {/* <SketchContainer />  */}
                {/* {handleSave={this.handleCreateSketch}} */}
            </>
        )
    }
}


const mapStateToProps = state => {
    return {
        id: state.currentSketch.id
    }
  }

export default connect(mapStateToProps, {fetchSketch, createSketch})(NewSketch)


