import React from 'react';
import {fetchSketches} from '../actions/fetchSketches'

import { connect } from 'react-redux';
import SketchesList from '../components/SketchesList'
import NewSketchInput from '../components/NewSketchInput';

class HomeView extends React.Component {
    state = {
        name: ''
    }

    componentDidMount(){
        if(!this.props.sketches.length){
            this.props.fetchSketches()
        }
    }

    componentDidUpdate(){
        if (this.props.currentSketch.id) {
            this.props.history.push(`/sketches/${this.props.currentSketch.id}`)
        }
    }

    handleCreateSketch = (state) => {
        this.props.createSketch(state)
    }

    render(){
        return(
            <>
                <NewSketchInput />
                <SketchesList sketches={this.props.sketches}/>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        sketches: state.sketches,
        currentSketch: state.currentSketch
    }
  }

export default connect(mapStateToProps, { fetchSketches })(HomeView)

