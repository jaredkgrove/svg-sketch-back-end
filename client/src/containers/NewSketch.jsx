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
    // state = {
    //     name: ''
    // }

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

    handleCreateSketch = (state) => {
        this.props.createSketch(state)
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

                <SketchContainer history={this.props.history} handleSave={this.handleCreateSketch}/>
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


