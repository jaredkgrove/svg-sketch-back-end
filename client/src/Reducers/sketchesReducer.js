// add the catsReducer 
const sketchReducer = (state = [], action) => {
    switch(action.type) {
      case 'FETCH_SKETCHES':
        return action.payload
      case 'CREATE_SKETCH':
        return [...state, {id: action.payload.id, name: action.payload.name, url:`/sketches/${action.payload.id}`}]
      default:
        return state;
    }
  }
   
  export default sketchReducer;