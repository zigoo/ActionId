import toolsList from './toolsList.js'

const CHANGE_TOOL = 'changeToolType';
const CHANGE_MANF = 'changeManufacturer';

const initialState = {
  toolsList,
};


export default function tools (state = initialState , action) {
  switch (action.type) {
    case CHANGE_TOOL:
      return {
        toolsList: {
          ...state.toolsList,
           [`${action.toolId}`]: { 
             ...state.toolsList[`${action.toolId}`],
            type: action.text }
        }
      }
    case CHANGE_MANF: 
      return {
        toolsList: {
          ...state.toolsList,
           [`${action.toolId}`]: { 
             ...state.toolsList[`${action.toolId}`],
            manufacturer: action.text }
        }
    }
    default: 
      return state;
    }
}