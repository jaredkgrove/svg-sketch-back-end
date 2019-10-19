import React from 'react';
import {fetchSketch} from '../actions/fetchSketch'
import {updateSketch} from '../actions/updateSketch'
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import SketchContainer from './SketchContainer';


class EditSketch extends React.Component {
    componentDidMount(){
        if (this.props.match.params.sketchID){
            this.props.fetchSketch(this.props.match.params.sketchID)
        }
    }
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

    handleUpdateSketch = (id, state) => {
        this.props.updateSketch(id, state)
    }

    render(){
        const isLoading = () => {
            if(this.props.loading) {
                return <h1>LOADING</h1>
            }
        }

        const isSaving = () => {
            if(this.props.saving) {
                return <h1>SAVING</h1>
            }
        }
        return(
            <>
                {isLoading()}
                {isSaving()}

                <SketchContainer currentSketch={this.props.currentSketch} handleSave={this.handleUpdateSketch}/>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentSketch: state.currentSketch
    }
  }

export default connect(mapStateToProps, {fetchSketch, updateSketch})(EditSketch)


