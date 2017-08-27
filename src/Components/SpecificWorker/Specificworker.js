import React, { Component } from 'react';
import WorkersDetails from '../WorkerDetails/container.js';
import Gitrepos from '../Gitrepos/container.js';

class SpecificWorker extends Component {
	render() {
		return (
			<div className="specificworker">
				<WorkersDetails id={this.props.params.id} />
				<Gitrepos id={this.props.params.id} />
			</div>
		);
	}
}

export default SpecificWorker;