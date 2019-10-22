import React from 'react';
import {fetchSketch} from '../actions/fetchSketch'
import {updateSketch} from '../actions/updateSketch'
import {clearCurrentSketch} from '../actions/clearCurrentSketch'
import { connect } from 'react-redux';
import SketchContainer from './SketchContainer';


class EditView extends React.Component {

    state = {
        name: ''
    }


    componentDidMount(){
        if (this.props.match.params.sketchID !== this.props.currentSketch.id){
            this.props.fetchSketch(this.props.match.params.sketchID)
        }
    }

    componentWillUnmount(){
        this.props.clearCurrentSketch()
    }

    handleUpdateSketch = (id, state) => {
        this.props.updateSketch(id, state)
    }

    render(){
        const loadSaveStatus = () => {
            if(this.props.loading) {
                return <h1>LOADING</h1>
            }else if(this.props.saving) {
                return <h1>SAVING</h1>
            }
        }

        return(
            <>
                {loadSaveStatus()}
                <SketchContainer currentSketch={this.props.currentSketch} handleSave={this.handleUpdateSketch}/>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        saving: state.saving,
        currentSketch: state.currentSketch
    }
  }

export default connect(mapStateToProps, {fetchSketch, updateSketch, clearCurrentSketch})(EditView)


