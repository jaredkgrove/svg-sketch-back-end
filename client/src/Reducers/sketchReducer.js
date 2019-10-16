// add the catsReducer 
const sketchReducer = (state = { elements: [] }, action) => {
    switch(action.type) {
      case 'FETCH_SKETCH':
        return {
          ...state,
          sketches: action.sketches,
        }
      // case 'ADD_ELEMENT':
      //   return {
      //     ...state,
      //     elements: action.elements,
      //   }
      default:
        return state;
    }
  }
   
  export default sketchReducer;