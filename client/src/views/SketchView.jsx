import React from 'react';
import {fetchSketch} from '../actions/fetchSketch'
import {fetchSketches} from '../actions/fetchSketches'
import {clearCurrentSketch} from '../actions/clearCurrentSketch'
import { connect } from 'react-redux';
import SketchPreviewContainer from '../containers/SketchPreviewContainer';
import SketchesList from '../components/SketchesList'
import '../styles/sketchView.css'

import { Link } from 'react-router-dom';

class SketchView extends React.Component {

    componentDidMount(){
        if (this.props.match.params.sketchID !== this.props.currentSketch.id){
            this.props.fetchSketch(this.props.match.params.sketchID)
        }
        if(!this.props.sketches.length){
            this.props.fetchSketches()
        }
    }

    componentDidUpdate(prevProps){
        console.log((this.props.match.params.sketchID !== prevProps.match.params.sketchId || this.props.currentSketch.id === ''))
        if (this.props.match.params.sketchID !== prevProps.match.params.sketchID){
            this.props.fetchSketch(this.props.match.params.sketchID)
        }
    }

    render(){
        return(
            <div className='sketch-view'>
                <div className='sketch-list'>
                    <h3>Recent Sketches</h3>
                    <SketchesList sketches={[...this.props.sketches].sort((a, b) => b.lastUpdated.localeCompare(a.lastUpdated))}/>
                </div>
                <div className='sketch-show'>
                    <h1>{this.props.currentSketch.name}</h1>
                    <Link to={`/sketches/${this.props.currentSketch.id}/edit`}>Edit</Link>

                    <h6>Created: {this.props.currentSketch.created}</h6>
                    <h6>Updated: {this.props.currentSketch.lastUpdated}</h6>
                    <SketchPreviewContainer elements={this.props.currentSketch.elements} handleSave={this.handleUpdateSketch}/>
  
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        sketches: state.sketches,
        currentSketch: state.currentSketch
    }
  }

export default connect(mapStateToProps, {fetchSketch, fetchSketches})(SketchView)


