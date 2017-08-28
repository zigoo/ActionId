import React, { Component } from 'react'
import Header from './Components/Header/container.js';
import WorkersList from './Components/WorkersList/container.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header id={this.props.params.id} />
         <WorkersList />
         {this.props.children}
      </div>
    );
  }
}

export default App;
