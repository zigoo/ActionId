import React, { Component } from 'react'
import WorkersList from './Components/WorkersList/container.js';
//import WorkersDetails from './workersDetails.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <WorkersList />
         {this.props.children}
      </div>
    );
  }
}

export default App;
