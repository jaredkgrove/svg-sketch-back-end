export const createSketch = (data) => {

    return (dispatch) => {
        dispatch({ type: 'SAVING_SKETCH' });
        fetch(`http://localhost:3001/api/v1/sketches`,{
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then((sketch) => { 
            dispatch(
            {
                type: 'CREATE_SKETCH', 
                payload: {
                    id: sketch['data']['id'], 
                    name: sketch['data']['attributes']['name'], 
                    elements: sketch['included'].map((e) => ({type: e.attributes.elementable_type, properties: e.attributes.elementable}))
                }
            })
        })
    
            // let data = {name:"my_sketch", elements_attributes:{type: 'circle', cx:5}}
    }
}
// 
