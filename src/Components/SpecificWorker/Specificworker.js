import React, { Component } from 'react';
import WorkersDetails from '../WorkerDetails/container.js';
import Gitrepos from '../Gitrepos/container.js';

import './styles.css'

class SpecificWorker extends Component {
	render() {
		return (
			  <div className="container">
			   <div className="specificworker">
			    
				    <WorkersDetails id={this.props.params.id} />
				 
				    <Gitrepos id={this.props.params.id} />
				 
			 
		      </div>
			</div>
		);
	}
}

export default SpecificWorker;