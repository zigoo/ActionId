import toolsList from './toolsList.js'

const CHANGE_TOOL = 'changeToolType';
const CHANGE_MANF = 'changeManufacturer';
const ADD_TOOL = 'add_tool';

const initialState = {
  toolsList,
};


export default function tools (state = initialState , action) {
  switch (action.type) {
    case CHANGE_TOOL:
      return {
        toolsList: {
          ...state.toolsList,
            [`${action.toolId}`]: { ...state.toolsList[`${action.toolId}`], type: action.text }
        }
      }
    case CHANGE_MANF: 
      return {
        toolsList: {
          ...state.toolsList,
            [`${action.toolId}`]: { ...state.toolsList[`${action.toolId}`], manufacturer: action.text }
        }
    }
    case ADD_TOOL:
      return {
        toolsList:{
          ...state.toolsList,
            [action.newToolId]: {
               id: action.newToolId,
               type: action.newType,
               manufacturer: action.newManufacturer,
               serialNum: action.newSerialNumber
            }   
        }
      }
    default: 
      return state;
    }
}