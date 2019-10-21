export const clearCurrentSketch = (id, data) => {

    return (dispatch) => {
            dispatch(
            {
                type: 'CLEAR_ACTIVE_SKETCH', 
                payload: {
                    id: '', 
                    name: '', 
                    elements: []
                }
            })
    }

}