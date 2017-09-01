import workersList from './workersList.js'

const AXIOSTOREDUX = 'axiosToRedux';
const DELETE_TOOL = 'delete_tool';
const ADD_TOOL = 'add_tool';


const initialState = {
  workersList,
  repos:[],
};


export default function workers (state = initialState , action) {
  switch (action.type) {
    case AXIOSTOREDUX:
      return {
         ...state,
         repos: action.reposList
      }
    case DELETE_TOOL:
      return {
        ...state,    
          workersList: {
           ...state.workersList,
             [action.worker.id] :{
                ...state.workersList[action.worker.id],
                tools: state.workersList[action.worker.id].tools.filter((el,i) =>  state.workersList[action.worker.id].tools[i] !== action.toolId )
             }
          }
      }
    case ADD_TOOL:
      return {
       ...state,    
          workersList: {
           ...state.workersList,
             [action.worker.id] :{
                ...state.workersList[action.worker.id],
                tools: [...state.workersList[action.worker.id].tools, action.newToolId ]
            }
          }
      }
    default: 
      return state;
    }
}
      