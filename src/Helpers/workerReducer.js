import workersList from './workersList.js'

const axiosToRedux = 'axiosToRedux';

const initialState = {
  workersList,
  repos:[]
};


export default function workers (state = initialState , action ) {
  switch (action.type) {
    case axiosToRedux:
      return {
       ...state,
       repos: action.reposList
      }
    default: 
      return state;
    }
}

