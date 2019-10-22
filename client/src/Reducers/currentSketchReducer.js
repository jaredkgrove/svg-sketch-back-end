// add the catsReducer 
const sketchReducer = (state = {id:'', name: '', elements: [], loading: false, saving: false}, action) => {
    switch(action.type) {
      case 'LOADING_SKETCH':
          return {...state, loading: true}
      case 'SAVING_SKETCH':
          return {...state, saving: true}

      case 'CREATE_SKETCH':
        return {...state, id: action.payload.id, name: action.payload.name, elements: action.payload.elements, loading: false, saving: false}
      
      case 'FETCH_ACTIVE_SKETCH':
      case 'CLEAR_ACTIVE_SKETCH':
      case 'UPDATE_ACTIVE_SKETCH':
          return {...state, id: action.payload.id, name: action.payload.name, elements: action.payload.elements, loading: false, saving: false}
  
        // case 'ADD_ELEMENT':
        //   return {...state, currentSketch:{...state.currentSketch, elements:[...state.currentSketch.elements, action.payload.element]}, loading: false, saving: false}
    
    
      default:
        return state;
    }
  }
   
  export default sketchReducer;