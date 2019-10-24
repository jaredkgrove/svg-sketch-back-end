export const updateSketch = (id, data) => {

    return (dispatch) => {
        dispatch({ type: 'SAVING_SKETCH' });
        fetch(`http://localhost:3001/api/v1/sketches/${id}`,{
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(sketch => {
            console.log(sketch)
            dispatch(
            {
                type: 'UPDATE_ACTIVE_SKETCH', 
                payload: {
                    id: sketch['data']['id'], 
                    name: sketch['data']['attributes']['name'], 
                    elements: sketch['included'].map((e) => ({type: e.attributes.elementable_type, properties: e.attributes.elementable}))
                }
            })}
        )
    
    }
}

