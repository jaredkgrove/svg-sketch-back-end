export const addSketch = (data) => {
    console.log(data)
    return (dispatch) => {
        console.log(data)
        // fetch(`http://localhost:3001/api/v1/sketches`,{
        //     headers:{
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     },
        //     method: 'POST',
        //     body: JSON.stringify(data)
        // })
        // .then(resp => resp.json())
        // .then(sketch => dispatch({type: 'ADD_SKETCH', payload: sketch}))
    }
}
