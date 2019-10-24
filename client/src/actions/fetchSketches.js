export function fetchSketches(){
    return (dispatch) => {
        // dispatch({ type: 'LOADING_SKETCH' });
        fetch(`http://localhost:3000/api/v1/sketches`)
        .then((resp) => resp.json())
        .then((sketches) => {
            console.log(sketches)
            dispatch({type: 'FETCH_SKETCHES', 
            payload: sketches['data'].map(sketch => ({id: sketch['id'], name: sketch['attributes']['name'], url: sketch['links']['sketch_url']}))
            })})
    }
}
