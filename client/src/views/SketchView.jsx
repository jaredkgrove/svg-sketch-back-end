import React from 'react';
import {fetchSketch} from '../actions/fetchSketch'
import {clearCurrentSketch} from '../actions/clearCurrentSketch'
import { connect } from 'react-redux';
import SketchPreviewContainer from '../containers/SketchPreviewContainer';
import { Link } from 'react-router-dom';

class SketchView extends React.Component {

    componentDidMount(){
        if (this.props.match.params.sketchID !== this.props.currentSketch.id){
            this.props.fetchSketch(this.props.match.params.sketchID)
        }
    }

    componentWillUnmount(){
        // this.props.clearCurrentSketch()
    }

    render(){
        return(
            <>
                <h1>{this.props.currentSketch.name}</h1>
                <h3>Created: {this.props.currentSketch.created_at}</h3>
                <h3>Updated: {this.props.currentSketch.updated_at}</h3>
                <SketchPreviewContainer elements={this.props.currentSketch.elements} handleSave={this.handleUpdateSketch}/>
                <Link to={`/sketches/${this.props.currentSketch.id}/edit`}>Edit</Link>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentSketch: state.currentSketch
    }
  }

export default connect(mapStateToProps, {fetchSketch, clearCurrentSketch})(SketchView)


