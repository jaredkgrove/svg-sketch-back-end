export const addSketch = (data) => {

    return (dispatch) => {
        fetch(`http://localhost:3001/api/v1/sketches`,{
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({sketch: {elements_attributes: data}})
        })
        // .then(resp => resp.json())
        // .then(sketch => dispatch({type: 'ADD_SKETCH', payload: sketch}))
    }
}
