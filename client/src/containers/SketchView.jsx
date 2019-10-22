import React from 'react';
import {fetchSketch} from '../actions/fetchSketch'
import {clearCurrentSketch} from '../actions/clearCurrentSketch'
import { connect } from 'react-redux';
import SketchPreviewContainer from './SketchPreviewContainer';


class SketchView extends React.Component {

    // state = {
    //     name: ''
    // }

    componentDidMount(){
        if (this.props.match.params.sketchID !== this.props.currentSketch.id){
            this.props.fetchSketch(this.props.match.params.sketchID)
        }
    }

    componentWillUnmount(){
        this.props.clearCurrentSketch()
    }

    render(){
        return(
            <>
            {console.log('hey')}
            {console.log(this.props.currentSketch)}
                <SketchPreviewContainer elements={this.props.currentSketch.elements} handleSave={this.handleUpdateSketch}/>
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


