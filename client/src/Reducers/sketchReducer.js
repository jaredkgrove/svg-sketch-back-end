// add the catsReducer 
const sketchReducer = (state = {sketches: [], currentSketch: {id:'', name: '', elements: []}, loading: false, saving: false}, action) => {
    switch(action.type) {
      case 'LOADING_SKETCH':
          return {
            ...state, loading: true
          }
      case 'SAVING_SKETCH':
          return {
            ...state, saving: true
          }
      case 'FETCH_SKETCHES':
        return{
          ...state, sketches: action.payload
        }
      case 'FETCH_SKETCH':
        return {...state, currentSketch: {id: action.payload.id, name: action.payload.name, elements: action.payload.elements}, loading: false, saving: false}

      case 'CREATE_SKETCH':
        return {...state, currentSketch: {id: action.payload.id, name: action.payload.name, elements: action.payload.elements}, loading: false, saving: false}
      
        // case 'ADD_ELEMENT':
        //   return {...state, currentSketch:{...state.currentSketch, elements:[...state.currentSketch.elements, action.payload.element]}, loading: false, saving: false}
    
        case 'UPDATE_SKETCH':
          return {...state, currentSketch: {id: action.payload.id, name: action.payload.name, elements: action.payload.elements}, loading: false, saving: false}
    
      default:
        return state;
    }
  }
   
  export default sketchReducer;