// add the catsReducer 
const sketchSettingsReducer = (state = {lineColor:{h: 0, s: 100, l:50}, lineWidth: '5'}, action) => {
    switch(action.type) {
        // UPDATE_LINE_COLOR_SETTING
      case 'UPDATE_LINE_HUE':
        return {...state, lineColor: {...state.lineColor, h: action.payload}}
    case 'UPDATE_LINE_SL':
        return {...state, lineColor: {...state.lineColor, s: action.payload.s, l: action.payload.l}}
    //   case 'SAVING_SKETCH':
    //       return {...state, saving: true}
    //   case 'FETCH_SKETCHES':
    //     return{...state, sketches: action.payload}
    //   case 'CREATE_SKETCH':
    //     return {...state, sketches: [...state.sketches, {id: action.payload.id, name: action.payload.name, url:`/sketches/${action.payload.id}`}], currentSketch: {id: action.payload.id, name: action.payload.name, elements: action.payload.elements}, loading: false, saving: false}
      
    //   case 'FETCH_ACTIVE_SKETCH':
    //   case 'CLEAR_ACTIVE_SKETCH':
    //   case 'UPDATE_ACTIVE_SKETCH':
    //       return {...state, currentSketch: {id: action.payload.id, name: action.payload.name, elements: action.payload.elements}, loading: false, saving: false}
  
    //     // case 'ADD_ELEMENT':
    //     //   return {...state, currentSketch:{...state.currentSketch, elements:[...state.currentSketch.elements, action.payload.element]}, loading: false, saving: false}
    
    
      default:
        return state;
    }
  }
   
  export default sketchSettingsReducer;