// add the catsReducer 
const sketchReducer = (state = { sketches: [] }, action) => {
    switch(action.type) {
      case 'FETCH_SKETCHES':
        return {
          ...state,
          sketches: action.sketches,
        }
      case 'ADD_SKETCH':
        return {
          ...state,
          sketches: [...state.sketches, action.payload]
        }
      default:
        return state;
    }
  }
   
  export default sketchReducer;