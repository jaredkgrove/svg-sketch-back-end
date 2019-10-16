export function fetchSketch(id){
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/sketches/${id}`)
        .then(resp => resp.json())
        .then(sketches => dispatch({type: 'FETCH_SKETCHES', payload: sketches}))
    }
}
