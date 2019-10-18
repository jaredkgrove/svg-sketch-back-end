export const addSketch = (data) => {

    return (dispatch) => {

        fetch(`http://localhost:3001/api/v1/sketches`,{
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        // .then(resp => resp.json())
        // .then(sketch => dispatch({type: 'ADD_SKETCH', payload: sketch}))
        // let data = {name:"my_sketch", elements_attributes:{type: 'circle', cx:5}}
    }
}
// 
