import workersList from './workersList.js'

const axiosToRedux = 'axiosToRedux';
const DELETE_TOOL = 'DELETE_TOOL';

const initialState = {
  workersList,
  repos:[],
};


export default function workers (state = initialState , action) {
  switch (action.type) {
    case axiosToRedux:
      return {
         ...state,
         repos: action.reposList
      }
    case DELETE_TOOL:
      console.log('xxx',state.workersList)
      return {
        ...state,    
           workersList: {
             ...state.workersList,
                 [action.worker.id] :{
                    ...state.workersList[action.worker.id],
                        tools: state.workersList[action.worker.id].tools.filter( (el,i) =>  state.workersList[action.worker.id].tools[i] !== action.toolId )
                }
         }
      }
    default: 
      return state;
    }
}
      