import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import SpecificWorker from './Components/SpecificWorker/Specificworker.js';

import workers from './Helpers/workerReducer.js';
import { Provider }  from 'react-redux'; 
import { createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import './index.css';


export const store = createStore(
  workers,
  composeWithDevTools()
);


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
         <Route path="/:id" component={SpecificWorker} />
      </Route>
    </Router>
  </Provider>, 
  document.getElementById('root'));
       //<IndexRoute component={WorkersDetails}/>
