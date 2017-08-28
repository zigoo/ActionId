import toolsList from './toolsList.js'

const changeToolType = 'changeToolType';

const initialState = {
  toolsList,
};


export default function tools (state = initialState , action) {
  switch (action.type) {
    case changeToolType:
      return {
           ...state,
           toolsList:{
             ...toolsList,
               [`${action.toolId}`]: {
                 id: action.toolId, 
                 type: action.text,
               }
          }
      }
    default: 
      return state;
    }
}