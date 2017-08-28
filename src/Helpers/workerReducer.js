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
      return {
        ...state,
          ...workersList,
          workerList: state.workersList[action.worker.id].tools.filter( (el,i) =>  {
         
         let x = state.workersList[action.worker.id].tools[i]
         console.log(x !== action.toolId, action.toolId, 'x:',x)
         
         return state.workersList[action.worker.id].tools[i] !== action.toolId 

        })
      }
    default: 
      return state;
    }
}
